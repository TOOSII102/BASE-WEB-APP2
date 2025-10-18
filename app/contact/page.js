import Layout from '../../../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="page-content">
        <h1>Contact Us</h1>
        <p>Get in touch with our team. We'd love to hear from you!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message" rows="5"></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </Layout>
  )
}
