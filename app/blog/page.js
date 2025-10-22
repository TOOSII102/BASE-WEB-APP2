import Layout from '../../components/Layout'
import AnimatedBackground from '../../components/AnimatedBackground'
import './blog.css'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Explore how artificial intelligence is transforming business operations and what trends to watch in the coming year.",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      date: "2024-01-15",
      author: "Sarah Chen",
      authorRole: "AI Research Lead",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Web3 Security: Best Practices for Decentralized Applications",
      excerpt: "Learn essential security measures to protect your dApps from common vulnerabilities and attacks in the Web3 space.",
      category: "Web3 & Blockchain",
      readTime: "6 min read",
      date: "2024-01-12",
      author: "Mike Rodriguez",
      authorRole: "Security Architect",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies for Enterprise Businesses",
      excerpt: "A comprehensive guide to planning and executing successful cloud migration projects for large organizations.",
      category: "Cloud Computing",
      readTime: "10 min read",
      date: "2024-01-08",
      author: "Emily Johnson",
      authorRole: "Cloud Solutions Architect",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Mobile Apps with React Native",
      excerpt: "Discover best practices and patterns for creating high-performance mobile applications using React Native.",
      category: "Mobile Development",
      readTime: "7 min read",
      date: "2024-01-05",
      author: "David Kim",
      authorRole: "Mobile Team Lead",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Zero Trust Architecture: Modern Approach to Cybersecurity",
      excerpt: "Implementing Zero Trust principles to enhance your organization's security posture in today's threat landscape.",
      category: "Cybersecurity",
      readTime: "9 min read",
      date: "2024-01-02",
      author: "Lisa Wang",
      authorRole: "CISO",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: Benefits and Use Cases",
      excerpt: "How edge computing is revolutionizing data processing and enabling real-time applications across industries.",
      category: "Emerging Tech",
      readTime: "5 min read",
      date: "2023-12-28",
      author: "Alex Thompson",
      authorRole: "CTO",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ]

  const categories = [
    "All Topics",
    "Artificial Intelligence",
    "Web3 & Blockchain",
    "Cloud Computing",
    "Mobile Development",
    "Cybersecurity",
    "Emerging Tech",
    "Company News"
  ]

  return (
    <>
      <AnimatedBackground />
      <Layout>
        <div className="blog-page">
          {/* Hero Section */}
          <div className="blog-hero">
            <div className="hero-content">
              <h1>TOOSII TECH Blog</h1>
              <p className="hero-subtitle">
                Insights, trends, and expertise from our team of technology professionals. 
                Stay updated with the latest in AI, Web3, cloud, and cybersecurity.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Articles Published</div>
                </div>
                <div className="stat">
                  <div className="stat-number">15k+</div>
                  <div className="stat-label">Monthly Readers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Expert Writers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Post */}
          <div className="featured-section">
            <div className="container">
              <h2 className="section-title">Featured Article</h2>
              {blogPosts.filter(post => post.featured).map(featuredPost => (
                <div key={featuredPost.id} className="featured-post">
                  <div className="featured-content">
                    <span className="category-tag featured">{featuredPost.category}</span>
                    <h3>{featuredPost.title}</h3>
                    <p className="featured-excerpt">{featuredPost.excerpt}</p>
                    <div className="post-meta">
                      <div className="author-info">
                        <div className="author-avatar"></div>
                        <div>
                          <div className="author-name">{featuredPost.author}</div>
                          <div className="author-role">{featuredPost.authorRole}</div>
                        </div>
                      </div>
                      <div className="post-details">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <button className="read-more-btn">Read Full Article</button>
                  </div>
                  <div className="featured-image">
                    <div className="image-placeholder"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Content */}
          <div className="blog-content">
            <div className="container">
              <div className="blog-header">
                <h2>Latest Articles</h2>
                <div className="category-filter">
                  <select className="filter-select">
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="blog-grid">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="card-image">
                      <div className="image-placeholder"></div>
                    </div>
                    <div className="card-content">
                      <span className="category-tag">{post.category}</span>
                      <h3>{post.title}</h3>
                      <p className="card-excerpt">{post.excerpt}</p>
                      <div className="card-meta">
                        <div className="meta-left">
                          <div className="author-avatar small"></div>
                          <div>
                            <div className="author-name">{post.author}</div>
                            <div className="post-date">{post.date}</div>
                          </div>
                        </div>
                        <div className="read-time">{post.readTime}</div>
                      </div>
                      <button className="card-read-btn">Read More</button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="load-more-section">
                <button className="load-more-btn">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="newsletter-cta">
            <div className="container">
              <div className="cta-content">
                <h2>Stay Updated with Tech Insights</h2>
                <p>
                  Get the latest articles, tutorials, and industry news delivered directly to your inbox. 
                  No spam, just valuable content.
                </p>
                <div className="subscribe-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="email-input"
                  />
                  <button className="subscribe-btn">
                    Subscribe
                  </button>
                </div>
                <p className="form-note">
                  Join 15,000+ tech professionals who read our blog weekly
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
