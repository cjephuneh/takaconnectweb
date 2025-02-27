import React from 'react';
import {
  Leaf,
  Recycle,
  Brain,
  Users,
  ArrowRight,
  Send,
  Award,
  Smartphone,
  Download,
  Zap,
  Binary,
  CircleDollarSign,
  Flame,
  Globe,
  GraduationCap,
  HeartPulse,
  LineChart,
  Network,
  Share2,
  ShieldCheck,
  Truck,
  Building2,
  PlayIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  handleStartEarning: () => void;
}

function HomePage({ handleStartEarning }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Waste,<br />
              Your <span className="text-green-400">Wealth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Join Africa's first AI-powered waste-to-wealth platform. Turn your household waste into healthcare, education, and financial opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleStartEarning}
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Earning Now <ArrowRight className="w-5 h-5" />
              </button>
              <Link 
                to="/how-it-works"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 border border-white/30"
              >
                Watch How It Works <PlayIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Transforming Waste Management</h2>
            <p className="mt-4 text-xl text-gray-600">Powered by AI, Blockchain, and Community Innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Bin System */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Smart Bin Technology</h2>
              <div className="space-y-6">
                {smartBinFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Smart Bin System"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm">Sorting Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain & Carbon Credits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Blockchain-Powered Transparency</h2>
            <p className="mt-4 text-xl text-gray-600">Track your impact and earn carbon credits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Binary className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent Tracking</h3>
              <p className="text-gray-600 mb-6">
                Every piece of waste is tracked on our blockchain, from collection to processing, ensuring complete transparency and trust.
              </p>
              <div className="space-y-4">
                {blockchainFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/50 p-4 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Carbon Credits</h3>
              <p className="text-gray-600 mb-6">
                Convert your recycling efforts into tradeable carbon credits, contributing to global climate action.
              </p>
              <div className="space-y-4">
                {carbonFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/50 p-4 rounded-lg">
                    <Leaf className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste-to-Value Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Turn Waste into Value</h2>
            <p className="mt-4 text-xl text-gray-600">Multiple ways to benefit from your recycling efforts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-green-600 font-medium text-sm">Learn more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Features */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">AI-Powered Waste Management in Your Pocket</h2>
              <div className="space-y-6">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 transform translate-x-12">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="TakaConnect App Screen 1"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute top-1/4 -left-4 z-20">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="TakaConnect App Screen 2"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invest With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Invest With Us</h2>
            <p className="mt-4 text-xl text-gray-600">Join our mission to transform waste management in Africa</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Why Invest in TakaConnect?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CircleDollarSign className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">High Growth Potential</span>
                        <p className="text-gray-600">The waste management market in Africa is projected to grow at 8.5% CAGR through 2030.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Environmental Impact</span>
                        <p className="text-gray-600">Direct contribution to reducing carbon emissions and plastic pollution.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Social Development</span>
                        <p className="text-gray-600">Creating jobs and improving health outcomes in underserved communities.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link 
                  to="/invest"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Learn More About Investing
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$2.5M</div>
                <div className="text-gray-600">Funding Raised</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24%</div>
                <div className="text-gray-600">Annual ROI</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                <div className="text-gray-600">Strategic Partners</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-gray-600">African Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
            <p className="mt-4 text-xl text-gray-600">Making a measurable difference in communities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-xl text-gray-600">Real impact in our communities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center gap-2 text-green-600">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">{story.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Start Your Journey Today</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of households already turning their waste into opportunity with TakaConnect.
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

const keyFeatures = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Waste-to-Energy",
    description: "Convert non-recyclable waste into electricity credits through our partnership with energy plants."
  },
  {
    icon: <Binary className="w-6 h-6 text-white" />,
    title: "Smart Bins",
    description: "IoT-enabled bins with real-time monitoring and automated collection scheduling."
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "AI Recognition",
    description: "Advanced image recognition for instant waste categorization and sorting guidance."
  },
  {
    icon: <Network className="w-6 h-6 text-white" />,
    title: "P2P Network",
    description: "Connect directly with local recyclers and artisans who need specific materials."
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Carbon Credits",
    description: "Earn and trade carbon credits for your waste reduction efforts."
  },
  {
    icon: <CircleDollarSign className="w-6 h-6 text-white" />,
    title: "Microfinance",
    description: "Convert recycling points into microloans for small business growth."
  }
];

const smartBinFeatures = [
  {
    icon: <Binary className="w-6 h-6 text-green-300" />,
    title: "Real-time Monitoring",
    description: "Smart sensors track fill levels and waste composition automatically."
  },
  {
    icon: <Truck className="w-6 h-6 text-green-300" />,
    title: "Automated Collection",
    description: "Schedule pickups automatically when bins reach capacity."
  },
  {
    icon: <Award className="w-6 h-6 text-green-300" />,
    title: "Reward Points",
    description: "Earn points for proper waste sorting and regular recycling."
  }
];

const blockchainFeatures = [
  "Transparent waste tracking",
  "Secure reward transactions",
  "Immutable collection records",
  "Smart contract automation"
];

const carbonFeatures = [
  "Verified carbon credits",
  "Global trading platform",
  "Corporate partnerships",
  "Impact verification"
];

const valuePrograms = [
  {
    icon: <HeartPulse className="w-6 h-6 text-green-600" />,
    title: "Healthcare Credits",
    description: "Convert points into NHIF coverage and health services"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-green-600" />,
    title: "Education Fund",
    description: "Support school fees through recycling rewards"
  },
  {
    icon: <Flame className="w-6 h-6 text-green-600" />,
    title: "Energy Credits",
    description: "Reduce electricity bills with waste-to-energy points"
  },
  {
    icon: <Building2 className="w-6 h-6 text-green-600" />,
    title: "Business Loans",
    description: "Access microloans backed by recycling history"
  }
];

const appFeatures = [
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Waste Recognition",
    description: "Scan and identify waste items instantly with AI technology"
  },
  {
    icon: <LineChart className="w-6 h-6 text-white" />,
    title: "Impact Tracking",
    description: "Monitor your environmental impact and earnings in real-time"
  },
  {
    icon: <Share2 className="w-6 h-6 text-white" />,
    title: "Community Network",
    description: "Connect with local recyclers and waste collectors"
  }
];

const impactStats = [
  {
    value: "10K+",
    label: "Active Households"
  },
  {
    value: "500T",
    label: "Waste Recycled"
  },
  {
    value: "$2M",
    label: "Community Earnings"
  },
  {
    value: "30%",
    label: "Emissions Reduced"
  }
];

const successStories = [
  {
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Sarah's Story",
    description: "From waste collector to small business owner through TakaConnect's microfinance program.",
    achievement: "Started Recycling Business"
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Kibera Community",
    description: "Transformed local waste management and created jobs for youth.",
    achievement: "90% Waste Reduction"
  },
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Green Schools Initiative",
    description: "Schools funding educational resources through recycling programs.",
    achievement: "20 Schools Supported"
  }
];

export default HomePage;