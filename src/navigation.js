import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Menu',
      href: '/ommiMenu'
    },
    {
      text: 'Offerings',
      href: '/#pricing',
    },
    {
      text: 'Story',
      href: '/about',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'What Are You Looking For?',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Menu', href: '/ommiMenu' },
        { text: 'About Us', href: '/#about' },
        { text: 'Our Story', href: '/about'},
        { text: 'Our Offerings', href: '/pricing' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Developed By PrismLebanon · All rights reserved.
  `,
};
