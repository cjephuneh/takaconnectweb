import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Users,
  Building2,
  ArrowRight
} from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'individual'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'individual'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Have questions or want to learn more about TakaConnect? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <p className="text-gray-600">{info.details}</p>
                {info.action && (
                  <a 
                    href={info.actionLink} 
                    className="inline-block mt-4 text-green-600 font-medium hover:text-green-700"
                  >
                    {info.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        I am contacting as a:
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="individual"
                            checked={formData.type === 'individual'}
                            onChange={handleChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500"
                          />
                          <span className="ml-2 text-gray-700">
                            <Users className="w-5 h-5 inline mr-1" />
                            Individual
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value="business"
                            checked={formData.type === 'business'}
                            onChange={handleChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500"
                          />
                          <span className="ml-2 text-gray-700">
                            <Building2 className="w-5 h-5 inline mr-1" />
                            Business
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        Send Message
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="bg-gradient-to-br from-green-800 to-green-900 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">How We Can Help</h3>
                <div className="space-y-8">
                  {helpCategories.map((category, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{category.title}</h4>
                        <p className="text-gray-300 mb-2">{category.description}</p>
                        <a href={category.link} className="inline-flex items-center text-green-300 hover:text-green-200">
                          Learn more <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/20">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.link}
                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Locations</h2>
            <p className="mt-4 text-xl text-gray-600">Find TakaConnect offices and collection centers</p>
          </div>
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">{location.city}</h3>
                <p className="text-gray-600 mb-4">{location.address}</p>
                <div className="flex items-center gap-2 text-green-600">
                  <Phone className="w-5 h-5" />
                  <span>{location.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const contactInfo = [
  {
    icon: <Mail className="w-8 h-8 text-green-600" />,
    title: "Email Us",
    details: "info@takaconnect.com",
    action: "Send an email",
    actionLink: "mailto:info@takaconnect.com"
  },
  {
    icon: <Phone className="w-8 h-8 text-green-600" />,
    title: "Call Us",
    details: "+254 700 123 456",
    action: "Make a call",
    actionLink: "tel:+254700123456"
  },
  {
    icon: <MapPin className="w-8 h-8 text-green-600" />,
    title: "Visit Us",
    details: "Kilimani Business Center, Nairobi, Kenya",
    action: "Get directions",
    actionLink: "https://maps.google.com"
  }
];

const helpCategories = [
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "General Inquiries",
    description: "Questions about our services, coverage areas, or general information.",
    link: "#"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Partnership Opportunities",
    description: "Explore collaboration possibilities with TakaConnect.",
    link: "#"
  },
  {
    icon: <Building2 className="w-6 h-6 text-white" />,
    title: "Business Solutions",
    description: "Learn about our commercial waste management services.",
    link: "#"
  }
];

const socialLinks = [
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>,
    link: "#"
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>,
    link: "#"
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>,
    link: "#"
  },
  {
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18  6.84 10.02c.5.088.65.36.65.645 0 .298-.15.57-.65.657C6.84 19.02 4 15.265 4 10.84c0-5.532 4.477-10.016 10-10.016s10 4.484 10 10.017c0 4.424-2.865 8.18-6.84 10.017-.5.088-.65.36-.65.645 0 .298.15.57.65.657 3.975 1.837 6.84 5.593 6.84 10.018 0 5.533-4.477 10.017-10 10.017s-10-4.484-10-10.017c0-4.425 2.865-8.181 6.84-10.018z" clipRule="evenodd"></path></svg>,
    link: "#"
  }
];

const locations = [
  {
    city: "Nairobi, Kenya",
    address: "Kilimani Business Center, Ngong Road",
    phone: "+254 700 123 456"
  },
  {
    city: "Kigali, Rwanda",
    address: "KG 7 Ave, Kacyiru",
    phone: "+250 788 123 456"
  },
  {
    city: "Lagos, Nigeria",
    address: "Victoria Island, Adeola Odeku Street",
    phone: "+234 701 234 5678"
  }
];

export default ContactPage;