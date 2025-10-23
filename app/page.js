import Link from 'next/link'

export default function GetStarted() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started with TOOSII TECH
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of technology services to transform your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
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
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let our experts help you choose the right solution for your business needs. 
            Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <a 
              href="tel:+254748340864"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
