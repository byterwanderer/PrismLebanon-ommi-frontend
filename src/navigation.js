import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Menu',
      href: '/ummisMenu'
    },
    {
      text: 'Offerings',
      href: '/#pricing',
    },
    {
      text: 'Story',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'What Are You Looking For?',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Menu', href: '/ummisMenu' },
        { text: 'About Us', href: '/#about' },
        { text: 'Our Story', href: '/about'},
        { text: 'Our Offerings', href: '/pricing' },
        { text: 'Talk To Us', href: '/contact'}
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    Developed By PrismLebanon · All rights reserved.
  `,
};
