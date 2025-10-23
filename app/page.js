import Link from 'next/link'

export default function Home() {
  const services = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      icon: '🤖',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots']
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure and migration services.',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Cloud Security']
    },
    {
      id: 'cybersecurity',
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: '🔒',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Incident Response']
    },
    {
      id: 'web3',
      title: 'Web3 & Blockchain',
      description: 'Decentralized solutions and blockchain technology integration.',
      icon: '⛓️',
      features: ['Smart Contracts', 'DApp Development', 'NFT Solutions', 'Blockchain Consulting']
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      description: 'Strategic technology consulting for business transformation.',
      icon: '💼',
      features: ['Digital Strategy', 'Technology Audit', 'Process Optimization', 'IT Roadmapping']
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology solutions in AI, Cloud, Cybersecurity, Web3, and Mobile Development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-started"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors transform hover:scale-105"
              >
                🚀 Get Started
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to drive your business forward in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/services/${service.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About TOOSII TECH</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a forward-thinking technology company based in Nairobi, Kenya, dedicated to 
                transforming businesses through innovative digital solutions. Our team of experts 
                combines technical excellence with business acumen to deliver results that matter.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From startups to enterprises, we partner with organizations to navigate the 
                complexities of digital transformation and emerge as leaders in their industries.
              </p>
              <Link 
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-2xl mr-4">✅</span>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-4">✅</span>
                  <span>Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-4">✅</span>
                  <span>Customized approach for each client</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-4">✅</span>
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-4">✅</span>
                  <span>Competitive pricing and ROI focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how TOOSII TECH can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <a 
              href="tel:+254748340864"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 Call Now
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p>Email: <a href="mailto:toosiitechcompany@gmail.com" className="underline">toosiitechcompany@gmail.com</a></p>
            <p>Phone: <a href="tel:+254748340864" className="underline">+254 748 340 864</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
