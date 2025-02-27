import React from 'react';
import {
  CircleDollarSign,
  TrendingUp,
  PieChart,
  BarChart,
  Users,
  Globe,
  Building2,
  Leaf,
  Recycle,
  Brain,
  ShieldCheck,
  Download,
  FileBarChart,
  LineChart,
  DollarSign
} from 'lucide-react';

function InvestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Invest in a Sustainable Future</h1>
              <p className="text-xl mb-8">
                Join our mission to transform waste management across Africa while generating competitive returns and creating positive environmental impact.
              </p>
              <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Investment Information
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">$0M</div>
                    <div className="text-gray-300">Funding Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">0%</div>
                    <div className="text-gray-300">Annual ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">0</div>
                    <div className="text-gray-300">Strategic Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">1</div>
                    <div className="text-gray-300">African Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Investment Opportunity</h2>
            <p className="mt-4 text-xl text-gray-600">Why TakaConnect is a compelling investment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 mb-6">{opportunity.description}</p>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">{opportunity.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Market Analysis</h2>
            <p className="mt-4 text-xl text-gray-600">The growing opportunity in African waste management</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {marketStats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {stat.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{stat.title}</h3>
                        <p className="text-gray-600 mb-2">{stat.description}</p>
                        <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">Waste Management Market Growth</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-16 h-16 text-green-500" />
                {/* In a real application, this would be a chart component */}
              </div>
              <p className="text-gray-600">
                The African waste management market is projected to grow at a CAGR of 8.5% through 2030, driven by urbanization, population growth, and increasing environmental regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Investment Tiers</h2>
            <p className="mt-4 text-xl text-gray-600">Flexible options to match your investment goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentTiers.map((tier, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden shadow-lg ${tier.featured ? 'ring-4 ring-green-500' : ''}`}>
                <div className={`p-8 ${tier.featured ? 'bg-green-500 text-white' : 'bg-gray-50 text-gray-900'}`}>
                  {tier.featured && (
                    <div className="inline-block bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">${tier.minInvestment.toLocaleString()}</span>
                    <span className="text-lg">minimum</span>
                  </div>
                  <p className={`${tier.featured ? 'text-white/80' : 'text-gray-600'} mb-6`}>
                    {tier.description}
                  </p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-4 mb-8">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-medium ${tier.featured ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors`}>
                    Request Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Investment Process</h2>
            <p className="mt-4 text-xl text-gray-600">Simple steps to become an investor</p>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-green-200 transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12">
              {investmentProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div className="hidden md:block absolute top-0 left-1/2 w-12 h-12 bg-green-500 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:ml-auto' : 'md:pl-16'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 md:hidden">
                        <span className="text-green-600 font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Financial Projections</h2>
            <p className="mt-4 text-xl text-gray-600">Our growth trajectory and return expectations</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Revenue Growth Projection</h3>
              <div className="h-80 bg-white rounded-lg flex items-center justify-center">
                <BarChart className="w-16 h-16 text-green-500" />
                {/* In a real application, this would be a chart component */}
              </div>
            </div>
            <div className="space-y-6">
              {financialMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    {metric.icon}
                    <h3 className="text-lg font-bold">{metric.title}</h3>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
              <FileBarChart className="w-5 h-5" />
              Download Full Financial Projections
            </button>
          </div>
        </div>
      </section>

      {/* Investor Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Investor Testimonials</h2>
            <p className="mt-4 text-xl text-gray-600">What our investors say about us</p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Invest in a Sustainable Future?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join our growing community of investors who are making a difference while earning competitive returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Investor Deck
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const investmentOpportunities = [
  {
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    title: "High Growth Market",
    description: "The waste management market in Africa is projected to grow exponentially as urbanization increases.",
    stat: "8.5% CAGR through 2030"
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />,
    title: "Environmental Impact",
    description: "Direct contribution to reducing carbon emissions and plastic pollution across the continent.",
    stat: "500K tons CO₂ offset potential"
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Social Development",
    description: "Creating jobs and improving health outcomes in underserved communities.",
    stat: "2,500+ jobs created"
  }
];

const marketStats = [
  {
    icon: <Building2 className="w-6 h-6 text-green-600" />,
    title: "Urban Population Growth",
    description: "Africa's urban population is growing rapidly, increasing waste generation.",
    value: "4.5% annual growth"
  },
  {
    icon: <Recycle className="w-6 h-6 text-green-600" />,
    title: "Recycling Opportunity",
    description: "Current recycling rates are low, presenting significant opportunity.",
    value: "Only 4% currently recycled"
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: "Market Value",
    description: "The addressable market for waste management in our target countries.",
    value: "$8.5 billion by 2030"
  }
];

const investmentTiers = [
  {
    name: "Seed Investor",
    minInvestment: 10000,
    description: "Entry-level investment opportunity with competitive returns.",
    featured: false,
    benefits: [
      "Quarterly financial reports",
      "Annual investor meetings",
      "5-year investment term",
      "Projected 15% annual returns"
    ]
  },
  {
    name: "Growth Partner",
    minInvestment: 50000,
    description: "Our most popular tier with enhanced benefits and priority access.",
    featured: true,
    benefits: [
      "Monthly financial updates",
      "Quarterly investor calls",
      "Site visits to operations",
      "3-year investment term",
      "Projected 24% annual returns",
      "Early access to future rounds"
    ]
  },
  {
    name: "Strategic Investor",
    minInvestment: 250000,
    description: "For institutional investors seeking significant stake and influence.",
    featured: false,
    benefits: [
      "Board observer rights",
      "Custom reporting dashboard",
      "Strategic input opportunities",
      "Flexible investment terms",
      "Projected 30%+ annual returns",
      "First right of refusal on future rounds"
    ]
  }
];

const investmentProcess = [
  {
    title: "Initial Consultation",
    description: "Schedule a call with our investment team to discuss your goals and our opportunity."
  },
  {
    title: "Due Diligence",
    description: "Review our detailed financial projections, business model, and impact metrics."
  },
  {
    title: "Investment Agreement",
    description: "Sign our straightforward investment agreement and complete KYC requirements."
  },
  {
    title: "Fund Transfer",
    description: "Transfer your investment amount through our secure banking channels."
  },
  {
    title: "Onboarding",
    description: "Gain access to our investor portal for real-time updates on your investment."
  }
];

const financialMetrics = [
  {
    icon: <PieChart className="w-6 h-6 text-green-600" />,
    title: "Projected ROI",
    value: "24%",
    description: "Average annual return on investment over 5 years"
  },
  {
    icon: <BarChart className="w-6 h-6 text-green-600" />,
    title: "Revenue Growth",
    value: "85%",
    description: "Year-over-year revenue growth projection"
  },
  {
    icon: <CircleDollarSign className="w-6 h-6 text-green-600" />,
    title: "Break-even",
    value: "Q4 2026",
    description: "Projected break-even point for the company"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Angel Investor",
    quote: "TakaConnect represents the perfect blend of financial returns and positive impact. Their team's execution has exceeded my expectations.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Osei",
    role: "Venture Capital Partner",
    quote: "We've invested in numerous African startups, but TakaConnect stands out for their innovative approach to a massive problem.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Elena Moreno",
    role: "Impact Investor",
    quote: "The transparency and regular updates from the TakaConnect team give me confidence that my investment is making a real difference.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

export default InvestPage;