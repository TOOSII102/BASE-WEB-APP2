import Link from 'next/link'

export default function Web3Blockchain() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white'
    }}>
      {/* Navigation Header */}
      <nav style={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #334155',
        padding: '1rem 0'
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
          <Link href="/services" style={{
            color: '#60a5fa',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            border: '1px solid #334155',
            borderRadius: '8px'
          }}>
            ← Back to Services
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1e40af 0%, #7e22ce 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              ⛓️ Web3 & Blockchain
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#e2e8f0',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Building the future of decentralized applications, smart contracts, 
              and blockchain solutions that transform industries and create new possibilities.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/contact" style={{
                background: '#3b82f6',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                Start Your Web3 Project
              </Link>
              <button style={{
                background: 'transparent',
                color: '#60a5fa',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: '2px solid #60a5fa',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Download Web3 Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>🪙</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>DeFi Solutions</h3>
              <p style={{ color: '#cbd5e1' }}>
                Decentralized finance applications including DEXs, lending protocols, 
                and yield farming platforms.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>🎨</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>NFT Marketplaces</h3>
              <p style={{ color: '#cbd5e1' }}>
                Custom NFT platforms, minting services, and marketplace development 
                for digital assets.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>📜</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Smart Contracts</h3>
              <p style={{ color: '#cbd5e1' }}>
                Secure and audited smart contract development for various 
                blockchain platforms and use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section style={{ 
        padding: '4rem 2rem',
        background: 'rgba(15, 23, 42, 0.5)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Web3 & Blockchain Services
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '2rem'
          }}>
            {/* Smart Contract Development */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>📜 Smart Contract Development</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Ethereum, Solana, Polygon, and multi-chain development</li>
                <li>ERC-20, ERC-721, ERC-1155 token standards</li>
                <li>DeFi protocols and financial smart contracts</li>
                <li>DAO governance and voting systems</li>
                <li>Smart contract security audits and testing</li>
                <li>Gas optimization and efficiency improvements</li>
              </ul>
            </div>

            {/* DApp Development */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>🌐 DApp Development</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Full-stack decentralized application development</li>
                <li>Web3 integration with React, Vue, and Angular</li>
                <li>Wallet integration (MetaMask, WalletConnect, etc.)</li>
                <li>IPFS and decentralized storage solutions</li>
                <li>Real-time blockchain data integration</li>
                <li>Mobile DApp development</li>
              </ul>
            </div>

            {/* NFT Solutions */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>🎨 NFT Solutions</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Custom NFT marketplace development</li>
                <li>NFT minting platforms and drop mechanics</li>
                <li>Generative art and NFT collection creation</li>
                <li>Royalty systems and secondary market features</li>
                <li>Cross-chain NFT bridges and interoperability</li>
                <li>Utility and gamified NFT ecosystems</li>
              </ul>
            </div>

            {/* DeFi Platforms */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>🪙 DeFi Platforms</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Decentralized exchanges (DEX) development</li>
                <li>Lending and borrowing protocols</li>
                <li>Yield farming and liquidity mining platforms</li>
                <li>Staking and governance mechanisms</li>
                <li>Cross-chain DeFi solutions</li>
                <li>Risk management and analytics tools</li>
              </ul>
            </div>

            {/* Blockchain Consulting */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>💼 Blockchain Consulting</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Blockchain strategy and roadmap development</li>
                <li>Token economics and utility design</li>
                <li>Regulatory compliance and legal guidance</li>
                <li>Platform selection and architecture design</li>
                <li>Security best practices and risk assessment</li>
                <li>Community building and marketing strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Technology Stack
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>⚡</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Blockchains</h4>
              <p style={{ color: '#cbd5e1' }}>
                Ethereum, Solana, Polygon, BSC, Avalanche, Arbitrum, Optimism
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>🔧</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Development</h4>
              <p style={{ color: '#cbd5e1' }}>
                Solidity, Rust, Web3.js, Ethers.js, Hardhat, Truffle, Foundry
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>🛡️</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Security</h4>
              <p style={{ color: '#cbd5e1' }}>
                Smart contract audits, formal verification, penetration testing
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #f59e0b, #10b981)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>🌐</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Frontend</h4>
              <p style={{ color: '#cbd5e1' }}>
                React, Next.js, Vue, Angular, Web3 integration, Wallet connectivity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section style={{ 
        padding: '4rem 2rem',
        background: 'rgba(15, 23, 42, 0.5)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Web3 Development Process
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Discovery & Strategy</h4>
              <p style={{ color: '#cbd5e1' }}>
                Understand your vision, define tokenomics, and create a comprehensive blockchain strategy.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Design & Architecture</h4>
              <p style={{ color: '#cbd5e1' }}>
                Design smart contracts, system architecture, and user experience for your DApp.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Development & Testing</h4>
              <p style={{ color: '#cbd5e1' }}>
                Build and rigorously test smart contracts and frontend applications.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>4</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Audit & Security</h4>
              <p style={{ color: '#cbd5e1' }}>
                Comprehensive security audits and penetration testing before deployment.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>5</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Deployment & Launch</h4>
              <p style={{ color: '#cbd5e1' }}>
                Deploy to mainnet, conduct final testing, and launch your Web3 project.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>6</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Support & Maintenance</h4>
              <p style={{ color: '#cbd5e1' }}>
                Ongoing support, updates, and maintenance for your blockchain solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #1e40af 0%, #7e22ce 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Build the Future with Web3
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#e2e8f0',
            marginBottom: '2rem'
          }}>
            Ready to launch your blockchain project? Let's create innovative 
            decentralized solutions together.
          </p>
          
          {/* Inlined Company Email */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Contact Our Web3 Team</h3>
            <p style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>
              Email us directly at:{' '}
              <a 
                href="mailto:toosiitechcompany@gmail.com"
                style={{
                  color: '#60a5fa',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                toosiitechcompany@gmail.com
              </a>
            </p>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              We typically respond within 2 hours during business hours
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/contact" style={{
              background: 'white',
              color: '#1e40af',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Start Web3 Project
            </Link>
            <Link href="tel:+254748340864" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: '2px solid white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Call: +254 748 340 864
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Bottom Bar */}
      <div style={{
        background: '#0f172a',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #334155'
      }}>
        <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>
          © {new Date().getFullYear()} TOOSII TECH COMPANY
        </p>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
          Building the Future with Blockchain Technology
        </p>
      </div>
    </div>
  )
}
