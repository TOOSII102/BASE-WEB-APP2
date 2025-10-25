'use client'

import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const blogPosts = [
    {
      id: 1,
      title: "AI Revolution in Kenyan Businesses: A Practical Guide",
      excerpt: "How Kenyan enterprises are leveraging artificial intelligence to drive growth and efficiency.",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      date: "2024-01-15",
      author: "Dr. Sarah Mwangi",
      authorRole: "AI Research Lead at TOOSII TECH",
      featured: true,
      content: `
        <h2>The AI Transformation in East Africa</h2>
        <p>Artificial Intelligence is no longer a futuristic concept in Kenya—it's happening now. From Nairobi's tech hubs to Mombasa's port operations, AI is transforming how businesses operate.</p>
        
        <h3>Real-World Applications in Kenya</h3>
        <p><strong>Agriculture Sector:</strong> AI-powered crop monitoring systems are helping farmers in the Rift Valley predict yields and optimize irrigation. Our work with agricultural cooperatives has shown 30% increase in productivity.</p>
        
        <p><strong>Financial Services:</strong> Kenyan banks are using AI for fraud detection and customer service automation. Machine learning algorithms analyze transaction patterns to identify suspicious activities in real-time.</p>
        
        <p><strong>Healthcare:</strong> AI diagnostic tools are being deployed in rural clinics, helping healthcare workers identify diseases from medical images with 95% accuracy.</p>
        
        <h3>Getting Started with AI</h3>
        <p>For Kenyan businesses looking to adopt AI, we recommend:</p>
        <ul>
          <li>Start with specific, measurable problems</li>
          <li>Leverage existing data within your organization</li>
          <li>Partner with local AI experts who understand the Kenyan context</li>
          <li>Focus on solutions that provide immediate business value</li>
        </ul>
        
        <p>The future of AI in Kenya is bright, and at TOOSII TECH, we're excited to be at the forefront of this transformation.</p>
      `
    },
    {
      id: 2,
      title: "Blockchain Solutions for Kenyan Supply Chains",
      excerpt: "How blockchain technology is solving transparency and efficiency challenges in East African supply chains.",
      category: "Web3 & Blockchain",
      readTime: "6 min read",
      date: "2024-01-12",
      author: "James Omondi",
      authorRole: "Blockchain Solutions Architect",
      featured: false,
      content: `
        <h2>Transforming Supply Chains with Blockchain</h2>
        <p>Kenya's position as an East African trade hub makes it the perfect testing ground for blockchain solutions in supply chain management.</p>
        
        <h3>Current Challenges</h3>
        <p>Kenyan businesses face several supply chain challenges:</p>
        <ul>
          <li>Lack of transparency in goods movement</li>
          <li>Document forgery and fraud</li>
          <li>Inefficient payment systems</li>
          <li>Difficulty tracking product origins</li>
        </ul>
        
        <h3>Blockchain Solutions in Action</h3>
        <p><strong>Agriculture Export:</strong> We've implemented blockchain tracking for coffee exports from Central Kenya. Each bag is tracked from farm to international buyer, ensuring fair trade practices and quality assurance.</p>
        
        <p><strong>Manufacturing:</strong> Local manufacturers are using smart contracts to automate payments with suppliers, reducing transaction times from weeks to minutes.</p>
        
        <h3>Benefits for Kenyan Businesses</h3>
        <ul>
          <li>Reduced fraud and counterfeit goods</li>
          <li>Improved supply chain visibility</li>
          <li>Faster international payments</li>
          <li>Enhanced customer trust</li>
        </ul>
        
        <p>Blockchain is not just a technology—it's a tool for building trust and efficiency in Kenyan commerce.</p>
      `
    },
    {
      id: 3,
      title: "Cloud Migration for Kenyan Enterprises: A Step-by-Step Guide",
      excerpt: "Practical advice for Kenyan businesses transitioning to cloud infrastructure with cost-effective strategies.",
      category: "Cloud Computing",
      readTime: "10 min read",
      date: "2024-01-08",
      author: "Grace Wambui",
      authorRole: "Cloud Solutions Architect",
      featured: false,
      content: `
        <h2>Cloud Adoption in the Kenyan Market</h2>
        <p>Kenyan enterprises are rapidly moving to the cloud, but the journey requires careful planning and execution.</p>
        
        <h3>Why Cloud for Kenyan Businesses?</h3>
        <p>The benefits are clear:</p>
        <ul>
          <li><strong>Cost Efficiency:</strong> Reduce capital expenditure on hardware</li>
          <li><strong>Scalability:</strong> Handle traffic spikes during peak seasons</li>
          <li><strong>Disaster Recovery:</strong> Protect against local infrastructure challenges</li>
          <li><strong>Global Reach:</strong> Serve international customers efficiently</li>
        </ul>
        
        <h3>Our 6-Step Migration Framework</h3>
        <p><strong>1. Assessment:</strong> Analyze current infrastructure and identify migration candidates</p>
        <p><strong>2. Planning:</strong> Develop a phased migration strategy with rollback plans</p>
        <p><strong>3. Proof of Concept:</strong> Test with non-critical workloads first</p>
        <p><strong>4. Migration:</strong> Execute the move with minimal downtime</p>
        <p><strong>5. Optimization:</strong> Fine-tune cloud resources for cost and performance</p>
        <p><strong>6. Governance:</strong> Implement security and compliance controls</p>
        
        <h3>Kenya-Specific Considerations</h3>
        <p>We help clients address local challenges:</p>
        <ul>
          <li>Internet connectivity variations across regions</li>
          <li>Data sovereignty and compliance with Kenyan laws</li>
          <li>Cost optimization for fluctuating currency rates</li>
          <li>Integration with existing mobile money systems</li>
        </ul>
        
        <p>Successful cloud migration transforms how Kenyan businesses compete in the digital economy.</p>
      `
    },
    {
      id: 4,
      title: "Mobile-First Strategy for African Markets",
      excerpt: "Why mobile-first development is crucial for success in Kenya and across Africa.",
      category: "Mobile Development",
      readTime: "7 min read",
      date: "2024-01-05",
      author: "Brian Maina",
      authorRole: "Mobile Development Lead",
      featured: false,
      content: `
        <h2>The Mobile Revolution in Africa</h2>
        <p>With over 700 million mobile subscribers in Africa, a mobile-first strategy isn't optional—it's essential for business success.</p>
        
        <h3>Kenya's Mobile Landscape</h3>
        <p>Kenya leads Africa in mobile technology adoption:</p>
        <ul>
          <li>91% mobile penetration rate</li>
          <li>High smartphone adoption in urban centers</li>
          <li>M-PESA revolutionizing mobile payments</li>
          <li>Growing 4G and emerging 5G networks</li>
        </ul>
        
        <h3>Key Considerations for Mobile Development</h3>
        <p><strong>Performance:</strong> Optimize for varying network conditions across Kenya</p>
        <p><strong>Data Usage:</strong> Minimize data consumption for cost-conscious users</p>
        <p><strong>Offline Capability:</strong> Ensure functionality in areas with poor connectivity</p>
        <p><strong>Local Payment Integration:</strong> Seamless M-PESA and other mobile money integration</p>
        
        <h3>Our Mobile Development Approach</h3>
        <p>At TOOSII TECH, we build mobile solutions that understand the African user:</p>
        <ul>
          <li>Cross-platform development for maximum reach</li>
          <li>Progressive Web Apps for low-data environments</li>
          <li>Voice interfaces for users comfortable with audio</li>
          <li>Multi-language support for Kenya's diverse population</li>
        </ul>
        
        <p>The future is mobile, and Kenya is leading the way.</p>
      `
    },
    {
      id: 5,
      title: "Cybersecurity Threats Facing Kenyan Organizations in 2024",
      excerpt: "An overview of emerging cybersecurity threats and practical defense strategies for Kenyan businesses.",
      category: "Cybersecurity",
      readTime: "9 min read",
      date: "2024-01-02",
      author: "Linda Chebet",
      authorRole: "Chief Information Security Officer",
      featured: false,
      content: `
        <h2>The Evolving Cyber Threat Landscape in Kenya</h2>
        <p>As Kenyan businesses digitize, they become attractive targets for cybercriminals. Understanding these threats is the first step toward protection.</p>
        
        <h3>Top Threats for 2024</h3>
        <p><strong>1. Ransomware Attacks:</strong> Targeting critical infrastructure and financial institutions</p>
        <p><strong>2. Phishing Campaigns:</strong> Sophisticated attacks targeting mobile money users</p>
        <p><strong>3. Insider Threats:</strong> Employees accidentally or maliciously causing security breaches</p>
        <p><strong>4. Supply Chain Attacks:</strong> Compromising third-party vendors to access larger targets</p>
        
        <h3>Kenya-Specific Security Challenges</h3>
        <ul>
          <li>Rapid digital adoption outpacing security awareness</li>
          <li>Mobile-first environment creating new attack vectors</li>
          <li>Cross-border data flows complicating compliance</li>
          <li>Limited cybersecurity talent pool</li>
        </ul>
        
        <h3>Practical Defense Strategies</h3>
        <p><strong>For Small Businesses:</strong></p>
        <ul>
          <li>Implement basic security training for all employees</li>
          <li>Use multi-factor authentication for all accounts</li>
          <li>Regularly backup critical data</li>
          <li>Keep software and systems updated</li>
        </ul>
        
        <p><strong>For Enterprises:</strong></p>
        <ul>
          <li>Develop comprehensive incident response plans</li>
          <li>Conduct regular security assessments</li>
          <li>Implement zero-trust architecture</li>
          <li>Establish security governance frameworks</li>
        </ul>
        
        <p>Cybersecurity is not a cost—it's an investment in business continuity and customer trust.</p>
      `
    }
  ]

  const categories = [
    "All Topics",
    "Artificial Intelligence",
    "Web3 & Blockchain",
    "Cloud Computing",
    "Mobile Development",
    "Cybersecurity",
    "Emerging Tech"
  ]

  const filteredPosts = selectedCategory === 'All Topics' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  if (selectedArticle) {
    const article = blogPosts.find(post => post.id === selectedArticle)
    return (
      <>
        <Head>
          <title>{article.title} - TOOSII TECH Blog</title>
        </Head>
        
        <div style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white'
        }}>
          {/* Navigation */}
          <nav style={{
            background: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #334155',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 100
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none'
              }}>
                TOOSII TECH
              </Link>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid #334155',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                ← Back to Blog
              </button>
            </div>
          </nav>

          {/* Article Content */}
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <article style={{ lineHeight: '1.8' }}>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  {article.category}
                </span>
                <h1 style={{ 
                  fontSize: '2.5rem', 
                  margin: '1rem 0',
                  background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  {article.title}
                </h1>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  color: '#cbd5e0',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <div style={{ fontWeight: '600', color: 'white' }}>{article.author}</div>
                    <div style={{ fontSize: '0.875rem' }}>{article.authorRole}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              <div 
                style={{ 
                  fontSize: '1.125rem',
                  lineHeight: '1.8'
                }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Blog - TOOSII TECH</title>
        <meta name="description" content="Technology insights, trends, and expertise from TOOSII TECH professionals." />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white'
      }}>
        {/* Navigation */}
        <nav style={{
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #334155',
          padding: '1rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link href="/" style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none'
            }}>
              TOOSII TECH
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link href="/" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
              <Link href="/services" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Services</Link>
              <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Portal</a>
              <Link href="/contact" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div style={{ 
          background: 'rgba(30, 41, 59, 0.8)',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              TOOSII TECH Blog
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#cbd5e0',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Insights, trends, and expertise from our team of technology professionals. 
              Stay updated with the latest in AI, Web3, cloud, and cybersecurity.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>50+</div>
                <div style={{ color: '#cbd5e0' }}>Articles Published</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>15k+</div>
                <div style={{ color: '#cbd5e0' }}>Monthly Readers</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>8</div>
                <div style={{ color: '#cbd5e0' }}>Expert Writers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div style={{ padding: '4rem 2rem', background: 'rgba(15, 23, 42, 0.5)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'white' }}>Featured Article</h2>
              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '3rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{
                    background: '#8b5cf6',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '1rem',
                    display: 'inline-block'
                  }}>
                    {featuredPost.category}
                  </span>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>
                    {featuredPost.title}
                  </h3>
                  <p style={{ color: '#cbd5e0', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {featuredPost.excerpt}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div>
                      <div style={{ fontWeight: '600', color: 'white' }}>{featuredPost.author}</div>
                      <div style={{ color: '#cbd5e0', fontSize: '0.875rem' }}>{featuredPost.authorRole}</div>
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                      {featuredPost.date} • {featuredPost.readTime}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedArticle(featuredPost.id)}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Read Full Article
                  </button>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  height: '250px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e0'
                }}>
                  Featured Image
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Content */}
        <div style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <h2 style={{ fontSize: '2rem', color: 'white' }}>Latest Articles</h2>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  color: 'white',
                  border: '1px solid #334155',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px'
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {filteredPosts.filter(post => !post.featured).map(post => (
                <article key={post.id} style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cbd5e0'
                  }}>
                    Article Image
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      background: '#3b82f6',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      marginBottom: '1rem',
                      display: 'inline-block'
                    }}>
                      {post.category}
                    </span>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      marginBottom: '0.75rem',
                      color: 'white',
                      lineHeight: '1.4'
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ 
                      color: '#cbd5e0', 
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                      fontSize: '0.875rem'
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: '50%'
                        }}></div>
                        <div>
                          <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'white' }}>
                            {post.author}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            {post.date}
                          </div>
                        </div>
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                        {post.readTime}
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedArticle(post.id)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid #334155',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        width: '100%',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          background: 'rgba(15, 23, 42, 0.9)',
          borderTop: '1px solid #334155',
          padding: '3rem 2rem',
          marginTop: '4rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
              TOOSII TECH
            </div>
            <p style={{ color: '#cbd5e0', marginBottom: '2rem' }}>
              Leading technology solutions in Nairobi, Kenya
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="mailto:toosiitechcompany@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                📧 toosiitechcompany@gmail.com
              </a>
              <a href="tel:+254748340864" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                📞 +254 748 340 864
              </a>
              <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer" 
                style={{ color: '#60a5fa', textDecoration: 'none' }}>
                🌐 Company Portal
              </a>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              © 2024 TOOSII TECH. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
