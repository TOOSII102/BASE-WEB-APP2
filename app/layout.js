import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'TOOSII TECH - Digital Transformation & Technology Solutions',
  description: 'Pioneering the future of digital transformation through innovative technology solutions including AI, Cloud, Cybersecurity, Web3, and Mobile Development.',
  keywords: 'technology, AI, cloud, cybersecurity, web3, mobile development, Kenya, Nairobi, TOOSII TECH',
  authors: [{ name: 'TOOSII TECH COMPANY' }],
  creator: 'TOOSII TECH COMPANY',
  publisher: 'TOOSII TECH COMPANY',
  robots: 'index, follow',
  openGraph: {
    title: 'TOOSII TECH - Digital Transformation & Technology Solutions',
    description: 'Pioneering the future of digital transformation through innovative technology solutions',
    url: 'https://toosiitech.com',
    siteName: 'TOOSII TECH',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TOOSII TECH - Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOOSII TECH - Digital Transformation & Technology Solutions',
    description: 'Pioneering the future of digital transformation through innovative technology solutions',
    creator: '@austin254ke',
    images: ['/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#667eea',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className={inter.className}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="main-content">
          {children}
        </div>

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TOOSII TECH COMPANY",
              "alternateName": "TOOSII TECH",
              "url": "https://toosiitech.com",
              "logo": "https://toosiitech.com/logo.png",
              "description": "Pioneering the future of digital transformation through innovative technology solutions",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254-748-340-864",
                "contactType": "customer service",
                "email": "toosiitechcompany@gmail.com",
                "availableLanguage": ["English", "Swahili"]
              },
              "sameAs": [
                "https://twitter.com/austin254ke",
                "https://www.facebook.com/ToosiiGrainger.com9",
                "https://instagram.com/toosii_ke",
                "https://t.me/toosiitech"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
