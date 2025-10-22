import Link from 'next/link'
import './privacy-policy.css'

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        {/* Header */}
        <div className="privacy-header">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Introduction */}
        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            TOOSII TECH COMPANY ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website <strong>toosiitech.com</strong> and use our services.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our services, 
            you acknowledge that you have read, understood, and agree to be bound by all the terms 
            outlined in this Privacy Policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Company information and job title</li>
            <li>Payment information for service purchases</li>
            <li>Communication preferences</li>
            <li>Project requirements and business information</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information, including:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website and search terms</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Clickstream data and browsing patterns</li>
          </ul>

          <h3>2.3 Information from Third Parties</h3>
          <p>We may receive information about you from third-party sources, such as:</p>
          <ul>
            <li>Social media platforms when you interact with our content</li>
            <li>Business partners and service providers</li>
            <li>Publicly available sources and business directories</li>
            <li>Analytics providers and advertising networks</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing, operating, and maintaining our services</li>
            <li>Improving, personalizing, and expanding our services</li>
            <li>Understanding and analyzing how you use our website</li>
            <li>Developing new products, services, features, and functionality</li>
            <li>Communicating with you, either directly or through our partners</li>
            <li>Processing your transactions and managing your orders</li>
            <li>Sending you emails, updates, and marketing communications</li>
            <li>Finding and preventing fraud and security issues</li>
            <li>Complying with legal obligations and regulatory requirements</li>
          </ul>
        </section>

        {/* Legal Basis for Processing */}
        <section className="policy-section">
          <h2>4. Legal Basis for Processing</h2>
          <p>We process your personal information based on the following legal grounds:</p>
          <ul>
            <li><strong>Consent:</strong> When you have given clear consent for specific purposes</li>
            <li><strong>Contract:</strong> When processing is necessary for a contract with you</li>
            <li><strong>Legal Obligation:</strong> When processing is necessary for legal compliance</li>
            <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests</li>
          </ul>
        </section>

        {/* Information Sharing and Disclosure */}
        <section className="policy-section">
          <h2>5. Information Sharing and Disclosure</h2>
          
          <h3>5.1 Service Providers</h3>
          <p>We may share your information with third-party service providers who perform services for us, including:</p>
          <ul>
            <li>Payment processing and transaction management</li>
            <li>Website hosting and infrastructure services</li>
            <li>Customer relationship management (CRM) systems</li>
            <li>Email marketing and communication platforms</li>
            <li>Analytics and performance monitoring tools</li>
          </ul>

          <h3>5.2 Business Transfers</h3>
          <p>Your information may be transferred to a successor entity in the event of a merger, acquisition, or sale of all or a portion of our assets.</p>

          <h3>5.3 Legal Requirements</h3>
          <p>We may disclose your information where required to do so by law or in response to valid requests by public authorities.</p>

          <h3>5.4 International Transfers</h3>
          <p>Your information may be transferred to and maintained on computers located outside of your country where data protection laws may differ.</p>
        </section>

        {/* Data Security */}
        <section className="policy-section">
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures designed to protect your personal information. 
            These measures include:
          </p>
          <ul>
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Regular security assessments and vulnerability testing</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Secure network infrastructure and firewalls</li>
            <li>Employee training on data protection practices</li>
            <li>Regular backups and disaster recovery procedures</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Data Retention */}
        <section className="policy-section">
          <h2>7. Data Retention</h2>
          <p>We will retain your personal information only for as long as necessary to:</p>
          <ul>
            <li>Fulfill the purposes for which it was collected</li>
            <li>Comply with our legal obligations</li>
            <li>Resolve disputes and enforce our agreements</li>
            <li>Maintain business records for legitimate purposes</li>
          </ul>
          <p>
            When we no longer need to process your personal information, we will delete or anonymize it in a secure manner.
          </p>
        </section>

        {/* Your Rights */}
        <section className="policy-section">
          <h2>8. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          
          <div className="rights-grid">
            <div className="right-item">
              <h4>Right to Access</h4>
              <p>Request copies of your personal information</p>
            </div>
            <div className="right-item">
              <h4>Right to Rectification</h4>
              <p>Request correction of inaccurate or incomplete information</p>
            </div>
            <div className="right-item">
              <h4>Right to Erasure</h4>
              <p>Request deletion of your personal information</p>
            </div>
            <div className="right-item">
              <h4>Right to Restrict Processing</h4>
              <p>Request limitation of how we use your information</p>
            </div>
            <div className="right-item">
              <h4>Right to Data Portability</h4>
              <p>Request transfer of your data to another organization</p>
            </div>
            <div className="right-item">
              <h4>Right to Object</h4>
              <p>Object to our processing of your personal information</p>
            </div>
          </div>

          <p>
            To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>
        </section>

        {/* Cookies and Tracking */}
        <section className="policy-section">
          <h2>9. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. 
            The technologies we use include:
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Functionality Cookies:</strong> Enable enhanced functionality and personalization</li>
            <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
          <p>
            You can control cookie settings through your browser preferences. However, disabling cookies may affect your experience on our website.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="policy-section">
          <h2>10. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. This Privacy Policy does not apply to third-party websites, 
            and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="policy-section">
          <h2>11. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. 
            If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        {/* International Data Transfers */}
        <section className="policy-section">
          <h2>12. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than Kenya. We ensure appropriate safeguards are in place 
            to protect your information in accordance with this Privacy Policy and applicable data protection laws.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="policy-section">
          <h2>13. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
            and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        {/* Contact Information */}
        <section className="policy-section">
          <h2>14. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="contact-info">
            <p><strong>TOOSII TECH COMPANY</strong></p>
            <p>Email: <a href="mailto:toosiitechcompany@gmail.com">toosiitechcompany@gmail.com</a></p>
            <p>Phone: <a href="tel:+254748340864">+254 748 340 864</a></p>
            <p>Address: Nairobi, Kenya</p>
          </div>
        </section>

        {/* Footer */}
        <div className="policy-footer">
          <p>© {currentYear} TOOSII TECH COMPANY. All rights reserved.</p>
          <div className="policy-links">
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
