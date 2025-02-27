import React from 'react';
import {
  Leaf,
  Recycle,
  Brain,
  ArrowRight,
  Smartphone,
  Binary,
  CircleDollarSign,
  Truck,
  Award,
  Download,
  PlayIcon
} from 'lucide-react';

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">How TakaConnect Works</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our innovative platform connects waste producers with recyclers, creating value from waste and building a cleaner future.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">See TakaConnect in Action</h2>
            <p className="mt-4 text-xl text-gray-600">Watch how our platform transforms waste management</p>
          </div>
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/-_WVflQCTCQ?si=0__hdPzuUvdd7DQe"
              title="TakaConnect: How It Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">The TakaConnect Process</h2>
            <p className="mt-4 text-xl text-gray-600">Simple steps to turn your waste into value</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-md relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Behind */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Technology Behind TakaConnect</h2>
            <p className="mt-4 text-xl text-gray-600">Innovative solutions for waste management challenges</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to know about TakaConnect</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Download the TakaConnect app today and join thousands of households already turning their waste into opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              <Download className="w-6 h-6" />
              Download for iOS
            </button>
            <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              <Download className="w-6 h-6" />
              Download for Android
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const processSteps = [
  {
    icon: <Smartphone className="w-8 h-8 text-green-600" />,
    title: "Download the App",
    description: "Get the TakaConnect app on your smartphone and create your account."
  },
  {
    icon: <Recycle className="w-8 h-8 text-green-600" />,
    title: "Sort Your Waste",
    description: "Use our AI-powered scanner to identify and sort your recyclable waste."
  },
  {
    icon: <Truck className="w-8 h-8 text-green-600" />,
    title: "Schedule Collection",
    description: "Request a pickup or drop off at a nearby collection point."
  },
  {
    icon: <Award className="w-8 h-8 text-green-600" />,
    title: "Earn Rewards",
    description: "Receive points, credits, or cash for your recycled materials."
  }
];

const technologies = [
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: "Artificial Intelligence",
    description: "Our AI system powers waste recognition and optimizes collection routes.",
    features: [
      "Image recognition for waste sorting",
      "Predictive analytics for collection",
      "Smart pricing based on market demand",
      "Personalized recycling recommendations"
    ]
  },
  {
    icon: <Binary className="w-8 h-8 text-white" />,
    title: "Blockchain Ledger",
    description: "Transparent tracking of waste from collection to processing.",
    features: [
      "Immutable waste tracking records",
      "Transparent reward distribution",
      "Smart contracts for automated payments",
      "Carbon credit verification"
    ]
  },
  {
    icon: <CircleDollarSign className="w-8 h-8 text-white" />,
    title: "Reward Ecosystem",
    description: "Multiple ways to benefit from your recycling efforts.",
    features: [
      "Healthcare credits conversion",
      "Education fund contributions",
      "Energy bill reductions",
      "Microfinance opportunities"
    ]
  }
];

const faqs = [
  {
    question: "How do I earn rewards with TakaConnect?",
    answer: "You earn rewards based on the quantity and quality of recyclable materials you contribute. Our AI system categorizes and weighs your waste, assigning points that can be converted to various benefits like healthcare credits, education funds, or cash."
  },
  {
    question: "Where is TakaConnect available?",
    answer: "TakaConnect is currently operating in select cities across Kenya, Rwanda, Ghana, Nigeria, and South Africa, with plans to expand to more African countries in the coming months."
  },
  {
    question: "What types of waste can I recycle through TakaConnect?",
    answer: "We accept a wide range of recyclable materials including plastics (PET, HDPE, PP), paper, cardboard, glass, aluminum, and electronic waste. Our app can help you identify which items are recyclable."
  },
  {
    question: "How does the collection process work?",
    answer: "You can either schedule a pickup through the app, where our collection partners will come to your location, or you can drop off your sorted waste at designated collection points shown in the app."
  },
  {
    question: "Can businesses use TakaConnect?",
    answer: "Yes! We have special programs for businesses of all sizes. Our commercial solutions include regular collection schedules, bulk processing, and corporate sustainability reporting."
  }
];

export default HowItWorksPage;