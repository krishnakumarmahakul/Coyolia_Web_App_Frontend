import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about',
    submenu: [
      { title: 'Our Team', path: '/about/team' },
      { title: 'Our Culture', path: '/about/culture' },
      { title: 'Leadership Principles', path: '/about/leadership' },
    ],
  },
  {
    title: 'Solutions',
    path: '/solutions',
    submenu: [
      { title: 'AI in Learning & Development', path: '/solutions/learning' },
      { title: 'AI in Talent Acquisition & HR', path: '/solutions/talent' },
      { title: 'Innovation & Research', path: '/solutions/innovation' },
    ],
  },
  {
    title: 'Clients',
    path: '/clients',
    submenu: [
      { title: 'Technology Partners', path: '/clients/tech-partners' },
      { title: 'Academic Partners', path: '/clients/academic-partners' },
      { title: 'Resellers', path: '/clients/resellers' },
    ],
  },
  {
    title: 'Insights',
    path: '/insights',
    submenu: [
      { title: 'Blog', path: '/insights/blog' },
      { title: 'Webinars', path: '/insights/webinars' },
      { title: 'Events', path: '/insights/events' },
    ],
  },
  {
    title: 'ContactUs',
    path: '/contactus'
    
  },
  {
    title: 'Industries',
    path: '/industries',
    submenu: [
      { title: 'EdTech', path: '/industries/edtech' },
      { title: 'Retail', path: '/industries/retail' },
      { title: 'Banking Services', path: '/industries/banking' },
    ],
  },
  {
    title: 'Services',
    path: '/services',
    submenu: [
      { title: 'Career Counseling', path: '/services/career-counseling' },
      { title: 'Skills Assessment', path: '/services/skills-assessment' },
      { title: 'Professional Development', path: '/services/professional-development' },
      
    ],
  },
  
];