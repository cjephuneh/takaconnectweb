import React from 'react';
import {
  Leaf,
  Users,
  Globe,
  Award,
  Target,
  Heart,
  CheckCircle,
  Building,
  Calendar,
  Briefcase
} from 'lucide-react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About TakaConnect</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to transform waste management in Africa through technology, community engagement, and sustainable practices.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  TakaConnect was born from a simple observation: waste in African communities represents both an environmental challenge and an untapped economic opportunity.
                </p>
                <p>
                  Founded in 2024 by Dr. Sarah Mwangi, an environmental scientist with deep roots in East Africa, TakaConnect began as a pilot project in Nairobi's Kibera community. What started as a simple waste collection initiative quickly evolved as we witnessed the transformative potential of connecting waste producers with recyclers and upcyclers.
                </p>
                <p>
                  Today, TakaConnect has grown into Africa's first AI-powered waste-to-wealth platform, operating in 5 countries and serving over 10,000 households. Our innovative approach combines cutting-edge technology with deep community engagement to create sustainable environmental and economic outcomes.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="TakaConnect Story"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 rounded-2xl p-6 shadow-xl text-white">
                <div className="text-4xl font-bold mb-2">2023</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
            <p className="mt-4 text-xl text-gray-600">Guided by purpose and impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To transform waste management in Africa by creating a circular economy that converts waste into economic, health, and educational opportunities for communities.
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                A future where waste is no longer a burden but a valuable resource that improves lives, creates sustainable livelihoods, and protects the environment across Africa.
              </p>
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">Meet the passionate people behind TakaConnect</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              View Full Team
            </button>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-4 text-xl text-gray-600">Key milestones in our growth</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-green-200 transform -translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative z-10 flex flex-col md:flex-row items-center mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 md:order-2">
                        <Calendar className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold">{milestone.year}</h3>
                    </div>
                    <h4 className={`text-xl font-semibold mb-2 ${index % 2 === 0 ? 'text-right' : ''}`}>{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white font-bold absolute left-1/2 transform -translate-x-1/2">
                  {index + 1}
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Partners</h2>
            <p className="mt-4 text-xl text-gray-600">Collaborating for greater impact</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white h-32 rounded-lg shadow-sm flex items-center justify-center">
                <Building className="w-12 h-12 text-gray-300" />
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Recognition & Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">{award.title}</h4>
                      <p className="text-gray-500 text-sm">{award.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Mission</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            We're always looking for passionate individuals and organizations to join our mission of transforming waste management in Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              View Careers
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Building className="w-5 h-5" />
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const missionPoints = [
  "Reduce waste in landfills by 50% in our operating communities",
  "Create sustainable livelihoods for waste workers",
  "Improve public health through better waste management",
  "Generate economic value from previously discarded materials"
];

const visionPoints = [
  "Zero-waste communities across Africa",
  "Circular economy principles embedded in daily life",
  "Waste management as a pathway to economic empowerment",
  "Technology-enabled solutions accessible to all"
];

const values = [
  {
    icon: <Heart className="w-8 h-8 text-green-600" />,
    title: "Community First",
    description: "We center our solutions around the needs and aspirations of the communities we serve, ensuring they are the primary beneficiaries of our work."
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />,
    title: "Environmental Stewardship",
    description: "We are committed to protecting and regenerating the environment through sustainable waste management practices."
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Innovation",
    description: "We continuously seek new and better ways to solve waste management challenges through technology and creative thinking."
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Inclusivity",
    description: "We create opportunities for all, especially marginalized communities, to participate in and benefit from our waste-to-wealth ecosystem."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-600" />,
    title: "Integrity",
    description: "We operate with transparency, honesty, and accountability in all our interactions and transactions."
  },
  {
    icon: <Target className="w-8 h-8 text-green-600" />,
    title: "Impact-Driven",
    description: "We measure our success by the positive environmental, social, and economic outcomes we create."
  }
];

const teamMembers = [
  {
    name: "Caleb Jephuneh",
    role: "co-founder & CEO",
    bio: "Techpreneur"
  },
  {
    name: "James Ochieng",
    role: "CTO",
    bio: "AI and blockchain specialist with previous exits in the tech space."
  },
  {
    name: "Amina Diop",
    role: "CFO",
    bio: "Former investment banker with expertise in impact investing and sustainable finance."
  },
  {
    name: "David Kimani",
    role: "COO",
    bio: "Operations expert with experience scaling social enterprises across Africa."
  }
];

const milestones = [
  {
    year: "2024",
    title: "Foundation",
    description: "TakaConnect was founded in Nairobi, Kenya with a pilot program in the Kibera community."
  },
  // {
  //   year: "2023",
  //   title: "First Funding",
  //   description: "Secured $500,000 in seed funding from impact investors to expand operations."
  // },
  // {
  //   year: "2024",
  //   title: "Technology Launch",
  //   description: "Released our AI-powered waste recognition app and blockchain tracking system."
  // },
  // {
  //   year: "2024",
  //   title: "Expansion",
  //   description: "Expanded operations to Tanzania, Uganda, Rwanda, and Ghana, serving over 10,000 households."
  // },
  // {
  //   year: "2025",
  //   title: "Series A",
  //   description: "Raised $2.5 million in Series A funding to scale technology and operations."
  // }
];

const awards = [
  {
    title: "African Climate Innovation Award",
    year: "2024",
    description: "Recognized for innovative approach to waste management and carbon reduction."
  },
  {
    title: "Social Enterprise of the Year",
    year: "2024",
    description: "Awarded by the East African Business Council for community impact."
  },
  {
    title: "Tech for Good Award",
    year: "2023",
    description: "Recognized for using technology to address environmental challenges."
  }
];

export default AboutPage;