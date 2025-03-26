'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Trello, 
  FileText, 
  CheckSquare, 
  Calendar, 
  BookOpen, 
  Settings, 
  BarChart, 
  GitBranch, 
  Github, 
  GitMerge, 
  Folder, 
  Cloud, 
  Dog,
  BarChart2, 
  AlertTriangle,
  FileSpreadsheet, 
  Box, 
  MessageSquare,
  Video, 
  Users, 
  Gamepad2, 
  VideoIcon,
  UsersRound,
  Search, 
  Headphones, 
  Building2, 
  DollarSign,
  Mail, 
  BarChart3, 
  AreaChart, 
  SearchIcon,
  Smartphone, 
  TabletSmartphone,
  Zap, 
  RefreshCw, 
  Cog, 
  Cable,
  Lock, 
  KeyRound, 
  Key, 
  ShieldCheck
} from 'lucide-react';
import siteData from '../data.json';

interface ToolOption {
  id: string;
  name: string;
  costPerUser: number;
  openSourceAlternative: string;
  savings: number; // percentage of savings (0-100)
  icon: React.ReactNode; // Use React.ReactNode for Lucid icons
  serviceCost?: number; // Optional additional service cost per user
  category: string; // Tool category
}

// Tool categories
const toolCategories = [
  { id: 'project', name: 'Project Management & Collaboration' },
  { id: 'development', name: 'Development & DevOps' },
  { id: 'office', name: 'Office & Productivity' },
  { id: 'communication', name: 'Communication & Messaging' },
  { id: 'business', name: 'Business & CRM' },
  { id: 'security', name: 'Security & VPN' },
  { id: 'marketing', name: 'Marketing & Analytics' },
  { id: 'automation', name: 'Automation & Integration' }
];

// Price data for common commercial tools and their open source alternatives
const toolOptions: ToolOption[] = [
  // Project Management & Collaboration
  {
    id: 'jira',
    name: 'Jira',
    costPerUser: 7.75,
    openSourceAlternative: 'Taiga / Redmine',
    savings: 100,
    icon: <Trello />,
    serviceCost: 0.75,
    category: 'project'
  },
  {
    id: 'confluence',
    name: 'Confluence',
    costPerUser: 5.75,
    openSourceAlternative: 'BookStack / Wiki.js',
    savings: 100,
    icon: <FileText />,
    serviceCost: 0.50,
    category: 'project'
  },
  {
    id: 'asana',
    name: 'Asana',
    costPerUser: 10.99,
    openSourceAlternative: 'OpenProject / Taiga',
    savings: 100,
    icon: <CheckSquare />,
    serviceCost: 1.10,
    category: 'project'
  },
  {
    id: 'monday',
    name: 'Monday.com',
    costPerUser: 10,
    openSourceAlternative: 'Leantime / Focalboard',
    savings: 100,
    icon: <Calendar />,
    serviceCost: 1.00,
    category: 'project'
  },
  {
    id: 'notion',
    name: 'Notion',
    costPerUser: 8,
    openSourceAlternative: 'AppFlowy / AFFiNE',
    savings: 100,
    icon: <BookOpen />,
    serviceCost: 0.80,
    category: 'project'
  },
  {
    id: 'atlassian',
    name: 'Atlassian Suite',
    costPerUser: 29,
    openSourceAlternative: 'GitLab + OpenProject',
    savings: 100,
    icon: <Settings />,
    serviceCost: 2.90,
    category: 'project'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    costPerUser: 9,
    openSourceAlternative: 'Kanboard / Taiga',
    savings: 100,
    icon: <BarChart />,
    serviceCost: 0.90,
    category: 'project'
  },
  {
    id: 'trello',
    name: 'Trello',
    costPerUser: 5,
    openSourceAlternative: 'Wekan / Kanboard',
    savings: 100,
    icon: <Trello />,
    serviceCost: 0.50,
    category: 'project'
  },
  
  // Development & DevOps
  {
    id: 'github',
    name: 'GitHub Enterprise',
    costPerUser: 21,
    openSourceAlternative: 'GitLab Community / Gitea',
    savings: 100,
    icon: <Github />,
    serviceCost: 1.50,
    category: 'development'
  },
  {
    id: 'gitlab-premium',
    name: 'GitLab Premium',
    costPerUser: 19,
    openSourceAlternative: 'GitLab Community Edition',
    savings: 100,
    icon: <GitBranch />,
    serviceCost: 1.90,
    category: 'development'
  },
  {
    id: 'gitlab-ci',
    name: 'GitLab CI/CD Premium',
    costPerUser: 19,
    openSourceAlternative: 'Jenkins / Drone CI',
    savings: 100,
    icon: <GitMerge />,
    serviceCost: 1.90,
    category: 'development'
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket Premium',
    costPerUser: 6,
    openSourceAlternative: 'Gitea / Gogs',
    savings: 100,
    icon: <Folder />,
    serviceCost: 0.60,
    category: 'development'
  },
  {
    id: 'azure-devops',
    name: 'Azure DevOps',
    costPerUser: 6,
    openSourceAlternative: 'GitLab CI/CD + Jenkins',
    savings: 100,
    icon: <Cloud />,
    serviceCost: 0.60,
    category: 'development'
  },
  {
    id: 'new-relic',
    name: 'New Relic',
    costPerUser: 15,
    openSourceAlternative: 'Prometheus + Grafana',
    savings: 100,
    icon: <BarChart2 />,
    serviceCost: 1.50,
    category: 'development'
  },
  {
    id: 'datadog',
    name: 'Datadog',
    costPerUser: 15,
    openSourceAlternative: 'Grafana + Loki + Prometheus',
    savings: 100,
    icon: <Dog />,
    serviceCost: 1.50,
    category: 'development'
  },
  {
    id: 'posthog',
    name: 'PostHog',
    costPerUser: 10,
    openSourceAlternative: 'PostHog Open Source / Umami',
    savings: 100,
    icon: <BarChart />,
    serviceCost: 1.00,
    category: 'development'
  },
  {
    id: 'sentry',
    name: 'Sentry',
    costPerUser: 12,
    openSourceAlternative: 'Sentry Open Source / GlitchTip',
    savings: 100,
    icon: <AlertTriangle />,
    serviceCost: 1.20,
    category: 'development'
  },
  
  // Office & Productivity
  {
    id: 'office365',
    name: 'Microsoft Office 365',
    costPerUser: 12.5,
    openSourceAlternative: 'LibreOffice / OnlyOffice',
    savings: 100,
    icon: <FileSpreadsheet />,
    serviceCost: 1.25,
    category: 'office'
  },
  {
    id: 'gsuite',
    name: 'Google Workspace',
    costPerUser: 12,
    openSourceAlternative: 'NextCloud + Collabora',
    savings: 100,
    icon: <FileText />,
    serviceCost: 1.20,
    category: 'office'
  },
  {
    id: 'dropbox',
    name: 'Dropbox Business',
    costPerUser: 15,
    openSourceAlternative: 'NextCloud / Seafile',
    savings: 100,
    icon: <Folder />,
    serviceCost: 1.50,
    category: 'office'
  },
  {
    id: 'box',
    name: 'Box Enterprise',
    costPerUser: 20,
    openSourceAlternative: 'NextCloud / Seafile',
    savings: 100,
    icon: <Box />,
    serviceCost: 2.00,
    category: 'office'
  },
  {
    id: 'onedrive',
    name: 'OneDrive for Business',
    costPerUser: 5,
    openSourceAlternative: 'NextCloud / OwnCloud',
    savings: 100,
    icon: <Cloud />,
    serviceCost: 0.50,
    category: 'office'
  },
  {
    id: 'evernote',
    name: 'Evernote Business',
    costPerUser: 14.99,
    openSourceAlternative: 'Joplin / StandardNotes',
    savings: 100,
    icon: <BookOpen />,
    serviceCost: 1.50,
    category: 'office'
  },
  
  // Communication & Messaging
  {
    id: 'slack',
    name: 'Slack',
    costPerUser: 8,
    openSourceAlternative: 'Mattermost / Rocket.Chat',
    savings: 100,
    icon: <MessageSquare />,
    serviceCost: 0.80,
    category: 'communication'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    costPerUser: 15,
    openSourceAlternative: 'Jitsi Meet',
    savings: 100,
    icon: <Video />,
    serviceCost: 1.00,
    category: 'communication'
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    costPerUser: 8,
    openSourceAlternative: 'Element (Matrix) / Rocket.Chat',
    savings: 100,
    icon: <Users />,
    serviceCost: 0.80,
    category: 'communication'
  },
  {
    id: 'discord-nitro',
    name: 'Discord Nitro',
    costPerUser: 9.99,
    openSourceAlternative: 'Element (Matrix) / Revolt',
    savings: 100,
    icon: <Gamepad2 />,
    serviceCost: 1.00,
    category: 'communication'
  },
  {
    id: 'webex',
    name: 'Cisco Webex',
    costPerUser: 13.50,
    openSourceAlternative: 'Jitsi Meet / BigBlueButton',
    savings: 100,
    icon: <VideoIcon />,
    serviceCost: 1.35,
    category: 'communication'
  },
  
  // Business & CRM
  {
    id: 'salesforce',
    name: 'Salesforce',
    costPerUser: 25,
    openSourceAlternative: 'SuiteCRM / EspoCRM',
    savings: 100,
    icon: <UsersRound />,
    serviceCost: 3.00,
    category: 'business'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    costPerUser: 45,
    openSourceAlternative: 'Mautic / SuiteCRM',
    savings: 100,
    icon: <Search />,
    serviceCost: 4.50,
    category: 'business'
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    costPerUser: 19,
    openSourceAlternative: 'osTicket / Zammad',
    savings: 100,
    icon: <Headphones />,
    serviceCost: 1.90,
    category: 'business'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    costPerUser: 70,
    openSourceAlternative: 'Metabase / Apache Superset',
    savings: 100,
    icon: <BarChart3 />,
    serviceCost: 7.00,
    category: 'business'
  },
  {
    id: 'dynamics',
    name: 'Microsoft Dynamics',
    costPerUser: 40,
    openSourceAlternative: 'Odoo / ERPNext',
    savings: 100,
    icon: <Building2 />,
    serviceCost: 4.00,
    category: 'business'
  },
  {
    id: 'quickbooks',
    name: 'Quickbooks',
    costPerUser: 25,
    openSourceAlternative: 'Akaunting / ERPNext',
    savings: 100,
    icon: <DollarSign />,
    serviceCost: 2.50,
    category: 'business'
  },
  
  // Marketing & Analytics
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    costPerUser: 20,
    openSourceAlternative: 'Mautic / Listmonk',
    savings: 100,
    icon: <Mail />,
    serviceCost: 2.00,
    category: 'marketing'
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics 360',
    costPerUser: 12.5,
    openSourceAlternative: 'Matomo / Plausible',
    savings: 100,
    icon: <AreaChart />,
    serviceCost: 1.25,
    category: 'marketing'
  },
  {
    id: 'adobe-analytics',
    name: 'Adobe Analytics',
    costPerUser: 33.33,
    openSourceAlternative: 'Matomo / Open Web Analytics',
    savings: 100,
    icon: <BarChart />,
    serviceCost: 3.30,
    category: 'marketing'
  },
  {
    id: 'semrush',
    name: 'SEMrush',
    costPerUser: 99.95,
    openSourceAlternative: 'SEOPanel / OpenSEO',
    savings: 100,
    icon: <SearchIcon />,
    serviceCost: 10.00,
    category: 'marketing'
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    costPerUser: 19,
    openSourceAlternative: 'SocialPilot / OpenSocial',
    savings: 100,
    icon: <Smartphone />,
    serviceCost: 1.90,
    category: 'marketing'
  },
  {
    id: 'buffer',
    name: 'Buffer',
    costPerUser: 15,
    openSourceAlternative: 'SocialPilot / OpenSocial',
    savings: 100,
    icon: <TabletSmartphone />,
    serviceCost: 1.50,
    category: 'marketing'
  },
  
  // Automation & Integration
  {
    id: 'zapier',
    name: 'Zapier',
    costPerUser: 19.99,
    openSourceAlternative: 'n8n / Huginn',
    savings: 100,
    icon: <Zap />,
    serviceCost: 2.00,
    category: 'automation'
  },
  {
    id: 'integromat',
    name: 'Make (Integromat)',
    costPerUser: 9.99,
    openSourceAlternative: 'n8n / Activepieces',
    savings: 100,
    icon: <Cable />,
    serviceCost: 1.00,
    category: 'automation'
  },
  {
    id: 'power-automate',
    name: 'Microsoft Power Automate',
    costPerUser: 15,
    openSourceAlternative: 'n8n / Apache Airflow',
    savings: 100,
    icon: <Cog />,
    serviceCost: 1.50,
    category: 'automation'
  },
  {
    id: 'tray-io',
    name: 'Tray.io',
    costPerUser: 29,
    openSourceAlternative: 'n8n / Huginn',
    savings: 100,
    icon: <RefreshCw />,
    serviceCost: 2.90,
    category: 'automation'
  },
  {
    id: 'workato',
    name: 'Workato',
    costPerUser: 40,
    openSourceAlternative: 'n8n / Apache NiFi',
    savings: 100,
    icon: <Cable />,
    serviceCost: 4.00,
    category: 'automation'
  },
  
  // Security & VPN
  {
    id: 'nordvpn',
    name: 'NordVPN Teams',
    costPerUser: 7,
    openSourceAlternative: 'OpenVPN / WireGuard',
    savings: 100,
    icon: <Lock />,
    serviceCost: 0.70,
    category: 'security'
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    costPerUser: 8.32,
    openSourceAlternative: 'OpenVPN / WireGuard',
    savings: 100,
    icon: <Lock />,
    serviceCost: 0.83,
    category: 'security'
  },
  {
    id: 'okta',
    name: 'Okta',
    costPerUser: 4,
    openSourceAlternative: 'Keycloak / OpenIAM',
    savings: 100,
    icon: <KeyRound />,
    serviceCost: 0.40,
    category: 'security'
  },
  {
    id: 'lastpass',
    name: 'LastPass',
    costPerUser: 4,
    openSourceAlternative: 'Bitwarden / Passbolt',
    savings: 100,
    icon: <Key />,
    serviceCost: 0.40,
    category: 'security'
  },
  {
    id: '1password',
    name: '1Password',
    costPerUser: 7.99,
    openSourceAlternative: 'Bitwarden / Vaultwarden',
    savings: 100,
    icon: <Lock />,
    serviceCost: 0.80,
    category: 'security'
  },
  {
    id: 'crowdstrike',
    name: 'CrowdStrike',
    costPerUser: 8.99,
    openSourceAlternative: 'Wazuh / OSSEC',
    savings: 100,
    icon: <ShieldCheck />,
    serviceCost: 0.90,
    category: 'security'
  }
];

export default function CostCalculator() {
  const [teamSize, setTeamSize] = useState<number>(0);
  const [teamSizeText, setTeamSizeText] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('project');
  const [completedCategories, setCompletedCategories] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [departments, setDepartments] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");

  // Company data from data.json
  const { websiteUrl, companyName, contact } = siteData;

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('calculatorData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setTeamSize(data.teamSize || 0);
      setTeamSizeText(data.teamSizeText || "");
      setSelectedTools(data.selectedTools || []);
      setDepartments(data.departments || []);
      setEmail(data.email || "");
      setName(data.name || "");
      setJobTitle(data.jobTitle || "");
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    const data = {
      teamSize,
      teamSizeText,
      selectedTools,
      departments,
      email,
      name,
      jobTitle,
    };
    localStorage.setItem('calculatorData', JSON.stringify(data));
  }, [teamSize, teamSizeText, selectedTools, departments, email, name, jobTitle]);

  // Calculate total savings
  const totalCostPerYear = useMemo(() => {
    return selectedTools.reduce((total, toolId) => {
      const tool = toolOptions.find(tool => tool.id === toolId);
      return total + (tool ? (tool.costPerUser * teamSize) + (tool.serviceCost || 0) * teamSize : 0);
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

  const savingsByCategory = useMemo(() => {
    const categorySavings: Record<string, number> = {};
    
    toolCategories.forEach(category => {
      const toolsInCategory = selectedTools.filter(toolId => {
        const tool = toolOptions.find(t => t.id === toolId);
        return tool && tool.category === category.id;
      });
      
      const savings = toolsInCategory.reduce((total, toolId) => {
        const tool = toolOptions.find(t => t.id === toolId);
        return total + (tool ? (tool.costPerUser * teamSize) + (tool.serviceCost || 0) * teamSize : 0);
      }, 0);
      
      categorySavings[category.id] = savings;
    });
    
    return categorySavings;
  }, [selectedTools, teamSize]);

  const totalServiceFees = useMemo(() => {
    return selectedTools.reduce((total, toolId) => {
      const tool = toolOptions.find(tool => tool.id === toolId);
      return total + (tool && tool.serviceCost ? tool.serviceCost * teamSize : 0);
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
      const currentIndex = allCategoriesToShow.findIndex(c => c.id === activeCategory);
      const totalCategories = allCategoriesToShow.length;
      
      if (totalCategories > 0) {
        const categoryProgress = (currentIndex / totalCategories) * 50;
        setProgress(50 + categoryProgress);
      } else {
        setProgress(50);
      }
    }
  }, [step, activeCategory, showResults, departments]);

  const handleTeamSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTeamSizeText(value);
    const size = parseInt(value);
    if (!isNaN(size) && size > 0) {
      setTeamSize(size);
    } else {
      setTeamSize(0);
    }
  };

  const handleTeamSizeSelect = (size: number) => {
    setTeamSize(size);
    setTeamSizeText(size.toString());
  };

  const handleToolToggle = (toolId: string) => {
    setSelectedTools(prev => {
      if (prev.includes(toolId)) {
        return prev.filter(id => id !== toolId);
      } else {
        return [...prev, toolId];
      }
    });
  };

  // Helper function to get all visible categories based on selected departments
  const getAllVisibleCategories = () => {
    return toolCategories.filter(category => {
      if (departments.length === 0) return true;
      
      if (category.id === 'project' && !departments.includes('product')) return false;
      if (category.id === 'development' && !departments.includes('engineering')) return false;
      if (category.id === 'office' && !departments.includes('operations')) return false;
      if (category.id === 'business' && !departments.includes('sales')) return false;
      if (category.id === 'marketing' && !departments.includes('marketing')) return false;
      
      // Always show communication, security, and automation
      return true;
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
      const currentIndex = visibleCategories.findIndex(c => c.id === activeCategory);
      
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
        const currentIndex = visibleCategories.findIndex(c => c.id === activeCategory);
        
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
    setDepartments(prev => {
      if (prev.includes(department)) {
        return prev.filter(d => d !== department);
      } else {
        return [...prev, department];
      }
    });
  };

  // Replace renderCategoryTabs with a function that just shows the current category
  const getCurrentCategoryInfo = () => {
    const category = toolCategories.find(c => c.id === activeCategory);
    if (!category) return null;
    
    const visibleCategories = getAllVisibleCategories();
    const currentIndex = visibleCategories.findIndex(c => c.id === activeCategory);
    const totalCategories = visibleCategories.length;
    
    return {
      name: category.name,
      progress: `${currentIndex + 1} of ${totalCategories}`
    };
  };
  
  // Simplified savings display for results page
  const renderSavingsChart = () => {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Selected Tools Summary</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Commercial Tool</th>
                <th>Department</th>
                <th>Cost</th>
                <th>Open Source Alternative</th>
                <th>Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              {selectedTools.map(toolId => {
                const tool = toolOptions.find(t => t.id === toolId);
                if (!tool) return null;
                
                const toolCost = (tool.costPerUser * teamSize) + (tool.serviceCost || 0) * teamSize;
                const category = toolCategories.find(c => c.id === tool.category);
                
                return (
                  <tr key={tool.id}>
                    <td className="flex items-center gap-2">
                      <span>{tool.icon}</span>
                      <span>{tool.name}</span>
                    </td>
                    <td>{category?.name || ""}</td>
                    <td>${(tool.costPerUser * teamSize).toLocaleString('en-US', { maximumFractionDigits: 0 })}/year</td>
                    <td>{tool.openSourceAlternative}</td>
                    <td className="text-success font-medium">${toolCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={3}>Total</th>
                <th></th>
                <th className="text-success font-medium">${totalSavingsPerYear.toLocaleString('en-US', { maximumFractionDigits: 0 })}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  };
  
  const renderStepIndicator = () => {
    return (
      <div className="mb-12">
        <div className="w-full bg-base-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div className={`flex items-center ${(step >= 1) ? "text-primary font-medium" : "opacity-50"}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${(step >= 1) ? "bg-primary text-primary-content" : "bg-base-200"}`}>
              1
            </div>
            Team Size
          </div>
          <div className={`flex items-center ${(step >= 2) ? "text-primary font-medium" : "opacity-50"}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${(step >= 2) ? "bg-primary text-primary-content" : "bg-base-200"}`}>
              2
            </div>
            Departments
          </div>
          <div className={`flex items-center ${(step >= 3 && !showResults) ? "text-primary font-medium" : "opacity-50"}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${(step >= 3 && !showResults) ? "bg-primary text-primary-content" : "bg-base-200"}`}>
              3
            </div>
            Tools
          </div>
          <div className={`flex items-center ${showResults ? "text-primary font-medium" : "opacity-50"}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${showResults ? "bg-primary text-primary-content" : "bg-base-200"}`}>
              4
            </div>
            Results
          </div>
        </div>
      </div>
    );
  };

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Set document to print mode which we'll use to generate PDF
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download the PDF');
      return;
    }

    // Create a styled document with our content
    printWindow.document.write(`
      <html>
        <head>
          <title>Open Source Cost Savings - ${totalSavingsPerYear.toLocaleString('en-US', { maximumFractionDigits: 0 })}/year</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 40px;
              color: #333;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            h1 {
              color: #333;
              font-size: 28px;
              margin-bottom: 10px;
            }
            h2 {
              color: #444;
              font-size: 22px; 
              margin-top: 30px;
            }
            h3 {
              color: #555;
              font-size: 18px;
            }
            .savings-cards {
              display: flex;
              justify-content: space-between;
              margin: 30px 0;
            }
            .savings-card {
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 20px;
              width: 45%;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .savings-value {
              font-size: 32px;
              font-weight: bold;
              color: #38b2ac;
              margin: 10px 0;
            }
            .three-year-value {
              color: #4299e1;
            }
            .service-fee {
              margin-top: 20px;
              padding: 20px;
              background-color: #f9fafb;
              border-radius: 8px;
              border: 1px solid #eee;
            }
            .service-fee-title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .service-fee-value {
              font-size: 24px;
              color: #f59e0b;
              font-weight: bold;
            }
            .net-savings {
              font-size: 24px;
              color: #10b981;
              font-weight: bold;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              padding: 12px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #f9fafb;
              font-weight: bold;
            }
            .contact-info {
              margin-top: 40px;
              text-align: center;
              padding: 20px;
              background-color: #f5f5f5;
              border-radius: 8px;
            }
            .btn {
              display: inline-block;
              background-color: #4f46e5;
              color: white;
              padding: 10px 20px;
              border-radius: 5px;
              text-decoration: none;
              font-weight: bold;
              margin-top: 15px;
            }
            .footer {
              margin-top: 50px;
              text-align: center;
              font-size: 14px;
              color: #666;
              border-top: 1px solid #eee;
              padding-top: 20px;
            }
            .success {
              color: #38b2ac;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Open Source Cost Savings Calculator</h1>
            <p>Discover how much your organization could save by switching from commercial tools to open source alternatives.</p>
          </div>
          
          <h2>Your Potential Savings</h2>
          <p>Here's how much your team of ${teamSize} could save by switching to open source alternatives.</p>
          
          <div class="savings-cards">
            <div class="savings-card">
              <div>Annual Savings</div>
              <div class="savings-value">$${totalSavingsPerYear.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
              <div>By switching to open source</div>
            </div>
            
            <div class="savings-card">
              <div>3 Year Savings</div>
              <div class="savings-value three-year-value">$${(totalSavingsPerYear * 3).toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
              <div>Long-term impact</div>
            </div>
          </div>
          
          <div class="service-fee">
            <div class="service-fee-title">Our Service Fee (25% of annual savings)</div>
            <div class="service-fee-value">$${ourServiceFee.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
            <p>Our team of experts will guide your transition to open source alternatives, providing implementation support, training, and ongoing maintenance.</p>
            <div class="service-fee-title">Net Annual Savings</div>
            <div class="net-savings">$${netSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
          </div>
          
          <h2>Selected Tools Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Commercial Tool</th>
                <th>Department</th>
                <th>Cost</th>
                <th>Open Source Alternative</th>
                <th>Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              ${selectedTools.map(toolId => {
                const tool = toolOptions.find(t => t.id === toolId);
                if (!tool) return '';
                
                const toolCost = (tool.costPerUser * teamSize) + (tool.serviceCost || 0) * teamSize;
                const category = toolCategories.find(c => c.id === tool.category);
                
                return `
                  <tr>
                    <td>${tool.name}</td>
                    <td>${category?.name || ""}</td>
                    <td>$${(tool.costPerUser * teamSize).toLocaleString('en-US', { maximumFractionDigits: 0 })}/year</td>
                    <td>${tool.openSourceAlternative}</td>
                    <td class="success">$${toolCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
            <tfoot>
              <tr>
                <th colspan="3">Total</th>
                <th></th>
                <th class="success">$${totalSavingsPerYear.toLocaleString('en-US', { maximumFractionDigits: 0 })}</th>
              </tr>
            </tfoot>
          </table>
          
          <div class="contact-info">
            <h3>Ready to Start Your Open Source Journey?</h3>
            <p>
              Our team can help you plan and execute a smooth transition to open source alternatives, 
              maximizing your savings while minimizing disruption.
            </p>
            <p><strong>Email:</strong> ${contact.email} | <strong>Phone:</strong> ${contact.phone}</p>
            <a href="${websiteUrl}/contact" class="btn">Contact Us</a>
          </div>
          
          <div class="footer">
            <p>Generated on ${new Date().toLocaleDateString()} | ${websiteUrl}</p>
            <p>© ${new Date().getFullYear()} ${companyName} - Open Source Solutions</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Allow the browser to render content before printing
    setTimeout(() => {
      printWindow.print();
      // Close the window after printing (or saving as PDF)
      printWindow.onafterprint = function() {
        printWindow.close();
      };
    }, 500);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setShowEmailForm(false);
      // You would typically show a success message here
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto bg-base-100 rounded-box shadow-xl p-6 md:p-8">
      {/* Add print styles - keep this for browser print if needed */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .calculator-results, .calculator-results * {
            visibility: visible;
          }
          .calculator-results {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 2rem;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className={showResults ? "no-print" : ""}>
        {renderStepIndicator()}
      </div>
      
      {step === 1 && (
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Calculate Your Open Source Savings
            </h2>
            <p className="text-xl opacity-80 mb-8">
              Discover how much your organization could save by switching to open source alternatives.
              Start by entering your team size below.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[5, 10, 25, 50, 100, 250].map(size => (
                <button 
                  key={size}
                  onClick={() => handleTeamSizeSelect(size)}
                  className={`btn btn-sm transition-all duration-200 ${
                    teamSize === size 
                      ? 'btn-primary scale-105 shadow-lg' 
                      : 'btn-outline hover:bg-primary/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            
            <div className="divider">OR</div>
            
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg">Enter Custom Team Size</span>
              </label>
              <input
                type="number"
                value={teamSizeText}
                onChange={handleTeamSizeChange}
                placeholder="Enter number of employees"
                className="input input-bordered input-lg w-full focus:ring-2 focus:ring-primary"
                min="1"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={handleNextStep} 
              className="btn btn-primary btn-lg"
              disabled={teamSize <= 0}
            >
              Next <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      )}
      
      {step === 2 && (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Which departments do you have?</h2>
            <p className="text-lg opacity-80">Select the departments in your organization to see relevant tools.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: 'engineering', name: 'Engineering', icon: '⚙️', desc: 'Development, DevOps' },
              { id: 'product', name: 'Product', icon: '🎯', desc: 'Product Management, Design' },
              { id: 'marketing', name: 'Marketing', icon: '📢', desc: 'Marketing, Content' },
              { id: 'sales', name: 'Sales & CRM', icon: '💼', desc: 'Sales, Customer Relations' },
              { id: 'operations', name: 'Operations', icon: '🏢', desc: 'Finance, HR, Administration' },
              { id: 'support', name: 'Support', icon: '🎧', desc: 'Customer Support, Success' }
            ].map(dept => (
              <div 
                key={dept.id}
                onClick={() => handleDepartmentToggle(dept.id)}
                className={`card cursor-pointer transition-all duration-200 ${
                  departments.includes(dept.id) 
                    ? 'bg-primary text-primary-content shadow-lg scale-[1.02]' 
                    : 'bg-base-200 hover:bg-base-300'
                }`}
              >
                <div className="card-body p-6">
                  <div className="text-4xl mb-3">{dept.icon}</div>
                  <h3 className="font-bold text-xl">{dept.name}</h3>
                  <p className="text-sm opacity-80">{dept.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between">
            <button onClick={handlePrevStep} className="btn btn-outline btn-lg">
              <span className="mr-2">←</span> Back
            </button>
            <button 
              onClick={handleNextStep} 
              className="btn btn-primary btn-lg"
              disabled={departments.length === 0}
            >
              Next <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      )}
      
      {step === 3 && !showResults && (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Which tools is your team currently using?</h2>
            <p className="text-lg opacity-80">Select the commercial tools your team uses for a personalized savings estimate.</p>
          </div>
          
          {getCurrentCategoryInfo() && (
            <div className="bg-base-200 p-4 rounded-lg flex justify-between items-center">
              <h3 className="font-bold text-xl">{getCurrentCategoryInfo()?.name || ""}</h3>
              <span className="badge badge-primary badge-lg">{getCurrentCategoryInfo()?.progress || ""}</span>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolOptions
              .filter(tool => tool.category === activeCategory)
              .map(tool => (
                <div 
                  key={tool.id}
                  onClick={() => handleToolToggle(tool.id)}
                  className={`card cursor-pointer transition-all duration-200 ${
                    selectedTools.includes(tool.id) 
                      ? 'bg-primary text-primary-content shadow-lg scale-[1.02]' 
                      : 'bg-base-200 hover:bg-base-300'
                  }`}
                >
                  <div className="card-body p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-3xl mb-3">{tool.icon}</div>
                        <h3 className="font-bold text-xl">{tool.name}</h3>
                        <div className="text-lg font-medium mt-1">
                          ${tool.costPerUser}/user/month
                        </div>
                      </div>
                      <div className="form-control">
                        <input
                          type="checkbox" 
                          className="checkbox checkbox-lg"
                          checked={selectedTools.includes(tool.id)}
                          onChange={() => {}} // Handle in parent onclick
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm opacity-80">
                        Open Source Alternative: <span className="font-medium">{tool.openSourceAlternative}</span>
                      </div>
                      <div className="mt-2 text-lg font-medium text-success">
                        Team Savings: ${(tool.costPerUser * teamSize).toLocaleString('en-US', { maximumFractionDigits: 0 })}/year
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="flex justify-between">
            <button onClick={handlePrevStep} className="btn btn-outline btn-lg">
              <span className="mr-2">←</span> Back
            </button>
            <button 
              onClick={handleNextStep} 
              className="btn btn-primary btn-lg"
            >
              {activeCategory === toolCategories[toolCategories.length - 1].id ? 'View Results' : 'Next Category'}
            </button>
          </div>
        </div>
      )}
      
      {showResults && (
        <div className="calculator-results space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Open Source Savings Potential</h1>
            <p className="text-xl opacity-80">Here's how much your team of {teamSize} could save by switching to open source alternatives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="stats shadow-lg">
              <div className="stat">
                <div className="stat-title text-lg">Annual Savings</div>
                <div className="stat-value text-success text-4xl">${totalSavingsPerYear.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                <div className="stat-desc">By switching to open source</div>
              </div>
            </div>
            
            <div className="stats shadow-lg">
              <div className="stat">
                <div className="stat-title text-lg">3 Year Savings</div>
                <div className="stat-value text-primary text-4xl">${(totalSavingsPerYear * 3).toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                <div className="stat-desc">Long-term impact</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 p-8 shadow-lg">
            <div className="font-bold text-xl mb-3">Our Service Fee (25% of annual savings)</div>
            <div className="text-4xl font-bold text-warning mb-4">${ourServiceFee.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
            <p className="text-base opacity-80 mb-6">Our team of experts will guide your transition to open source alternatives, providing implementation support, training, and ongoing maintenance.</p>
            
            <div className="font-bold text-xl mt-6">Net Annual Savings</div>
            <div className="text-4xl font-bold text-success">${netSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
          </div>
          
          {renderSavingsChart()}
          
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Ready to Start Your Open Source Journey?</h3>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Our team can help you plan and execute a smooth transition to open source alternatives, 
              maximizing your savings while minimizing disruption.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href={`${websiteUrl}/contact`} className="btn btn-primary btn-lg no-print">
                Contact Us
              </a>
              <button 
                onClick={() => setShowEmailForm(true)} 
                className="btn btn-outline btn-lg no-print"
              >
                <span className="mr-2">📧</span> Get Detailed Report
              </button>
            </div>
          </div>

          {showEmailForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-base-100 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
                <h3 className="text-2xl font-bold mb-4">Get Your Detailed Report</h3>
                <p className="mb-6 opacity-80">
                  Enter your details below and we'll send you a comprehensive PDF report of your potential savings.
                </p>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Job Title</span>
                    </label>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="Enter your job title"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email Address</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setShowEmailForm(false)}
                      className="btn btn-outline"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="loading loading-spinner loading-sm mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Report'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          <div className="mt-12 pt-6 border-t text-center text-sm opacity-70 no-print">
            <p>© {new Date().getFullYear()} {companyName} | <a href={websiteUrl} className="hover:underline">{websiteUrl}</a></p>
          </div>
        </div>
      )}
    </div>
  );
} 