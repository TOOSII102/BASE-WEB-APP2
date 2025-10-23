export const navigation = {
  // Main navigation for header
  main: [
    {
      name: 'Home',
      href: '/',
      description: 'TOOSII TECH Company Overview',
      current: false
    },
    {
      name: 'Services',
      href: '/services',
      description: 'Our Technology Solutions',
      current: false,
      children: [
        {
          name: 'AI & Machine Learning',
          href: '/services/ai-ml',
          description: 'Intelligent solutions powered by AI and ML',
          icon: '🤖'
        },
        {
          name: 'Cloud Solutions',
          href: '/services/cloud',
          description: 'Scalable and secure cloud infrastructure',
          icon: '☁️'
        },
        {
          name: 'Cyber Security',
          href: '/services/cybersecurity',
          description: 'Comprehensive security solutions',
          icon: '🔒'
        },
        {
          name: 'Web3 & Blockchain',
          href: '/services/web3',
          description: 'Decentralized applications and blockchain',
          icon: '⛓️'
        },
        {
          name: 'Mobile Development',
          href: '/services/mobile',
          description: 'Cross-platform mobile applications',
          icon: '📱'
        },
        {
          name: 'IT Consulting',
          href: '/services/consulting',
          description: 'Strategic technology consulting',
          icon: '💼'
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      description: 'Learn about our company and team',
      current: false
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      description: 'Our successful projects and clients',
      current: false
    },
    {
      name: 'Blog',
      href: '/blog',
      description: 'Technology insights and updates',
      current: false
    },
    {
      name: 'Contact',
      href: '/contact',
      description: 'Get in touch with our team',
      current: false
    }
  ],

  // Company information links
  company: [
    {
      name: 'About Us',
      href: '/about',
      description: 'Our mission, vision, and values'
    },
    {
      name: 'Our Team',
      href: '/team',
      description: 'Meet our expert team members'
    },
    {
      name: 'Careers',
      href: '/careers',
      description: 'Join our growing team'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      description: 'Our successful projects'
    },
    {
      name: 'Blog',
      href: '/blog',
      description: 'Latest insights and news'
    }
  ],

  // Services links for footer
  services: [
    {
      name: 'AI & Machine Learning',
      href: '/services/ai-ml',
      description: 'Predictive analytics and AI solutions'
    },
    {
      name: 'Cloud Solutions',
      href: '/services/cloud',
      description: 'Cloud migration and infrastructure'
    },
    {
      name: 'Cyber Security',
      href: '/services/cybersecurity',
      description: 'Security assessment and protection'
    },
    {
      name: 'Web3 & Blockchain',
      href: '/services/web3',
      description: 'Blockchain and decentralized apps'
    },
    {
      name: 'Mobile Development',
      href: '/services/mobile',
      description: 'iOS and Android applications'
    },
    {
      name: 'IT Consulting',
      href: '/services/consulting',
      description: 'Strategic technology advisory'
    }
  ],

  // Legal links for footer
  legal: [
    {
      name: 'Privacy Policy',
      href: '/privacy-policy',
      description: 'How we protect your data'
    },
    {
      name: 'Terms of Service',
      href: '/terms-of-service',
      description: 'Terms and conditions of use'
    },
    {
      name: 'Cookie Policy',
      href: '/cookies',
      description: 'Our use of cookies and tracking'
    },
    {
      name: 'Sitemap',
      href: '/sitemap',
      description: 'Complete website structure'
    }
  ],

  // Social media links
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/austin254ke',
      icon: 'twitter',
      ariaLabel: 'Follow us on Twitter',
      description: 'Latest updates on Twitter'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ToosiiGrainger.com9',
      icon: 'facebook',
      ariaLabel: 'Like us on Facebook',
      description: 'Connect with us on Facebook'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/toosii_ke',
      icon: 'instagram',
      ariaLabel: 'Follow us on Instagram',
      description: 'See our work on Instagram'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/toosiitech',
      icon: 'telegram',
      ariaLabel: 'Join us on Telegram',
      description: 'Chat with us on Telegram'
    }
  ],

  // Contact information
  contact: [
    {
      type: 'email',
      value: 'toosiitechcompany@gmail.com',
      href: 'mailto:toosiitechcompany@gmail.com',
      icon: 'email',
      label: 'Email Address'
    },
    {
      type: 'phone',
      value: '+254 748 340 864',
      href: 'tel:+254748340864',
      icon: 'phone',
      label: 'Phone Number'
    },
    {
      type: 'whatsapp',
      value: '+254 748 340 864',
      href: 'https://wa.me/254748340864',
      icon: 'whatsapp',
      label: 'WhatsApp'
    },
    {
      type: 'location',
      value: 'Nairobi, Kenya',
      href: '#',
      icon: 'location',
      label: 'Location'
    },
    {
      type: 'hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM EAT',
      href: '#',
      icon: 'clock',
      label: 'Business Hours'
    }
  ],

  // Quick links for mobile navigation
  quickLinks: [
    {
      name: 'Get Quote',
      href: '/contact',
      icon: 'quote',
      description: 'Request a project quote'
    },
    {
      name: 'Our Services',
      href: '/services',
      icon: 'services',
      description: 'Explore our services'
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: 'case-studies',
      description: 'View our work'
    },
    {
      name: 'Contact Sales',
      href: '/contact?type=sales',
      icon: 'sales',
      description: 'Talk to sales team'
    }
  ],

  // Footer sections
  footerSections: [
    {
      title: 'Services',
      links: 'services'
    },
    {
      title: 'Company',
      links: 'company'
    },
    {
      title: 'Legal',
      links: 'legal'
    }
  ],

  // Breadcrumb data for pages
  breadcrumbs: {
    '/': [{ name: 'Home', href: '/' }],
    '/about': [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' }
    ],
    '/services': [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' }
    ],
    '/services/ai-ml': [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'AI & Machine Learning', href: '/services/ai-ml' }
    ],
    '/services/cloud': [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Cloud Solutions', href: '/services/cloud' }
    ],
    '/services/cybersecurity': [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Cyber Security', href: '/services/cybersecurity' }
    ],
    '/services/web3': [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Web3 & Blockchain', href: '/services/web3' }
    ],
    '/services/mobile': [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Mobile Development', href: '/services/mobile' }
    ],
    '/services/consulting': [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'IT Consulting', href: '/services/consulting' }
    ],
    '/team': [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Our Team', href: '/team' }
    ],
    '/careers': [
      { name: 'Home', href: '/' },
      { name: 'Company', href: '/about' },
      { name: 'Careers', href: '/careers' }
    ],
    '/case-studies': [
      { name: 'Home', href: '/' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    '/blog': [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' }
    ],
    '/contact': [
      { name: 'Home', href: '/' },
      { name: 'Contact', href: '/contact' }
    ],
    '/privacy-policy': [
      { name: 'Home', href: '/' },
      { name: 'Privacy Policy', href: '/privacy-policy' }
    ],
    '/terms-of-service': [
      { name: 'Home', href: '/' },
      { name: 'Terms of Service', href: '/terms-of-service' }
    ],
    '/cookies': [
      { name: 'Home', href: '/' },
      { name: 'Cookie Policy', href: '/cookies' }
    ],
    '/sitemap': [
      { name: 'Home', href: '/' },
      { name: 'Sitemap', href: '/sitemap' }
    ]
  },

  // Meta data for pages
  meta: {
    '/': {
      title: 'TOOSII TECH - Digital Transformation & Technology Solutions',
      description: 'Pioneering the future of digital transformation through innovative technology solutions including AI, Cloud, Cybersecurity, Web3, and Mobile Development.',
      keywords: 'technology, AI, cloud, cybersecurity, web3, mobile development, Kenya, Nairobi'
    },
    '/about': {
      title: 'About TOOSII TECH - Our Mission & Team',
      description: 'Learn about TOOSII TECH COMPANY, our mission to drive digital transformation, and meet our expert team of technology professionals.',
      keywords: 'about us, company, team, mission, vision, values, Kenya'
    },
    '/services': {
      title: 'Our Services - TOOSII TECH Technology Solutions',
      description: 'Comprehensive technology services including AI & Machine Learning, Cloud Solutions, Cybersecurity, Web3, Mobile Development, and IT Consulting.',
      keywords: 'services, AI, cloud, cybersecurity, web3, mobile, consulting'
    },
    '/contact': {
      title: 'Contact TOOSII TECH - Get in Touch',
      description: 'Contact TOOSII TECH COMPANY for technology solutions, project inquiries, and digital transformation services. Based in Nairobi, Kenya.',
      keywords: 'contact, email, phone, inquiry, quote, Kenya'
    },
    '/privacy-policy': {
      title: 'Privacy Policy - TOOSII TECH',
      description: 'TOOSII TECH COMPANY Privacy Policy. Learn how we collect, use, and protect your personal information.',
      keywords: 'privacy policy, data protection, GDPR, privacy'
    }
  }
};

// Helper functions
export const getNavigation = (type = 'main') => {
  return navigation[type] || navigation.main;
};

export const getBreadcrumbs = (pathname) => {
  return navigation.breadcrumbs[pathname] || [{ name: 'Home', href: '/' }];
};

export const getMetaData = (pathname) => {
  return navigation.meta[pathname] || {
    title: 'TOOSII TECH - Technology Solutions',
    description: 'Digital transformation and technology solutions',
    keywords: 'technology, digital transformation, Kenya'
  };
};

export const isActiveLink = (href, currentPath) => {
  if (href === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(href);
};

export const getSocialLinks = () => {
  return navigation.social;
};

export const getContactInfo = () => {
  return navigation.contact;
};
