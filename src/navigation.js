import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Brunch Menu',
      href: '/ommiweb'
    },
    {
      text: 'About Us',
      href: '#about',
    },
    {
      text: 'Story',
      href: '#',
    },
    {
      text: 'Offerings',
      href: '#',
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'What Are You Looking For?',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/#about' },
        { text: 'What We Strive To Achieve', href: '/#strive' },
        { text: 'Menu', href: '/ommiMenu' },
        { text: 'Find Us', href: '/#find-us'}
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
