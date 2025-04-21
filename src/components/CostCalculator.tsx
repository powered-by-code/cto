'use client';
import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FileText } from 'lucide-react';
import siteData from '../data.json';
import { trackEvent, EventNames, updateUserStorage } from '@/utils/analytics';
import UnifiedPopup from './UnifiedPopup';
import MeetingButton from './MeetingButton';

// Define the OpenSourceAlternative interface
interface OpenSourceAlternative {
  name: string;
  url?: string;
  description?: string;
}

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

// Add CalculatorData interface
interface CalculatorData {
  action?: string;
  totalSavingsPerYear?: number;
  selectedTools?: Array<{
    id: string;
    name: string;
    category: string;
    price: number;
  }>;
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

// All tool options
const toolOptions: Array<ToolOption | PartialToolOption> = [
  // Project Management
  {
    id: 'jira',
    name: 'Jira',
    category: 'project',
    type: 'project-management',
    description: 'Project management tool',
    costPerUser: 7,
    openSourceAlternatives: [
      { 
        name: 'OpenProject', 
        url: 'https://www.openproject.org/',
        description: 'Open source project management software' 
      }
    ]
  },
  {
    id: 'confluence',
    name: 'Confluence',
    costPerUser: 5.75,
    openSourceAlternatives: [],
    category: 'project',
    type: 'collaboration',
    description: 'Team collaboration and wiki platform'
  },
  {
    id: 'asana',
    name: 'Asana',
    costPerUser: 10.99,
    openSourceAlternatives: [],
    category: 'project',
    type: 'project-management',
    description: 'Project and task management platform'
  },
  {
    id: 'monday',
    name: 'Monday.com',
    costPerUser: 10,
    openSourceAlternatives: [],
    category: 'project',
    type: 'project-management',
    description: 'Work operating system for team management'
  },
  {
    id: 'notion',
    name: 'Notion',
    costPerUser: 8,
    openSourceAlternatives: [],
    category: 'project',
    type: 'collaboration',
    description: 'All-in-one workspace for notes and collaboration'
  },
  {
    id: 'atlassian',
    name: 'Atlassian Suite',
    costPerUser: 29,
    openSourceAlternatives: [],
    category: 'project',
    type: 'suite',
    description: 'Collection of tools including Jira, Confluence, and more'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    costPerUser: 9,
    openSourceAlternatives: [],
    category: 'project',
    type: 'project-management',
    description: 'All-in-one productivity platform'
  },
  {
    id: 'trello',
    name: 'Trello',
    costPerUser: 5,
    openSourceAlternatives: [],
    category: 'project',
    type: 'kanban',
    description: 'Visual collaboration tool using boards and cards'
  },
  
  // Development & DevOps
  {
    id: 'github',
    name: 'GitHub Enterprise',
    costPerUser: 21,
    openSourceAlternatives: [],
    category: 'development',
    type: 'version-control',
    description: 'Code hosting and collaboration platform'
  },
  {
    id: 'gitlab-premium',
    name: 'GitLab Premium',
    costPerUser: 19,
    openSourceAlternatives: [],
    category: 'development',
    type: 'version-control',
    description: 'DevOps platform combining Git repository management, CI/CD, and more'
  },
  {
    id: 'gitlab-ci',
    name: 'GitLab CI/CD Premium',
    costPerUser: 19,
    openSourceAlternatives: [],
    category: 'development',
    type: 'ci-cd',
    description: 'Continuous integration and deployment platform'
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket Premium',
    costPerUser: 6,
    openSourceAlternatives: [],
    category: 'development',
    type: 'version-control',
    description: 'Git solution for professional teams'
  },
  {
    id: 'azure-devops',
    name: 'Azure DevOps',
    costPerUser: 6,
    openSourceAlternatives: [],
    category: 'development',
    type: 'devops',
    description: 'Development tools for teams to share code, track work, and ship software'
  },
  {
    id: 'new-relic',
    name: 'New Relic',
    costPerUser: 15,
    openSourceAlternatives: [],
    category: 'development',
    type: 'monitoring',
    description: 'Observability platform for monitoring software performance'
  },
  {
    id: 'datadog',
    name: 'Datadog',
    costPerUser: 15,
    openSourceAlternatives: [],
    category: 'development',
    type: 'monitoring',
    description: 'Monitoring and security platform for cloud applications'
  },
  {
    id: 'posthog',
    name: 'PostHog',
    costPerUser: 10,
    openSourceAlternatives: [],
    category: 'development',
    type: 'analytics',
    description: 'Product analytics platform with session recordings and feature flags'
  },
  {
    id: 'sentry',
    name: 'Sentry',
    costPerUser: 12,
    openSourceAlternatives: [],
    category: 'development',
    type: 'error-tracking',
    description: 'Application monitoring with focus on error tracking'
  },
  
  // Office & Productivity
  {
    id: 'office365',
    name: 'Microsoft Office 365',
    costPerUser: 12.5,
    openSourceAlternatives: [],
    category: 'office',
    type: 'productivity-suite',
    description: 'Business productivity suite including Word, Excel, and PowerPoint'
  },
  {
    id: 'gsuite',
    name: 'Google Workspace',
    costPerUser: 12,
    openSourceAlternatives: [],
    category: 'office',
    type: 'productivity-suite',
    description: 'Business apps including Gmail, Docs, Drive, and Calendar'
  },
  {
    id: 'dropbox',
    name: 'Dropbox Business',
    costPerUser: 15,
    openSourceAlternatives: [],
    category: 'office',
    type: 'file-storage',
    description: 'Cloud storage and file sharing for business'
  },
  {
    id: 'box',
    name: 'Box Enterprise',
    costPerUser: 20,
    openSourceAlternatives: [],
    category: 'office',
    type: 'file-storage',
    description: 'Secure content management and collaboration platform'
  },
  {
    id: 'onedrive',
    name: 'OneDrive for Business',
    costPerUser: 5,
    openSourceAlternatives: [],
    category: 'office',
    type: 'file-storage',
    description: 'Microsoft cloud storage and synchronization service'
  },
  {
    id: 'evernote',
    name: 'Evernote Business',
    costPerUser: 14.99,
    openSourceAlternatives: [],
    category: 'office',
    type: 'note-taking',
    description: 'Note-taking and task management application'
  },
  
  // Communication & Messaging
  {
    id: 'slack',
    name: 'Slack',
    costPerUser: 8,
    openSourceAlternatives: [],
    category: 'communication',
    type: 'messaging',
    description: 'Business communication and messaging platform'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    costPerUser: 15,
    openSourceAlternatives: [],
    category: 'communication',
    type: 'video-conferencing',
    description: 'Video conferencing and online meeting service'
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    costPerUser: 8,
    openSourceAlternatives: [],
    category: 'communication',
    type: 'collaboration',
    description: 'Chat-based workspace in Microsoft 365'
  },
  {
    id: 'discord-nitro',
    name: 'Discord Nitro',
    costPerUser: 9.99,
    openSourceAlternatives: [],
    category: 'communication',
    type: 'messaging',
    description: 'Enhanced features for the Discord communication platform'
  },
  {
    id: 'webex',
    name: 'Cisco Webex',
    costPerUser: 13.50,
    openSourceAlternatives: [],
    category: 'communication',
    type: 'video-conferencing',
    description: 'Enterprise solution for video conferencing and meetings'
  },
  
  // Business & CRM
  {
    id: 'salesforce',
    name: 'Salesforce',
    costPerUser: 25,
    openSourceAlternatives: [],
    category: 'business',
    type: 'crm',
    description: 'Customer relationship management platform'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    costPerUser: 45,
    openSourceAlternatives: [],
    category: 'business',
    type: 'crm',
    description: 'Marketing, sales, and service software'
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    costPerUser: 19,
    openSourceAlternatives: [],
    category: 'business',
    type: 'customer-service',
    description: 'Customer service software and support ticketing system'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    costPerUser: 70,
    openSourceAlternatives: [],
    category: 'business',
    type: 'analytics',
    description: 'Interactive data visualization and business intelligence software'
  },
  {
    id: 'dynamics',
    name: 'Microsoft Dynamics',
    costPerUser: 40,
    openSourceAlternatives: [],
    category: 'business',
    type: 'erp',
    description: 'Enterprise resource planning and CRM applications'
  },
  {
    id: 'quickbooks',
    name: 'Quickbooks',
    costPerUser: 25,
    openSourceAlternatives: [],
    category: 'business',
    type: 'accounting',
    description: 'Accounting software for small businesses'
  },
  
  // Marketing & Analytics
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    costPerUser: 20,
    openSourceAlternatives: [],
    category: 'marketing',
    type: 'email-marketing',
    description: 'Marketing automation platform and email marketing service'
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics 360',
    costPerUser: 12.5,
    openSourceAlternatives: [],
    category: 'marketing',
    type: 'analytics',
    description: 'Enterprise web analytics service by Google'
  },
  {
    id: 'adobe-analytics',
    name: 'Adobe Analytics',
    costPerUser: 33.33,
    openSourceAlternatives: [],
    category: 'marketing',
    type: 'analytics',
    description: 'Analytics tool in Adobe Experience Cloud'
  },
  {
    id: 'semrush',
    name: 'SEMrush',
    costPerUser: 99.95,
    openSourceAlternatives: [],
    category: 'marketing',
    type: 'seo',
    description: 'SEO and competitive analysis tool'
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    costPerUser: 19,
    openSourceAlternatives: [],
    category: 'marketing',
    type: 'social-media',
    description: 'Social media management platform'
  },
  {
    id: 'buffer',
    name: 'Buffer',
    costPerUser: 15,
    openSourceAlternatives: [],
    category: 'marketing',
    type: 'social-media',
    description: 'Social media management software'
  },
  
  // Automation & Integration
  {
    id: 'zapier',
    name: 'Zapier',
    costPerUser: 19.99,
    openSourceAlternatives: [],
    category: 'automation',
    type: 'workflow-automation',
    description: 'Online automation tool that connects apps and services'
  },
  {
    id: 'integromat',
    name: 'Make (Integromat)',
    costPerUser: 9.99,
    openSourceAlternatives: [],
    category: 'automation',
    type: 'workflow-automation',
    description: 'Visual platform to connect apps and automate workflows'
  },
  {
    id: 'power-automate',
    name: 'Microsoft Power Automate',
    costPerUser: 15,
    openSourceAlternatives: [],
    category: 'automation',
    type: 'workflow-automation',
    description: 'Cloud-based service that makes it practical to build automated workflows'
  },
  {
    id: 'tray-io',
    name: 'Tray.io',
    costPerUser: 29,
    openSourceAlternatives: [],
    category: 'automation',
    type: 'integration-platform',
    description: 'General automation platform for enterprise'
  },
  {
    id: 'workato',
    name: 'Workato',
    costPerUser: 40,
    openSourceAlternatives: [],
    category: 'automation',
    type: 'integration-platform',
    description: 'Enterprise automation and integration platform'
  },
  
  // Security & VPN
  {
    id: 'nordvpn',
    name: 'NordVPN Teams',
    costPerUser: 7,
    openSourceAlternatives: [],
    category: 'security',
    type: 'vpn',
    description: 'Business VPN solution for team security'
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    costPerUser: 8.32,
    openSourceAlternatives: [],
    category: 'security',
    type: 'vpn',
    description: 'VPN service for secure internet connection'
  },
  {
    id: 'okta',
    name: 'Okta',
    costPerUser: 4,
    openSourceAlternatives: [],
    category: 'security',
    type: 'identity-management',
    description: 'Identity and access management solution'
  },
  {
    id: 'lastpass',
    name: 'LastPass',
    costPerUser: 4,
    openSourceAlternatives: [],
    category: 'security',
    type: 'password-manager',
    description: 'Password management solution'
  },
  {
    id: '1password',
    name: '1Password',
    costPerUser: 7.99,
    openSourceAlternatives: [],
    category: 'security',
    type: 'password-manager',
    description: 'Password manager for teams and businesses'
  },
  {
    id: 'crowdstrike',
    name: 'CrowdStrike',
    costPerUser: 8.99,
    openSourceAlternatives: [],
    category: 'security',
    type: 'endpoint-security',
    description: 'Cloud-delivered endpoint and workload protection'
  }
];

// Create a wrapper component that uses useSearchParams
function CostCalculatorWithParams() {
  const searchParams = useSearchParams();
  const [teamSize, setTeamSize] = useState<number>(0);
  const [teamSizeText, setTeamSizeText] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('project');
  const [progress, setProgress] = useState<number>(0);
  const [departments, setDepartments] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");

  // Company data from data.json
  const { websiteUrl, companyName, contact } = siteData;

  // Move getAllVisibleCategories to be defined BEFORE the useEffect that uses it
  // And wrap it in useCallback to avoid recreating it on every render
  const getAllVisibleCategories = useCallback(() => {
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
  }, [departments]); // Only recreate when departments change

  // Calculate total savings
  const totalCostPerYear = useMemo(() => {
    return selectedTools.reduce((total, toolId) => {
      const tool = toolOptions.find(tool => tool.id === toolId);
      return total + (tool ? (tool.costPerUser * teamSize) : 0);
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
      const tool = toolOptions.find(tool => tool.id === toolId);
      return total + (tool && tool.costPerUser ? tool.costPerUser * teamSize : 0);
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
  }, [step, activeCategory, showResults, departments, getAllVisibleCategories]);

  const handleTeamSizeChange = (size: number) => {
    setTeamSize(size);
    
    // Update localStorage for analytics only
    updateUserStorage({
      calculatorData: {
        selectedTools: selectedTools.map(id => {
          const tool = toolOptions.find(t => t.id === id) as PartialToolOption || { 
            id: '', 
            name: '', 
            category: '', 
            costPerUser: 0,
            openSourceAlternatives: [] 
          };
          return {
            id: tool.id,
            name: tool.name,
            category: tool.category,
            price: tool.costPerUser
          };
        }),
        teamSize: size
      }
    });
    
    // Track team size changes
    if (selectedTools.length > 0) {
      trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email }, {
        action: "updated_team_size",
        teamSize: size,
        selectedToolsCount: selectedTools.length,
        totalSavingsPerYear: totalSavingsPerYear
      });
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
                <th>Open Source Alternative</th>
                <th>Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              {selectedTools.map(toolId => {
                const tool = toolOptions.find(t => t.id === toolId);
                if (!tool) return null;
                
                const toolCost = (tool.costPerUser * teamSize);
                const category = toolCategories.find(c => c.id === tool.category);
                
                return (
                  <tr key={tool.id}>
                    <td className="flex items-center gap-2">
                      <span>{tool.icon}</span>
                      <span>{tool.name}</span>
                    </td>
                    <td>{category?.name || ""}</td>
                    <td>{tool.openSourceAlternatives.map(alt => alt.name).join(', ')}</td>
                    <td className="text-success font-medium text-right">${toolCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2}>Total</th>
                <th></th>
                <th className="text-success font-medium font-extrabold text-right underline">${totalSavingsPerYear.toLocaleString('en-US', { maximumFractionDigits: 0 })}</th>
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
          <div className={`flex items-center ${(step >= 3) ? "text-primary font-medium" : "opacity-50"}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${(step >= 3) ? "bg-primary text-primary-content" : "bg-base-200"}`}>
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

  // Track tool selection without restoring state
  const handleToolSelect = (toolId: string, isSelected: boolean) => {
    // Toggle the tool selection
    const updatedSelectedTools = isSelected
      ? [...selectedTools, toolId]
      : selectedTools.filter(id => id !== toolId);
      
    setSelectedTools(updatedSelectedTools);
    
    // Track the selection event
    const selectedTool = toolOptions.find(tool => tool.id === toolId);
    if (selectedTool) {
      // Store analytics data in localStorage
      updateUserStorage({
        calculatorData: {
          selectedTools: updatedSelectedTools.map(id => {
            const tool = toolOptions.find(t => t.id === id) as PartialToolOption || { 
              id: '', 
              name: '', 
              category: '', 
              costPerUser: 0,
              openSourceAlternatives: [] 
            };
            return {
              id: tool.id,
              name: tool.name,
              category: tool.category,
              price: tool.costPerUser
            };
          }),
          teamSize: teamSize
        }
      });
      
      trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email }, {
        action: isSelected ? "tool_selected" : "tool_deselected",
        toolId,
        toolName: selectedTool.name,
        toolCategory: selectedTool.category,
        toolPrice: selectedTool.costPerUser,
        teamSize: teamSize,
        totalTools: updatedSelectedTools.length
      });
    }
  };

  // Wrap handleDownloadPDF in useCallback to prevent it from changing on every render
  const handleDownloadPDF = useCallback(() => {
    try {
      // Set document to print mode which we'll use to generate PDF
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        alert('Please allow popups to download the PDF');
        return;
      }
      
      // Get all selected tools with details
      const selectedToolsDetails = selectedTools.map(toolId => {
        const tool = toolOptions.find(t => t.id === toolId) as PartialToolOption;
        if (!tool) return null;
        
        // Get category name for this tool
        const categoryObj = toolCategories.find(c => c.id === tool.category);
        const categoryName = categoryObj ? categoryObj.name : tool.category;
        
        // Calculate annual cost for this tool
        const annualCost = tool.costPerUser * teamSize * 12;
        
        return {
          ...tool,
          categoryName,
          annualCost
        };
      }).filter(Boolean);

      // Group tools by category for better organization
      const toolsByCategory: Record<string, any[]> = {};
      selectedToolsDetails.forEach(tool => {
        if (!tool) return;
        if (!toolsByCategory[tool.category]) {
          toolsByCategory[tool.category] = [];
        }
        toolsByCategory[tool.category].push(tool);
      });
      
      // Calculate per-category savings
      const categorySavings: Record<string, number> = {};
      Object.keys(toolsByCategory).forEach(category => {
        categorySavings[category] = toolsByCategory[category].reduce((total, tool) => {
          return total + tool.annualCost;
        }, 0);
      });

      // Create a styled document with our content
      printWindow.document.write(`
        <html>
          <head>
            <title>Open Source Cost Savings - ${totalSavingsPerYear.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}/year</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 40px;
                color: #333;
                line-height: 1.5;
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 1px solid #eee;
              }
              .logo {
                max-width: 100px;
                margin-bottom: 15px;
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
                padding-bottom: 10px;
                border-bottom: 1px solid #eee;
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
              .tool-card {
                margin: 20px 0;
                padding: 20px;
                border: 1px solid #eee;
                border-radius: 8px;
                background-color: #f9fafb;
              }
              .tool-name {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
              }
              .tool-cost {
                color: #e53e3e;
                font-weight: normal;
              }
              .tool-description {
                margin-bottom: 15px;
              }
              .text-primary {
                color: #6B78CB; /* Primary color from globals.css */
                text-decoration: none;
              }
              .text-primary:hover {
                text-decoration: underline;
              }
              .badge {
                background-color: #edf2f7;
                color: #4a5568;
                padding: 4px 8px;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 500;
              }
              .contact-info {
                margin-top: 40px;
                text-align: center;
                padding: 25px;
                background-color: #f5f5f5;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
              }
              .btn {
                display: inline-block;
                background-color: #6B78CB;
                color: white;
                padding: 10px 20px;
                border-radius: 9999px;
                text-decoration: none;
                font-weight: bold;
                margin-top: 15px;
                margin-right: 10px;
                transition: all 0.3s ease;
              }
              .btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              }
              .btn-secondary {
                background-color: #FC79DF;
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
              .category-section {
                margin-bottom: 40px;
              }
              .category-header {
                background-color: #edf2f7;
                padding: 15px;
                border-radius: 8px;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .category-savings {
                font-weight: bold;
                color: #38b2ac;
              }
              .chart-container {
                margin: 30px 0;
                height: 300px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <img src="${websiteUrl}/logo.svg" alt="Logo" class="logo" />
              <h1>Open Source Cost Savings Analysis</h1>
            </div>
            
            <h2>Executive Summary</h2>
            <p>Based on your team size of <strong>${teamSize}</strong> and your current toolset, we've analyzed potential savings by transitioning to open source alternatives.</p>
            
            <div class="savings-cards">
              <div class="savings-card">
                <div>Annual Savings</div>
                <div class="savings-value">${totalSavingsPerYear.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</div>
                <div>By switching to open source</div>
              </div>
              <div class="savings-card">
                <div>3-Year Savings</div>
                <div class="savings-value three-year-value">${(totalSavingsPerYear * 3).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</div>
                <div>Long-term impact</div>
              </div>
            </div>
            
            <h2>Tools and Savings By Category</h2>
            <p>Below is a breakdown of your current tools and potential savings by category.</p>
            
            ${Object.keys(toolsByCategory).map(categoryId => {
              const categoryObj = toolCategories.find(c => c.id === categoryId);
              const categoryName = categoryObj ? categoryObj.name : categoryId;
              const savingsForCategory = categorySavings[categoryId];
              
              return `
                <div class="category-section">
                  <div class="category-header">
                    <h3>${categoryName}</h3>
                    <span class="category-savings">Potential Savings: ${savingsForCategory.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}/year</span>
                  </div>
                  
                  ${toolsByCategory[categoryId].map(tool => `
                    <div class="tool-card">
                      <div class="tool-name">
                        ${tool.name}
                        <span class="tool-cost">${tool.costPerUser.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}/user/month</span>
                      </div>
                      <div class="tool-description">
                        ${tool.description || `Commercial ${categoryName.toLowerCase()} solution`}
                      </div>
                      <div>
                        <strong>Team Annual Cost:</strong> ${tool.annualCost.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}/year
                      </div>
                    </div>
                  `).join('')}
                </div>
              `;
            }).join('')}
            
            <div class="contact-info">
              <h3>Ready to Start Your Open Source Journey?</h3>
              <p>
                Our team can help you plan and execute a smooth transition to open source alternatives, 
                maximizing your savings while minimizing disruption.
              </p>
              <p><strong>Email:</strong> <a href="mailto:${contact.email}" class="text-primary">${contact.email}</a></p>
              <p><strong>Website:</strong> <a href="${websiteUrl}" class="text-primary" target="_blank">${websiteUrl.replace(/https?:\/\//, '')}</a></p>
              <a href="https://cal.com/ruben/discovery?utm_source=pdf-report" target="_blank" class="btn">Schedule a Free Consultation</a>
              <a href="${websiteUrl}/contact" class="btn btn-secondary">Contact Us</a>
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
          
          // Only track the event AFTER successful PDF generation
          // This helps prevent race conditions and reduce rate limiting
          setTimeout(() => {
            trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email }, {
              action: "downloaded_pdf",
              totalSavingsPerYear,
              teamSize,
              selectedTools: selectedTools.map(toolId => {
                const tool = toolOptions.find(t => t.id === toolId) as PartialToolOption || { 
                  id: '', name: '', category: '', costPerUser: 0, openSourceAlternatives: [] 
                };
                return {
                  id: tool.id,
                  name: tool.name,
                  category: tool.category,
                  price: tool.costPerUser
                };
              })
            }).catch(err => {
              console.log('Analytics tracking error handled:', err);
            });
          }, 500);
        };
      }, 500);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }, [selectedTools, teamSize, contact.email, websiteUrl, companyName, totalSavingsPerYear, email]);

  // Function to reset the calculator to its initial state
  const handleStartOver = () => {
    // Reset all state variables to their initial values
    setTeamSize(0);
    setTeamSizeText("");
    setStep(1);
    setSelectedTools([]);
    setShowResults(false);
    setActiveCategory('project');
    setProgress(0);
    setDepartments([]);
    setShowEmailForm(false);
    
    // Track the restart event
    trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email }, {
      action: "started_over",
      previousSavings: String(totalSavingsPerYear)
    });
  };

  const handleEmailSubmit = async (formData: { email: string, name?: string, jobTitle?: string }) => {
    setIsSubmitting(true);
    
    // Update local state
    setEmail(formData.email);
    setName(formData.name || '');
    setJobTitle(formData.jobTitle || '');
    
    try {
      // Generate calculator data for both tracking and email template
      const calculatorData = {
        email: formData.email,
        name: formData.name || '',
        jobTitle: formData.jobTitle || '',
        totalSavingsPerYear,
        teamSize,
        selectedTools: selectedTools.map(toolId => {
          const tool = toolOptions.find(t => t.id === toolId) as PartialToolOption || { 
            id: '', 
            name: '', 
            category: '', 
            costPerUser: 0,
            openSourceAlternatives: [] 
          };
          return {
            id: tool.id,
            name: tool.name,
            category: tool.category,
            price: tool.costPerUser,
            alternatives: tool.openSourceAlternatives
          };
        })
      };
      
      // Create a compact data string: t{teamSize},s{savings},i{tool1,tool2,tool3}
      const dataString = `t${teamSize},s${Math.round(totalSavingsPerYear)},i${selectedTools.join(',')}`;
      
      // Store full data in localStorage
      updateUserStorage({
        calculatorData
      });
      
      // Use environment variable for the domain or a fallback
      const domain = process.env.NEXT_PUBLIC_DOMAIN || websiteUrl || 'https://cubeunity.com';
      const domainWithoutProtocol = domain.replace(/https?:\/\//, ''); // Remove protocol
      
      // Track the event with complete data - ensure all values are strings for Plunk
      await trackEvent(EventNames.IT_BUDGET_OPTIMIZER, formData, {
        action: "requested_report",
        // Convert numerical values to strings for Plunk
        teamSize: String(teamSize),
        totalSavingsPerYear: String(totalSavingsPerYear),
        toolCount: String(selectedTools.length),
        // Add template variables directly (not nested) for Plunk email
        name: formData.name || '',
        firstName: formData.name?.split(' ')[0] || '',
        jobTitle: formData.jobTitle || '',
        total_savings: `$${totalSavingsPerYear.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
        three_year_savings: `$${(totalSavingsPerYear * 3).toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
        team_size: String(teamSize),
        calculator_link: `${domain}/it-budget-optimizer?data=${encodeURIComponent(dataString)}`,
        tool_count: String(selectedTools.length),
        domain: domainWithoutProtocol
      });
      
      // Close form after successful submission
      setShowEmailForm(false);
      
      // Show a success message
      alert("Thank you! We've sent your personalized cost savings report to your email.");
      
    } catch (error) {
      console.error('Error submitting email:', error);
      alert("There was an error sending your report. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Make the PDF generation function available globally for accessing from URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Expose the function to the window object
      (window as any).generatePDF = handleDownloadPDF;
      
      // Check for data parameter in URL to load calculator state
      const dataParam = searchParams.get('data');
      
      if (dataParam) {
        try {
          // Parse the compact data string: t{teamSize},s{savings},i{tool1,tool2,tool3}
          const parts = dataParam.split(',');
          let decodedTeamSize = 0;
          let decodedSelectedTools: string[] = [];
          
          parts.forEach((part: string) => {
            if (part.startsWith('t')) {
              // Team size
              decodedTeamSize = parseInt(part.substring(1));
            } else if (part.startsWith('i')) {
              // Tool IDs - the rest of this part is comma-separated tool IDs
              const toolsString = part.substring(1);
              decodedSelectedTools = toolsString.split(',').filter(Boolean);
            }
          });
          
          // Set state if we have valid data
          if (decodedTeamSize > 0) {
            setTeamSize(decodedTeamSize);
            setTeamSizeText(decodedTeamSize.toString());
          }
          
          if (decodedSelectedTools.length > 0) {
            setSelectedTools(decodedSelectedTools);
            setShowResults(true);
            setStep(4);
          }
          
          // Track that the calculator was loaded from URL
          trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email }, {
            action: "loaded_from_url",
            teamSize: decodedTeamSize,
            selectedTools: decodedSelectedTools
          });
        } catch (e) {
          console.error('Error parsing URL data:', e);
        }
      }
      
      // Return cleanup function
      return () => {
        delete (window as any).generatePDF;
      };
    }
  }, [searchParams, handleDownloadPDF, email]);

  // Email capture form component using UnifiedPopup
  const EmailCaptureForm = ({ 
    onSubmit, 
    onCancel, 
    isSubmitting, 
    defaultValues 
  }: { 
    onSubmit: (data: { email: string, name?: string, jobTitle?: string }) => void, 
    onCancel: () => void, 
    isSubmitting: boolean, 
    defaultValues?: { email?: string, name?: string, jobTitle?: string }
  }) => {
    const [formEmail, setFormEmail] = useState(defaultValues?.email || '');
    const [formName, setFormName] = useState(defaultValues?.name || '');
    const [formJobTitle, setFormJobTitle] = useState(defaultValues?.jobTitle || '');
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        email: formEmail,
        name: formName,
        jobTitle: formJobTitle
      });
    };
    
    return (
      <UnifiedPopup
        isOpen={true}
        onClose={onCancel}
        title="Email Me This Report"
        description="We'll send your personalized savings report to your email address."
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email *</span>
            </label>
            <input
              type="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              placeholder="yourname@company.com"
              className="input input-bordered w-full"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder="Your name"
              className="input input-bordered w-full"
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              value={formJobTitle}
              onChange={(e) => setFormJobTitle(e.target.value)}
              placeholder="Your role"
              className="input input-bordered w-full"
            />
          </div>
          
          <div className="flex justify-end space-x-2 mt-6">
            <button type="button" onClick={onCancel} className="btn btn-ghost">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Report'}
            </button>
          </div>
        </form>
      </UnifiedPopup>
    );
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

      {!showResults && (
        <div>
          {renderStepIndicator()}
        </div>
      )}
      
      {step === 1 && (
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Calculate Your Open Source Savings
            </h2>
            <p className="text-xl opacity-80 mb-8">
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
                onChange={(e) => handleTeamSizeChange(parseInt(e.target.value))}
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
                  onClick={() => handleToolSelect(tool.id, !selectedTools.includes(tool.id))}
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
                        Open Source Alternative: <span className="font-medium">{tool.openSourceAlternatives.map(alt => alt.name).join(', ')}</span>
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
        <div className="calculator-results">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Open Source Savings Potential</h1>
            <p className="text-xl opacity-80 mb-6"></p>
          
            {/* Check if this was loaded from URL parameter */}
            {searchParams.has('data') && (
              <div className="flex justify-center gap-4 flex-wrap mb-10">
                <MeetingButton
                  text="Book a Free Consultation with Ruben"
                  className="btn-lg rounded-full hover:shadow-lg transition-transform hover:-translate-y-1"
                  onClick={() => {
                    // Create compact data string
                    const dataString = `t${teamSize},s${Math.round(totalSavingsPerYear)},i${selectedTools.join(',')}`;
                    
                    // Store detailed data in localStorage before redirecting
                    updateUserStorage({
                      calculatorData: {
                        totalSavingsPerYear,
                        teamSize,
                        selectedTools,
                        timestamp: Date.now()
                      }
                    });
                    
                    // Track the click event
                    trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email }, {
                      action: "clicked_consultation_from_shared",
                      totalSavingsPerYear: String(totalSavingsPerYear),
                      teamSize: String(teamSize),
                      toolCount: String(selectedTools.length),
                      dataString
                    });
                  }}
                />
                
                <button 
                  onClick={handleDownloadPDF} 
                  className="btn btn-secondary btn-lg rounded-full hover:shadow-lg transition-transform hover:-translate-y-1">
                  <FileText className="w-5 h-5 mr-2" /> Download PDF Report
                </button>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
          
          {renderSavingsChart()}
          
          {/* Enhanced detailed tool information */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Your Selected Tools Analysis</h2>
            
            {toolCategories.filter(category => {
              // Only show categories that have selected tools
              return selectedTools.some(toolId => {
                const tool = toolOptions.find(t => t.id === toolId);
                return tool && tool.category === category.id;
              });
            }).map(category => {
              // Get tools in this category
              const toolsInThisCategory = selectedTools
                .map(toolId => toolOptions.find(t => t.id === toolId))
                .filter(Boolean)
                .filter(tool => tool?.category === category.id);
                
              // Calculate category savings
              const categorySavings = toolsInThisCategory.reduce((total, tool) => {
                return total + (tool ? tool.costPerUser * teamSize : 0);
              }, 0);
              
              return (
                <div key={category.id} className="mb-8">
                  <div className="bg-base-200 p-4 rounded-lg flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl">{category.name}</h3>
                    <span className="badge badge-primary badge-lg">
                      ${categorySavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}/year savings
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {toolsInThisCategory.map(tool => tool && (
                      <div key={tool.id} className="card bg-base-100 shadow-md">
                        <div className="card-body">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-xl font-bold">{tool.name}</h4>
                              <p className="text-lg">${tool.costPerUser}/user/month</p>
                            </div>
                            <div className="badge badge-secondary">
                              ${(tool.costPerUser * teamSize).toLocaleString('en-US', { maximumFractionDigits: 0 })}/year
                            </div>
                          </div>
                          
                          {tool.description && (
                            <p className="my-2 opacity-80">{tool.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {!searchParams.has('data') && (
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Ready to Start Your Open Source Journey?</h3>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Our team can help you plan and execute a smooth transition to open source alternatives, 
                maximizing your savings while minimizing disruption.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <MeetingButton
                  text="Schedule a Free Consultation with Ruben"
                  className="btn-lg rounded-full hover:shadow-lg transition-transform hover:-translate-y-1"
                  onClick={() => {
                    // Create compact data string like in email function
                    const dataString = `t${teamSize},s${Math.round(totalSavingsPerYear)},i${selectedTools.join(',')}`;
                    
                    // Store detailed data in localStorage before redirecting
                    updateUserStorage({
                      calculatorData: {
                        totalSavingsPerYear,
                        teamSize,
                        selectedTools,
                        timestamp: Date.now()
                      }
                    });
                    
                    // Track the click event
                    trackEvent(EventNames.IT_BUDGET_OPTIMIZER, { email }, {
                      action: "clicked_consultation",
                      totalSavingsPerYear: String(totalSavingsPerYear),
                      teamSize: String(teamSize),
                      toolCount: String(selectedTools.length),
                      dataString
                    });
                  }}
                />
                
                <button onClick={handleDownloadPDF} className="btn btn-secondary btn-lg rounded-full hover:shadow-lg transition-transform hover:-translate-y-1">
                  <FileText className="w-5 h-5 mr-2" /> Download PDF Report
                </button>
                
                <button onClick={() => setShowEmailForm(true)} className="btn btn-outline btn-lg rounded-full hover:shadow-lg transition-transform hover:-translate-y-1">
                  Email Me This Report
                </button>
                
                <button onClick={handleStartOver} className="btn btn-ghost btn-lg rounded-full hover:shadow-lg transition-transform hover:-translate-y-1">
                  Start Over
                </button>
              </div>
            </div>
          )}
          
          {showEmailForm && (
            <EmailCaptureForm 
              onSubmit={handleEmailSubmit} 
              onCancel={() => setShowEmailForm(false)}
              isSubmitting={isSubmitting}
              defaultValues={{
                email,
                name,
                jobTitle
              }}
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