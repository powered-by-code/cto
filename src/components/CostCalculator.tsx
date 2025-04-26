"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  Suspense,
} from "react";
import { useSearchParams } from "next/navigation";
import siteData from "../data.json";
import { trackEvent, EventNames, updateUserStorage } from "@/utils/analytics";

import { Mail, ArrowDownToLine } from "lucide-react";
import MeetingButton from "./MeetingButton";
import EmailPopup from "./EmailPopup";
import PDFDownloadButton from "./PDFDownloadButton";
import { OpenSourceAlternative, SelectedTool, AlternativeTool } from "./CalculatorPDF";

interface ToolOption {
  id: string;
  name: string;
  category: string;
  type: string;
  description: string;
  costPerUser: number;
  image?: string;
  link?: string;
  icon?: React.ReactNode;
  openSourceAlternatives: OpenSourceAlternative[];
}

// Add a partial type for tool options when some properties might be missing
interface PartialToolOption {
  id: string;
  name: string;
  category: string;
  costPerUser: number;
  openSourceAlternatives: OpenSourceAlternative[];
  type?: string;
  description?: string;
  icon?: React.ReactNode;
}

// Tool categories
const toolCategories = [
  { id: "project", name: "Project Management & Collaboration" },
  { id: "development", name: "Development & DevOps" },
  { id: "office", name: "Office & Productivity" },
  { id: "communication", name: "Communication & Messaging" },
  { id: "business", name: "Business & CRM" },
  { id: "security", name: "Security & VPN" },
  { id: "marketing", name: "Marketing & Analytics" },
  { id: "automation", name: "Automation & Integration" },
];

// All tool options
const toolOptions: Array<ToolOption | PartialToolOption> = [
  // Project Management
  {
    id: "jira",
    name: "Jira",
    category: "project",
    type: "project-management",
    description: "Project management tool",
    costPerUser: 7,
    openSourceAlternatives: [
      {
        name: "OpenProject",
        url: "https://www.openproject.org/",
        description: "Open source project management software",
      },
      {
        name: "Taiga",
        url: "https://www.taiga.io/",
        description: "Free and open-source project management tool",
      },
      {
        name: "Redmine",
        url: "https://www.redmine.org/",
        description: "Flexible project management web application",
      },
    ],
  },
  {
    id: "confluence",
    name: "Confluence",
    costPerUser: 5.75,
    openSourceAlternatives: [
      {
        name: "BookStack",
        url: "https://www.bookstackapp.com/",
        description: "Free and open-source wiki software",
      },
      {
        name: "Wiki.js",
        url: "https://wiki.js.org/",
        description: "Modern and powerful wiki app built on Node.js",
      },
      {
        name: "XWiki",
        url: "https://www.xwiki.org/",
        description: "Advanced open-source enterprise wiki",
      },
    ],
    category: "project",
    type: "collaboration",
    description: "Team collaboration and wiki platform",
  },
  {
    id: "asana",
    name: "Asana",
    costPerUser: 10.99,
    openSourceAlternatives: [
      {
        name: "Kanboard",
        url: "https://kanboard.org/",
        description: "Free and open source Kanban project management software",
      },
      {
        name: "Wekan",
        url: "https://wekan.github.io/",
        description: "Open-source kanban board",
      },
    ],
    category: "project",
    type: "project-management",
    description: "Project and task management platform",
  },
  {
    id: "monday",
    name: "Monday.com",
    costPerUser: 10,
    openSourceAlternatives: [
      {
        name: "Focalboard",
        url: "https://www.focalboard.com/",
        description: "Open source project management from Mattermost",
      },
      {
        name: "Leantime",
        url: "https://leantime.io/",
        description: "Open source project management system",
      },
    ],
    category: "project",
    type: "project-management",
    description: "Work operating system for team management",
  },
  {
    id: "notion",
    name: "Notion",
    costPerUser: 8,
    openSourceAlternatives: [
      {
        name: "AppFlowy",
        url: "https://appflowy.io/",
        description: "Open-source alternative to Notion",
      },
      {
        name: "Focalboard",
        url: "https://www.focalboard.com/",
        description: "Open source project management from Mattermost",
      },
      {
        name: "AFFiNE",
        url: "https://affine.pro/",
        description:
          "Next-gen knowledge base that brings planning, sorting and creating all together",
      },
    ],
    category: "project",
    type: "collaboration",
    description: "All-in-one workspace for notes and collaboration",
  },
  {
    id: "atlassian",
    name: "Atlassian Suite",
    costPerUser: 29,
    openSourceAlternatives: [
      {
        name: "OpenProject + GitLab + Bookstack",
        url: "https://www.openproject.org/",
        description: "Combination of open source tools for complete workflow",
      },
    ],
    category: "project",
    type: "suite",
    description: "Collection of tools including Jira, Confluence, and more",
  },
  {
    id: "clickup",
    name: "ClickUp",
    costPerUser: 9,
    openSourceAlternatives: [
      {
        name: "OpenProject",
        url: "https://www.openproject.org/",
        description: "Open source project management software",
      },
      {
        name: "Taiga",
        url: "https://www.taiga.io/",
        description: "Free and open-source project management tool",
      },
    ],
    category: "project",
    type: "project-management",
    description: "All-in-one productivity platform",
  },
  {
    id: "trello",
    name: "Trello",
    costPerUser: 5,
    openSourceAlternatives: [
      {
        name: "Wekan",
        url: "https://wekan.github.io/",
        description: "Open-source kanban board",
      },
      {
        name: "Kanboard",
        url: "https://kanboard.org/",
        description: "Free and open source Kanban project management software",
      },
      {
        name: "Planka",
        url: "https://planka.app/",
        description: "Open source Trello alternative",
      },
    ],
    category: "project",
    type: "kanban",
    description: "Visual collaboration tool using boards and cards",
  },

  // Development & DevOps
  {
    id: "github",
    name: "GitHub Enterprise",
    costPerUser: 21,
    openSourceAlternatives: [
      {
        name: "GitLab Community Edition",
        url: "https://about.gitlab.com/install/ce-or-ee/",
        description: "Open source software development platform",
      },
      {
        name: "Gitea",
        url: "https://gitea.io/",
        description: "Lightweight, self-hosted Git service",
      },
      {
        name: "Forgejo",
        url: "https://forgejo.org/",
        description: "Lightweight Git platform",
      },
    ],
    category: "development",
    type: "version-control",
    description: "Code hosting and collaboration platform",
  },
  {
    id: "gitlab-premium",
    name: "GitLab Premium",
    costPerUser: 19,
    openSourceAlternatives: [
      {
        name: "GitLab Community Edition",
        url: "https://about.gitlab.com/install/ce-or-ee/",
        description:
          "Open source software development platform with core features",
      },
    ],
    category: "development",
    type: "version-control",
    description:
      "DevOps platform combining Git repository management, CI/CD, and more",
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI/CD Premium",
    costPerUser: 19,
    openSourceAlternatives: [
      {
        name: "Jenkins",
        url: "https://jenkins.io/",
        description: "Leading open source automation server",
      },
      {
        name: "Drone",
        url: "https://www.drone.io/",
        description: "Self-service CI platform",
      },
      {
        name: "Concourse",
        url: "https://concourse-ci.org/",
        description: "Open-source continuous integration tool",
      },
    ],
    category: "development",
    type: "ci-cd",
    description: "Continuous integration and deployment platform",
  },
  {
    id: "bitbucket",
    name: "Bitbucket Premium",
    costPerUser: 6,
    openSourceAlternatives: [
      {
        name: "Gitea",
        url: "https://gitea.io/",
        description: "Lightweight, self-hosted Git service",
      },
      {
        name: "GitLab Community Edition",
        url: "https://about.gitlab.com/install/ce-or-ee/",
        description: "Open source software development platform",
      },
    ],
    category: "development",
    type: "version-control",
    description: "Git solution for professional teams",
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    costPerUser: 6,
    openSourceAlternatives: [
      {
        name: "GitLab Community Edition",
        url: "https://about.gitlab.com/install/ce-or-ee/",
        description: "Open source software development platform",
      },
      {
        name: "Jenkins + Gitea",
        url: "https://jenkins.io/",
        description: "Combined solution for code hosting and CI/CD",
      },
    ],
    category: "development",
    type: "devops",
    description:
      "Development tools for teams to share code, track work, and ship software",
  },
  {
    id: "new-relic",
    name: "New Relic",
    costPerUser: 15,
    openSourceAlternatives: [
      {
        name: "Prometheus + Grafana",
        url: "https://prometheus.io/",
        description: "Open-source monitoring and alerting toolkit",
      },
      {
        name: "SigNoz",
        url: "https://signoz.io/",
        description: "Open-source APM with traces, metrics and logs",
      },
      {
        name: "Elastic Observability",
        url: "https://www.elastic.co/observability",
        description: "Open-source observability stack",
      },
    ],
    category: "development",
    type: "monitoring",
    description: "Observability platform for monitoring software performance",
  },
  {
    id: "datadog",
    name: "Datadog",
    costPerUser: 15,
    openSourceAlternatives: [
      {
        name: "Prometheus + Grafana",
        url: "https://prometheus.io/",
        description: "Open-source monitoring and alerting toolkit",
      },
      {
        name: "Zabbix",
        url: "https://www.zabbix.com/",
        description:
          "Open-source monitoring solution for networks and applications",
      },
      {
        name: "Netdata",
        url: "https://www.netdata.cloud/",
        description: "Real-time performance monitoring",
      },
    ],
    category: "development",
    type: "monitoring",
    description: "Monitoring and security platform for cloud applications",
  },
  {
    id: "posthog",
    name: "PostHog",
    costPerUser: 10,
    openSourceAlternatives: [
      {
        name: "PostHog Open Source",
        url: "https://posthog.com/docs/self-host",
        description:
          "Self-hosted product analytics that you can deploy yourself",
      },
    ],
    category: "development",
    type: "analytics",
    description:
      "Product analytics platform with session recordings and feature flags",
  },
  {
    id: "sentry",
    name: "Sentry",
    costPerUser: 12,
    openSourceAlternatives: [
      {
        name: "GlitchTip",
        url: "https://glitchtip.com/",
        description: "Open source error tracking compatible with Sentry",
      },
      {
        name: "Sentry (Self-hosted)",
        url: "https://github.com/getsentry/self-hosted",
        description: "The self-hosted version of Sentry",
      },
    ],
    category: "development",
    type: "error-tracking",
    description: "Application monitoring with focus on error tracking",
  },

  // Office & Productivity
  {
    id: "office365",
    name: "Microsoft Office 365",
    costPerUser: 12.5,
    openSourceAlternatives: [
      {
        name: "LibreOffice",
        url: "https://www.libreoffice.org/",
        description: "Free and powerful office suite",
      },
      {
        name: "OnlyOffice",
        url: "https://www.onlyoffice.com/",
        description: "Open source office suite with collaborative editing",
      },
      {
        name: "Nextcloud + Collabora Online",
        url: "https://nextcloud.com/",
        description:
          "Combined solution for file storage and collaborative document editing",
      },
    ],
    category: "office",
    type: "productivity-suite",
    description:
      "Business productivity suite including Word, Excel, and PowerPoint",
  },
  {
    id: "gsuite",
    name: "Google Workspace",
    costPerUser: 12,
    openSourceAlternatives: [
      {
        name: "Nextcloud + OnlyOffice",
        url: "https://nextcloud.com/",
        description: "Complete open source productivity solution",
      },
      {
        name: "Nextcloud + Collabora Online",
        url: "https://nextcloud.com/",
        description: "Combined solution for file storage and document editing",
      },
    ],
    category: "office",
    type: "productivity-suite",
    description: "Business apps including Gmail, Docs, Drive, and Calendar",
  },
  {
    id: "dropbox",
    name: "Dropbox Business",
    costPerUser: 15,
    openSourceAlternatives: [
      {
        name: "Nextcloud",
        url: "https://nextcloud.com/",
        description:
          "Self-hosted productivity platform with file sync and share",
      },
      {
        name: "Seafile",
        url: "https://www.seafile.com/",
        description: "Open source file sync and share solution",
      },
      {
        name: "Pydio Cells",
        url: "https://pydio.com/",
        description: "Secure collaborative file sharing platform",
      },
    ],
    category: "office",
    type: "file-storage",
    description: "Cloud storage and file sharing for business",
  },
  {
    id: "box",
    name: "Box Enterprise",
    costPerUser: 20,
    openSourceAlternatives: [
      {
        name: "Nextcloud",
        url: "https://nextcloud.com/",
        description:
          "Self-hosted productivity platform with file sync and share",
      },
      {
        name: "Seafile",
        url: "https://www.seafile.com/",
        description: "Open source file sync and share solution",
      },
    ],
    category: "office",
    type: "file-storage",
    description: "Secure content management and collaboration platform",
  },
  {
    id: "onedrive",
    name: "OneDrive for Business",
    costPerUser: 5,
    openSourceAlternatives: [
      {
        name: "Nextcloud",
        url: "https://nextcloud.com/",
        description:
          "Self-hosted productivity platform with file sync and share",
      },
      {
        name: "Owncloud",
        url: "https://owncloud.com/",
        description: "Open source file sync and content collaboration",
      },
    ],
    category: "office",
    type: "file-storage",
    description: "Microsoft cloud storage and synchronization service",
  },
  {
    id: "evernote",
    name: "Evernote Business",
    costPerUser: 14.99,
    openSourceAlternatives: [
      {
        name: "Joplin",
        url: "https://joplinapp.org/",
        description: "Free, open source note taking and to-do application",
      },
      {
        name: "Trilium Notes",
        url: "https://github.com/zadam/trilium",
        description:
          "Hierarchical note taking application with focus on building knowledge bases",
      },
      {
        name: "StandardNotes",
        url: "https://standardnotes.com/",
        description: "Simple and private notes app",
      },
    ],
    category: "office",
    type: "note-taking",
    description: "Note-taking and task management application",
  },

  // Communication & Messaging
  {
    id: "slack",
    name: "Slack",
    costPerUser: 8,
    openSourceAlternatives: [
      {
        name: "Mattermost",
        url: "https://mattermost.com/",
        description: "Open source, self-hostable online chat service",
      },
      {
        name: "Rocket.Chat",
        url: "https://rocket.chat/",
        description: "Open source team communication",
      },
      {
        name: "Element (Matrix)",
        url: "https://element.io/",
        description: "Secure and decentralized collaboration platform",
      },
    ],
    category: "communication",
    type: "messaging",
    description: "Business communication and messaging platform",
  },
  {
    id: "zoom",
    name: "Zoom",
    costPerUser: 15,
    openSourceAlternatives: [
      {
        name: "Jitsi Meet",
        url: "https://jitsi.org/jitsi-meet/",
        description: "Fully encrypted, 100% open source video conferencing",
      },
      {
        name: "BigBlueButton",
        url: "https://bigbluebutton.org/",
        description: "Web conferencing system for online learning",
      },
      {
        name: "Nextcloud Talk",
        url: "https://nextcloud.com/talk/",
        description: "Self-hosted secure video calls and text chat",
      },
    ],
    category: "communication",
    type: "video-conferencing",
    description: "Video conferencing and online meeting service",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    costPerUser: 8,
    openSourceAlternatives: [
      {
        name: "Element + Jitsi",
        url: "https://element.io/",
        description: "Combined solution for messaging and video conferencing",
      },
      {
        name: "Mattermost + BigBlueButton",
        url: "https://mattermost.com/",
        description: "Combined team chat and video conferencing",
      },
    ],
    category: "communication",
    type: "collaboration",
    description: "Chat-based workspace in Microsoft 365",
  },
  {
    id: "discord-nitro",
    name: "Discord Nitro",
    costPerUser: 9.99,
    openSourceAlternatives: [
      {
        name: "Element (Matrix)",
        url: "https://element.io/",
        description: "Secure and decentralized collaboration platform",
      },
      {
        name: "Rocket.Chat",
        url: "https://rocket.chat/",
        description: "Open source team communication",
      },
    ],
    category: "communication",
    type: "messaging",
    description: "Enhanced features for the Discord communication platform",
  },
  {
    id: "webex",
    name: "Cisco Webex",
    costPerUser: 13.5,
    openSourceAlternatives: [
      {
        name: "Jitsi Meet",
        url: "https://jitsi.org/jitsi-meet/",
        description: "Fully encrypted, 100% open source video conferencing",
      },
      {
        name: "BigBlueButton",
        url: "https://bigbluebutton.org/",
        description: "Web conferencing system designed for online learning",
      },
    ],
    category: "communication",
    type: "video-conferencing",
    description: "Enterprise solution for video conferencing and meetings",
  },

  // Business & CRM
  {
    id: "salesforce",
    name: "Salesforce",
    costPerUser: 25,
    openSourceAlternatives: [
      {
        name: "EspoCRM",
        url: "https://www.espocrm.com/",
        description: "Flexible and simple web-based CRM application",
      },
      {
        name: "SuiteCRM",
        url: "https://suitecrm.com/",
        description: "Award-winning enterprise-grade CRM",
      },
      {
        name: "Odoo CRM",
        url: "https://www.odoo.com/app/crm",
        description: "Open source CRM with a complete suite of business apps",
      },
    ],
    category: "business",
    type: "crm",
    description: "Customer relationship management platform",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    costPerUser: 45,
    openSourceAlternatives: [
      {
        name: "Mautic",
        url: "https://www.mautic.org/",
        description: "Open source marketing automation",
      },
      {
        name: "SuiteCRM",
        url: "https://suitecrm.com/",
        description: "Award-winning enterprise-grade CRM",
      },
      {
        name: "Odoo Marketing",
        url: "https://www.odoo.com/app/marketing",
        description: "Open source marketing tools",
      },
    ],
    category: "business",
    type: "crm",
    description: "Marketing, sales, and service software",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    costPerUser: 19,
    openSourceAlternatives: [
      {
        name: "Zammad",
        url: "https://zammad.org/",
        description: "Web-based open source helpdesk/customer support system",
      },
      {
        name: "osTicket",
        url: "https://osticket.com/",
        description: "Open source support ticket system",
      },
      {
        name: "OTRS Community Edition",
        url: "https://community.otrs.com/",
        description: "Leading open source service management solution",
      },
    ],
    category: "business",
    type: "customer-service",
    description: "Customer service software and support ticketing system",
  },
  {
    id: "tableau",
    name: "Tableau",
    costPerUser: 70,
    openSourceAlternatives: [
      {
        name: "Metabase",
        url: "https://www.metabase.com/",
        description: "Open source business intelligence tool",
      },
      {
        name: "Apache Superset",
        url: "https://superset.apache.org/",
        description:
          "Modern, enterprise-ready business intelligence web application",
      },
      {
        name: "Redash",
        url: "https://redash.io/",
        description: "Open source data visualization and dashboard tool",
      },
    ],
    category: "business",
    type: "analytics",
    description:
      "Interactive data visualization and business intelligence software",
  },
  {
    id: "dynamics",
    name: "Microsoft Dynamics",
    costPerUser: 40,
    openSourceAlternatives: [
      {
        name: "Odoo",
        url: "https://www.odoo.com/",
        description: "Open source ERP and CRM",
      },
      {
        name: "ERPNext",
        url: "https://erpnext.com/",
        description: "Full-featured business management solution",
      },
      {
        name: "Axelor",
        url: "https://www.axelor.com/",
        description: "Open source ERP, CRM and BPM platform",
      },
    ],
    category: "business",
    type: "erp",
    description: "Enterprise resource planning and CRM applications",
  },
  {
    id: "quickbooks",
    name: "Quickbooks",
    costPerUser: 25,
    openSourceAlternatives: [
      {
        name: "Akaunting",
        url: "https://akaunting.com/",
        description: "Free and online accounting software",
      },
      {
        name: "ERPNext",
        url: "https://erpnext.com/",
        description:
          "Full-featured business management solution with accounting",
      },
      {
        name: "Invoice Ninja",
        url: "https://www.invoiceninja.com/",
        description: "Free open source invoicing and accounting platform",
      },
    ],
    category: "business",
    type: "accounting",
    description: "Accounting software for small businesses",
  },

  // Marketing & Analytics
  {
    id: "mailchimp",
    name: "Mailchimp",
    costPerUser: 20,
    openSourceAlternatives: [
      {
        name: "Mautic",
        url: "https://www.mautic.org/",
        description: "Open source marketing automation",
      },
      {
        name: "Listmonk",
        url: "https://listmonk.app/",
        description: "Self-hosted newsletter and mailing list manager",
      },
      {
        name: "Postal",
        url: "https://postal.atech.media/",
        description: "Open source mail delivery platform",
      },
    ],
    category: "marketing",
    type: "email-marketing",
    description: "Marketing automation platform and email marketing service",
  },
  {
    id: "google-analytics",
    name: "Google Analytics 360",
    costPerUser: 12.5,
    openSourceAlternatives: [
      {
        name: "Matomo (formerly Piwik)",
        url: "https://matomo.org/",
        description: "Open source web analytics platform",
      },
      {
        name: "Plausible Analytics",
        url: "https://plausible.io/",
        description: "Simple, privacy-friendly alternative to Google Analytics",
      },
      {
        name: "Umami",
        url: "https://umami.is/",
        description:
          "Simple, fast, privacy-focused alternative to Google Analytics",
      },
    ],
    category: "marketing",
    type: "analytics",
    description: "Enterprise web analytics service by Google",
  },
  {
    id: "adobe-analytics",
    name: "Adobe Analytics",
    costPerUser: 33.33,
    openSourceAlternatives: [],
    category: "marketing",
    type: "analytics",
    description: "Analytics tool in Adobe Experience Cloud",
  },
  {
    id: "semrush",
    name: "SEMrush",
    costPerUser: 99.95,
    openSourceAlternatives: [],
    category: "marketing",
    type: "seo",
    description: "SEO and competitive analysis tool",
  },
  {
    id: "hootsuite",
    name: "Hootsuite",
    costPerUser: 19,
    openSourceAlternatives: [],
    category: "marketing",
    type: "social-media",
    description: "Social media management platform",
  },
  {
    id: "buffer",
    name: "Buffer",
    costPerUser: 15,
    openSourceAlternatives: [],
    category: "marketing",
    type: "social-media",
    description: "Social media management software",
  },

  // Automation & Integration
  {
    id: "zapier",
    name: "Zapier",
    costPerUser: 19.99,
    openSourceAlternatives: [],
    category: "automation",
    type: "workflow-automation",
    description: "Online automation tool that connects apps and services",
  },
  {
    id: "integromat",
    name: "Make (Integromat)",
    costPerUser: 9.99,
    openSourceAlternatives: [],
    category: "automation",
    type: "workflow-automation",
    description: "Visual platform to connect apps and automate workflows",
  },
  {
    id: "power-automate",
    name: "Microsoft Power Automate",
    costPerUser: 15,
    openSourceAlternatives: [],
    category: "automation",
    type: "workflow-automation",
    description:
      "Cloud-based service that makes it practical to build automated workflows",
  },
  {
    id: "tray-io",
    name: "Tray.io",
    costPerUser: 29,
    openSourceAlternatives: [],
    category: "automation",
    type: "integration-platform",
    description: "General automation platform for enterprise",
  },
  {
    id: "workato",
    name: "Workato",
    costPerUser: 40,
    openSourceAlternatives: [],
    category: "automation",
    type: "integration-platform",
    description: "Enterprise automation and integration platform",
  },

  // Security & VPN
  {
    id: "nordvpn",
    name: "NordVPN Teams",
    costPerUser: 7,
    openSourceAlternatives: [],
    category: "security",
    type: "vpn",
    description: "Business VPN solution for team security",
  },
  {
    id: "expressvpn",
    name: "ExpressVPN",
    costPerUser: 8.32,
    openSourceAlternatives: [],
    category: "security",
    type: "vpn",
    description: "VPN service for secure internet connection",
  },
  {
    id: "okta",
    name: "Okta",
    costPerUser: 4,
    openSourceAlternatives: [],
    category: "security",
    type: "identity-management",
    description: "Identity and access management solution",
  },
  {
    id: "lastpass",
    name: "LastPass",
    costPerUser: 4,
    openSourceAlternatives: [],
    category: "security",
    type: "password-manager",
    description: "Password management solution",
  },
  {
    id: "1password",
    name: "1Password",
    costPerUser: 7.99,
    openSourceAlternatives: [],
    category: "security",
    type: "password-manager",
    description: "Password manager for teams and businesses",
  },
  {
    id: "crowdstrike",
    name: "CrowdStrike",
    costPerUser: 8.99,
    openSourceAlternatives: [],
    category: "security",
    type: "endpoint-security",
    description: "Cloud-delivered endpoint and workload protection",
  },
];

// Add this after the toolOptions array
const getOpenSourceAlternatives = (selectedToolIds: string[]) => {
  const alternatives: { 
    toolName: string;
    alternatives: OpenSourceAlternative[];
    costPerUser: number;
  }[] = [];

  selectedToolIds.forEach(toolId => {
    const tool = toolOptions.find(t => t.id === toolId);
    if (tool && tool.openSourceAlternatives.length > 0) {
      alternatives.push({
        toolName: tool.name,
        alternatives: tool.openSourceAlternatives,
        costPerUser: tool.costPerUser
      });
    }
  });

  return alternatives;
};

// Create a wrapper component that uses useSearchParams
function CostCalculatorWithParams() {
  const searchParams = useSearchParams();
  
  // Core state
  const [teamSize, setTeamSize] = useState<number>(0);
  const [teamSizeText, setTeamSizeText] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("project");
  const [progress, setProgress] = useState<number>(0);
  const [departments, setDepartments] = useState<string[]>([]);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");

  // Company data from data.json
  const { websiteUrl, companyName, contact } = siteData;

  // Move getAllVisibleCategories to be defined BEFORE the useEffect that uses it
  // And wrap it in useCallback to avoid recreating it on every render
  const getAllVisibleCategories = useCallback(() => {
    return toolCategories.filter((category) => {
      if (departments.length === 0) return true;

      if (category.id === "project" && !departments.includes("product"))
        return false;
      if (category.id === "development" && !departments.includes("engineering"))
        return false;
      if (category.id === "office" && !departments.includes("operations"))
        return false;
      if (category.id === "business" && !departments.includes("sales"))
        return false;
      if (category.id === "marketing" && !departments.includes("marketing"))
        return false;

      // Always show communication, security, and automation
      return true;
    });
  }, [departments]); // Only recreate when departments change

  // Calculate total savings
  const totalCostPerYear = useMemo(() => {
    return selectedTools.reduce((total, toolId) => {
      const tool = toolOptions.find((tool) => tool.id === toolId);
      return total + (tool ? tool.costPerUser * teamSize * 12 : 0);
    }, 0);
  }, [selectedTools, teamSize]);

  const totalSavingsPerYear = useMemo(() => {
    if (selectedTools.length === 0) return 0;
    return totalCostPerYear;
  }, [totalCostPerYear, selectedTools]);

  // Calculate our service fee based on percentage from data.json
  const ourServiceFee = useMemo(() => {
    // Use 25% instead of the percentage from data.json
    return Math.round(totalSavingsPerYear * (25 / 100));
  }, [totalSavingsPerYear]);

  // Calculate net savings (total savings minus our service fee)
  const netSavings = useMemo(() => {
    return totalSavingsPerYear - ourServiceFee;
  }, [totalSavingsPerYear, ourServiceFee]);

  const totalServiceFees = useMemo(() => {
    return selectedTools.reduce((total, toolId) => {
      const tool = toolOptions.find((tool) => tool.id === toolId);
      return total + (tool && tool.costPerUser ? tool.costPerUser * teamSize * 12 : 0);
    }, 0);
  }, [selectedTools, teamSize]);

  // Update progress when user advances
  useEffect(() => {
    if (showResults) {
      // Always set to 100% when showing results
      setProgress(100);
    } else if (step === 1) {
      setProgress(0);
    } else if (step === 2) {
      setProgress(25);
    } else if (step === 3) {
      // Calculate based on current category position
      const allCategoriesToShow = getAllVisibleCategories();
      const currentIndex = allCategoriesToShow.findIndex(
        (c) => c.id === activeCategory
      );
      const totalCategories = allCategoriesToShow.length;

      if (totalCategories > 0) {
        const categoryProgress = (currentIndex / totalCategories) * 50;
        setProgress(50 + categoryProgress);
      } else {
        setProgress(50);
      }
    }
  }, [step, activeCategory, showResults, departments, getAllVisibleCategories]);

  const handleTeamSizeChange = (size: number) => {
    setTeamSize(size);
    updateUserStorage({
      calculatorData: {
        selectedTools: selectedTools.map((id) => {
          const tool = toolOptions.find((t) => t.id === id);
          return {
            id: tool?.id || "",
            name: tool?.name || "",
            category: tool?.category || "",
            price: tool?.costPerUser || 0,
          };
        }),
        teamSize: size,
      },
    });

    if (selectedTools.length > 0) {
      trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email: "" }, {
          action: "updated_team_size",
          teamSize: size,
          selectedToolsCount: selectedTools.length,
          totalSavingsPerYear: totalSavingsPerYear,
      });
    }
  };

  const handleTeamSizeSelect = (size: number) => {
    setTeamSize(size);
    setTeamSizeText(size.toString());
  };

  const handleToolToggle = (toolId: string) => {
    setSelectedTools((prev) => {
      if (prev.includes(toolId)) {
        return prev.filter((id) => id !== toolId);
      } else {
        return [...prev, toolId];
      }
    });
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (teamSize > 0) {
        setStep(2);
      }
    } else if (step === 2) {
      if (departments.length > 0) {
        setStep(3);

        // Set initial category to the first visible category
        const visibleCategories = getAllVisibleCategories();
        if (visibleCategories.length > 0) {
          setActiveCategory(visibleCategories[0].id);
        }
      }
    } else if (step === 3 && !showResults) {
      // Move to the next category or show results if we're at the last category
      const visibleCategories = getAllVisibleCategories();
      const currentIndex = visibleCategories.findIndex(
        (c) => c.id === activeCategory
      );

      if (currentIndex < visibleCategories.length - 1) {
        // Move to next category
        setActiveCategory(visibleCategories[currentIndex + 1].id);
      } else {
        // We've gone through all categories, show results
        setShowResults(true);
      }
    }
  };

  const handlePrevStep = () => {
    if (step > 1 && step <= 3 && !showResults) {
      if (step === 3) {
        // If we're in the first category, go back to department selection
        const visibleCategories = getAllVisibleCategories();
        const currentIndex = visibleCategories.findIndex(
          (c) => c.id === activeCategory
        );

        if (currentIndex <= 0) {
          setStep(2);
        } else {
          // Otherwise go to previous category
          setActiveCategory(visibleCategories[currentIndex - 1].id);
        }
      } else {
        setStep(step - 1);
      }
    } else if (showResults) {
      setShowResults(false);
      // Go back to last category
      const visibleCategories = getAllVisibleCategories();
      if (visibleCategories.length > 0) {
        setActiveCategory(visibleCategories[visibleCategories.length - 1].id);
      }
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleDepartmentToggle = (department: string) => {
    setDepartments((prev) => {
      if (prev.includes(department)) {
        return prev.filter((d) => d !== department);
      } else {
        return [...prev, department];
      }
    });
  };

  // Replace renderCategoryTabs with a function that just shows the current category
  const getCurrentCategoryInfo = () => {
    const category = toolCategories.find((c) => c.id === activeCategory);
    if (!category) return null;

    const visibleCategories = getAllVisibleCategories();
    const currentIndex = visibleCategories.findIndex(
      (c) => c.id === activeCategory
    );
    const totalCategories = visibleCategories.length;

    return {
      name: category.name,
      progress: `${currentIndex + 1} of ${totalCategories}`,
    };
  };

  // Simplified savings display for results page
  const renderSavingsChart = () => {
    return (
      <div className="mt-2 sm:mt-4">
        <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">
          Selected Tools Summary
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra table-xs sm:table-sm w-full">
            <thead>
              <tr className="text-2xs sm:text-xs">
                <th>Tool</th>
                <th className="hidden sm:table-cell">Department</th>
                <th className="text-right">Savings</th>
              </tr>
            </thead>
            <tbody className="text-2xs sm:text-xs">
              {selectedTools.map((toolId) => {
                const tool = toolOptions.find((t) => t.id === toolId);
                if (!tool) return null;

                const toolCost = tool.costPerUser * teamSize * 12;
                const category = toolCategories.find(
                  (c) => c.id === tool.category
                );

                return (
                  <tr key={tool.id}>
                    <td className="py-1 sm:py-2">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="hidden sm:inline">{tool.icon}</span>
                        <span>{tool.name}</span>
                      </div>
                    </td>
                    <td className="py-1 sm:py-2 hidden sm:table-cell">
                      {category?.name || ""}
                    </td>
                    <td className="py-1 sm:py-2 font-medium text-right">
                      $
                      {toolCost.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderStepIndicator = () => {
    return (
      <div className="mb-4 sm:mb-6">
        <div className="w-full bg-base-200 rounded-full h-1.5 sm:h-2">
          <div
            className="bg-primary h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 sm:mt-4 text-2xs sm:text-sm">
          <div
            className={`flex items-center ${
              step >= 1 ? "text-primary font-medium" : "opacity-50"
            }`}
          >
            <div
              className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-1 sm:mr-2 text-2xs sm:text-xs ${
                step >= 1 ? "bg-primary text-primary-content" : "bg-base-200"
              }`}
            >
              1
            </div>
            <span className="hidden xs:inline">Team Size</span>
            <span className="xs:hidden">Team</span>
          </div>
          <div
            className={`flex items-center ${
              step >= 2 ? "text-primary font-medium" : "opacity-50"
            }`}
          >
            <div
              className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-1 sm:mr-2 text-2xs sm:text-xs ${
                step >= 2 ? "bg-primary text-primary-content" : "bg-base-200"
              }`}
            >
              2
            </div>
            <span className="hidden xs:inline">Departments</span>
            <span className="xs:hidden">Dept</span>
          </div>
          <div
            className={`flex items-center ${
              step >= 3 ? "text-primary font-medium" : "opacity-50"
            }`}
          >
            <div
              className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-1 sm:mr-2 text-2xs sm:text-xs ${
                step >= 3 ? "bg-primary text-primary-content" : "bg-base-200"
              }`}
            >
              3
            </div>
            <span>Tools</span>
          </div>
          <div
            className={`flex items-center ${
              showResults ? "text-primary font-medium" : "opacity-50"
            }`}
          >
            <div
              className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-1 sm:mr-2 text-2xs sm:text-xs ${
                showResults ? "bg-primary text-primary-content" : "bg-base-200"
              }`}
            >
              4
            </div>
            <span>Results</span>
          </div>
        </div>
      </div>
    );
  };

  // Track tool selection without restoring state
  const handleToolSelect = (toolId: string, isSelected: boolean) => {
    // Toggle the tool selection
    const updatedSelectedTools = isSelected
      ? [...selectedTools, toolId]
      : selectedTools.filter((id) => id !== toolId);

    setSelectedTools(updatedSelectedTools);

    // Track the selection event
    const selectedTool = toolOptions.find((tool) => tool.id === toolId);
    if (selectedTool) {
      // Store analytics data in localStorage
      updateUserStorage({
        calculatorData: {
          selectedTools: updatedSelectedTools.map((id) => {
            const tool = toolOptions.find(
              (t) => t.id === id
            ) as PartialToolOption;
            return {
              id: tool.id,
              name: tool.name,
              category: tool.category,
              price: tool.costPerUser,
            };
          }),
          teamSize: teamSize,
        },
      });

      trackEvent(
        EventNames.IT_BUDGET_OPTIMIZER,
        { email: "" },
        {
          action: isSelected ? "tool_selected" : "tool_deselected",
          toolId,
          toolName: selectedTool.name,
          toolCategory: selectedTool.category,
          toolPrice: selectedTool.costPerUser,
          teamSize: teamSize,
          totalTools: updatedSelectedTools.length,
        }
      );
    }
  };

  // Update the URL parameter handling in useEffect
  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      try {
        const parts = dataParam.split(",");
        let decodedTeamSize = 0;
        let decodedSelectedTools: string[] = [];

        parts.forEach((part: string) => {
          if (part.startsWith("t")) {
            decodedTeamSize = parseInt(part.substring(1));
          } else if (part.startsWith("i")) {
            decodedSelectedTools = part.substring(1).split(",").filter(Boolean);
          }
        });

        if (decodedTeamSize > 0) {
          setTeamSize(decodedTeamSize);
          setTeamSizeText(decodedTeamSize.toString());
        }

        if (decodedSelectedTools.length > 0) {
          setSelectedTools(decodedSelectedTools);
          setShowResults(true);
          setStep(4);
        }

        trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email: "" }, {
          action: "loaded_from_url",
          teamSize: decodedTeamSize,
          selectedTools: decodedSelectedTools,
        });
      } catch (e) {
        console.error("Error parsing URL data:", e);
      }
    }
  }, [searchParams]);

  // Update the handleEmailSubmit function
  const handleEmailSubmit = async (formData: {
    email: string;
    name?: string;
    jobTitle?: string;
  }) => {
    try {
      // Create the responses string for the email service to use
      const calculatorResponses = selectedTools.length > 0 ? `t${teamSize},i${selectedTools.join(',')}` : '';
      
      const calculatorData = {
        email: formData.email,
        name: formData.name || "",
        jobTitle: formData.jobTitle || "",
        totalSavingsPerYear,
        teamSize,
        calculator_link: calculatorResponses,
        selectedTools: selectedTools.map((toolId) => {
          const tool = toolOptions.find((t) => t.id === toolId);
          return {
            id: tool?.id || "",
            name: tool?.name || "",
            category: tool?.category || "",
            price: tool?.costPerUser || 0,
          };
        }),
      };

      // Store data in localStorage
      updateUserStorage({
        calculatorData,
      });

      // Only track if we have calculator data
      if (calculatorResponses) {
        // Track the event with email in both places
        await trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email: formData.email }, {
          action: "requested_report",
          teamSize: String(teamSize),
          totalSavingsPerYear: String(totalSavingsPerYear),
          toolCount: String(selectedTools.length),
          name: formData.name || "",
          firstName: formData.name?.split(" ")[0] || "",
          jobTitle: formData.jobTitle || "",
          calculator_link: calculatorResponses,
          email: formData.email, // Add email to properties as well
        });
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("There was an error sending your report. Please try again.");
    }
  };

  return (
    <div className="calculator-container max-w-3xl mx-auto bg-base-100 rounded-box shadow-md p-2 sm:p-4 text-xs sm:text-sm">
      {/* Progress indicator */}
      <div className="mb-3 sm:mb-5">{renderStepIndicator()}</div>

      {step === 1 && (
        <div className="space-y-3 sm:space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What's your team size?
            </h2>
            <p className="text-sm sm:text-base opacity-80">
              Enter how many people need access to your software tools.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
            {[25, 50, 100, 200].map((size) => (
              <div
                key={size}
                onClick={() => handleTeamSizeSelect(size)}
                className={`card cursor-pointer transition-all duration-200 ${
                  teamSize === size
                    ? "bg-primary text-primary-content shadow-md"
                    : "bg-base-200 hover:bg-base-300"
                }`}
              >
                <div className="card-body p-2 sm:p-4 text-center">
                  <div className="text-base sm:text-lg font-bold">{size}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="form-control mt-2 sm:mt-4">
            <label className="label py-1">
              <span className="label-text text-sm sm:text-base w-full text-end">
                Or enter a custom number:
              </span>
            </label>
            <div className="grid grid-cols-4 gap-2 my-4">
              <input
                type="text"
                placeholder=""
                className="input input-bordered input-lg"
                value={teamSizeText}
                onChange={(e) => setTeamSizeText(e.target.value)}
                onBlur={() => {
                  const size = parseInt(teamSizeText);
                  if (!isNaN(size) && size > 0) {
                    handleTeamSizeChange(size);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const size = parseInt(teamSizeText);
                    if (!isNaN(size) && size > 0) {
                      handleTeamSizeChange(size);
                      handleNextStep();
                    }
                  }
                }}
              />
            </div>
            <div className="flex justify-end">
              {" "}
              <button
                onClick={handleNextStep}
                className="btn btn-primary btn-sm"
                disabled={teamSize <= 0}
              >
                Next <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3 sm:space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Which departments use software tools?
            </h2>
            <p className="text-sm sm:text-base opacity-80">
              Select all that apply to tailor our recommendations to your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {[
              {
                id: "development",
                name: "Engineering",
                icon: "🛠️",
                desc: "Development, DevOps, QA",
              },
              {
                id: "design",
                name: "Design",
                icon: "🎨",
                desc: "UX/UI, Graphics, Creative",
              },
              {
                id: "product",
                name: "Product",
                icon: "📊",
                desc: "Product Management, Analytics",
              },
              {
                id: "marketing",
                name: "Marketing",
                icon: "📢",
                desc: "Marketing, Content",
              },
              {
                id: "sales",
                name: "Sales & CRM",
                icon: "💼",
                desc: "Sales, Customer Relations",
              },
              {
                id: "operations",
                name: "Operations",
                icon: "🏢",
                desc: "Finance, HR, Administration",
              },
              {
                id: "support",
                name: "Support",
                icon: "🎧",
                desc: "Customer Support, Success",
              },
            ].map((dept) => (
              <div
                key={dept.id}
                onClick={() => handleDepartmentToggle(dept.id)}
                className={`card cursor-pointer transition-all duration-200 ${
                  departments.includes(dept.id)
                    ? "bg-primary text-primary-content shadow-md"
                    : "bg-base-200 hover:bg-base-300"
                }`}
              >
                <div className="card-body p-2 sm:p-3">
                  <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">
                    {dept.icon}
                  </div>
                  <h3 className="font-bold text-xs sm:text-base">
                    {dept.name}
                  </h3>
                  <p className="text-2xs opacity-70 hidden sm:block">
                    {dept.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className="btn btn-outline btn-xs sm:btn-sm"
            >
              <span className="mr-1">←</span> Back
            </button>
            <button
              onClick={handleNextStep}
              className="btn btn-primary btn-xs sm:btn-sm"
              disabled={departments.length === 0}
            >
              Next <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && !showResults && (
        <div className="space-y-3 sm:space-y-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Which tools is your team currently using?
            </h2>
            <p className="text-sm sm:text-base opacity-80">
              Select the commercial tools your team uses for a personalized
              savings estimate.
            </p>
          </div>

          {getCurrentCategoryInfo() && (
            <div className="bg-base-200 p-2 sm:p-3 rounded-lg flex justify-between items-center">
              <h3 className="font-bold text-sm sm:text-base">
                {getCurrentCategoryInfo()?.name || ""}
              </h3>
              <span className="badge badge-primary badge-sm">
                {getCurrentCategoryInfo()?.progress || ""}
              </span>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {toolOptions
              .filter((tool) => tool.category === activeCategory)
              .map((tool) => (
                <div
                  key={tool.id}
                  onClick={() =>
                    handleToolSelect(tool.id, !selectedTools.includes(tool.id))
                  }
                  className={`card cursor-pointer transition-all duration-200 ${
                    selectedTools.includes(tool.id)
                      ? "bg-primary text-primary-content shadow-md"
                      : "bg-base-200 hover:bg-base-300"
                  }`}
                >
                  <div className="card-body p-2 sm:p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">
                          {tool.icon}
                        </div>
                        <h3 className="font-bold text-xs sm:text-base">
                          {tool.name}
                        </h3>
                        <div className="text-2xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                          ${tool.costPerUser}/user/mo
                        </div>
                      </div>
                      <div className="form-control">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm"
                          checked={selectedTools.includes(tool.id)}
                          onChange={() => {}} // Handle in parent onclick
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className="btn btn-outline btn-xs sm:btn-sm"
            >
              <span className="mr-1">←</span> Back
            </button>
            <button
              onClick={handleNextStep}
              className="btn btn-primary btn-xs sm:btn-sm"
            >
              {activeCategory === toolCategories[toolCategories.length - 1].id
                ? "View Results"
                : "Next Category"}
            </button>
          </div>
        </div>
      )}

      {showResults && (
        <div className="calculator-results space-y-3 sm:space-y-5">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Open Source Savings Potential
            </h1>
          </div>

          {renderSavingsChart()}
          
          <div className="grid grid-cols-1">
            <div className="stats shadow-sm sm:shadow-md">
              <div className="stat p-2 sm:p-4">
                <div className="stat-title text-xs sm:text-base">
                  Annual Savings
                </div>
                <div className="text-center stat-value text-success text-xl sm:text-4xl">
                  ${totalSavingsPerYear.toLocaleString("en-US", {
                    maximumFractionDigits: 0,
                  })}
                </div>
                <div className="text-end stat-desc text-2xs sm:text-sm">
                  By switching to open source
                </div>
              </div>
            </div>
          </div>

          {/* Show open source alternatives if coming from link params */}
          {searchParams.get("data") && (
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Recommended Open Source Alternatives</h2>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Current Tool</th>
                      <th>Cost/User</th>
                      <th>Open Source Alternative</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getOpenSourceAlternatives(selectedTools).map((item, index) => (
                      item.alternatives.map((alt, altIndex) => (
                        <tr key={`${index}-${altIndex}`}>
                          {altIndex === 0 && (
                            <>
                              <td rowSpan={item.alternatives.length} className="font-medium">
                                {item.toolName}
                              </td>
                              <td rowSpan={item.alternatives.length}>
                                ${item.costPerUser}/mo
                              </td>
                            </>
                          )}
                          <td>
                            {alt.url ? (
                              <a href={alt.url} target="_blank" rel="noopener noreferrer" className="link link-primary">
                                {alt.name}
                              </a>
                            ) : (
                              alt.name
                            )}
                          </td>
                          <td className="text-sm opacity-80">{alt.description}</td>
                        </tr>
                      ))
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

            <div className="text-center space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold">
                Ready to Start Your Open Source Journey?
              </h3>
              <p className="text-xs sm:text-sm opacity-80 max-w-2xl mx-auto">
              Our team can help you plan and execute a smooth transition to open source alternatives.
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                <MeetingButton
                text="Schedule a Free Consultation"
                  className="btn-xs sm:btn-sm rounded-full hover:shadow-md transition-transform hover:-translate-y-1"
                  onClick={() => {
                  trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email: "" }, {
                        action: "clicked_consultation",
                        totalSavingsPerYear: String(totalSavingsPerYear),
                        teamSize: String(teamSize),
                        toolCount: String(selectedTools.length),
                  });
                  }}
                />
              {searchParams.get("data") ? (
                <PDFDownloadButton
                  teamSize={teamSize}
                  selectedTools={selectedTools.map(toolId => {
                    const tool = toolOptions.find(t => t.id === toolId);
                    return tool ? {
                      name: tool.name,
                      category: tool.category,
                      costPerUser: tool.costPerUser
                    } : null;
                  }).filter((tool): tool is SelectedTool => tool !== null)}
                  totalSavingsPerYear={totalCostPerYear}
                  openSourceAlternatives={getOpenSourceAlternatives(selectedTools)}
                />
              ) : (
                <button
                  onClick={() => setShowEmailForm(true)}
                  className="btn btn-secondary btn-xs sm:btn-sm hover:shadow-md transition-transform hover:-translate-y-1 animate-bounce-custom"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Email detailed report
                </button>
              )}
              </div>
            </div>

          {showEmailForm && (
            <EmailPopup
              isOpen={showEmailForm}
              onClose={() => setShowEmailForm(false)}
              onSubmit={handleEmailSubmit}
              title="Get Your Detailed Report"
              description="We'll send your personalized savings report to your email address."
              serviceUrl="/services/tech-cost-optimization"
              serviceName="Tech Cost Optimization Service"
            />
          )}
        </div>
      )}
    </div>
  );
}

// Modify your main component to accept searchParams as a prop instead of using the hook directly
function CostCalculator() {
  return (
    <Suspense fallback={<div className="w-full max-w-4xl mx-auto p-8 text-center">Loading calculator...</div>}>
      <CostCalculatorWithParams />
    </Suspense>
  );
}

export default CostCalculator;
