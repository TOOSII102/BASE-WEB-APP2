import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'TOOSII TECH - Digital Transformation & Technology Solutions',
  description: 'Pioneering the future of digital transformation through innovative technology solutions including AI, Cloud, Cybersecurity, Web3, and Mobile Development.',
  keywords: 'technology, AI, cloud, cybersecurity, web3, mobile development, Kenya, Nairobi, digital transformation',
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console code
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://toosiitech.com"
        />
        
        {/* Theme color for mobile browsers */}
        <meta
          name="theme-color"
          content="#667eea"
        />
        
        {/* Viewport for responsive design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="skip-to-main"
          style={{
            position: 'absolute',
            top: '-40px',
            left: '6px',
            background: '#667eea',
            color: 'white',
            padding: '8px',
            borderRadius: '4px',
            textDecoration: 'none',
            zIndex: 10000,
            transition: 'top 0.3s ease',
          }}
          onFocus={() => {
            const element = document.querySelector('.skip-to-main');
            if (element) {
              element.style.top = '6px';
            }
          }}
          onBlur={() => {
            const element = document.querySelector('.skip-to-main');
            if (element) {
              element.style.top = '-40px';
            }
          }}
        >
          Skip to main content
        </a>

        {/* Header Component */}
        <Header />
        
        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>
        
        {/* Footer Component */}
        <Footer />
        
        {/* Schema.org structured data */}
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
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254-748-340-864",
                "contactType": "customer service",
                "email": "toosiitechcompany@gmail.com",
                "areaServed": "KE",
                "availableLanguage": "en"
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
