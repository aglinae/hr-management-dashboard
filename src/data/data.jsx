import { HeaderIcons, SidebarIcons } from './imageData';

export const navigationLinks = [
  { id: 1, title: 'Dashboard', image: SidebarIcons.SidebarCategory },
  { id: 2, title: 'Messages', image: SidebarIcons.SidebarMsg },
  { id: 3, title: 'Calendar', image: SidebarIcons.SidebarCalendar },
  { id: 4, title: 'Jobs', image: SidebarIcons.SidebarBriefcase },
  { id: 5, title: 'Candidates', image: SidebarIcons.SidebarProfileUser },
  { id: 6, title: 'Referrals', image: SidebarIcons.SidebarData },
  { id: 7, title: 'Career Site', image: SidebarIcons.SidebarMonitor },
  { id: 8, title: 'Employees', image: SidebarIcons.SidebarUser },
  { id: 9, title: 'Documents', image: SidebarIcons.SidebarDocumentText },
  { id: 10, title: 'Reports', image: SidebarIcons.SidebarChart },
];

export const headerItems = [
  {
    id: 11,
    image: HeaderIcons.HeaderLogo,
    alt: 'image logo TalentCore',
    type: 'logo',
  },
  {
    id: 12,
    title: 'Search for jobs, candidates and more...',
    image: HeaderIcons.HeaderSearch,
    alt: 'image search icon',
    type: 'search',
  },
  {
    id: 13,
    image: HeaderIcons.HeaderSetting,
    alt: 'image settings',
    type: 'settings',
  },
  {
    id: 14,
    image: HeaderIcons.HeaderNotification,
    alt: 'image notification',
    type: 'settings',
  },
  {
    id: 15,
    image: HeaderIcons.HeaderAvatar,
    alt: 'image user avatar',
    type: 'settings',
  },
];
