import React, { useState } from 'react';
import {
  Leaf,
  Recycle,
  Brain,
  Users,
  Car as Farm,
  BarChart3,
  ArrowRight,
  Send,
  Sprout,
  Trash2,
  Award,
  Phone,
  Smartphone,
  ShoppingBag,
  Wallet,
  Download,
  Lock,
  Sparkles,
  Zap,
  Binary,
  BookOpen,
  Building2,
  CircleDollarSign,
  Factory,
  FileBarChart,
  Flame,
  Globe,
  GraduationCap,
  HeartPulse,
  LineChart,
  Network,
  Recycle as RecycleIcon,
  School,
  Share2,
  ShieldCheck,
  Truck,
  Lightbulb,
  Coins,
  Play as PlayIcon,
  DollarSign,
  TrendingUp,
  PieChart,
  BarChart,
  Users as UsersIcon,
  Home,
  Info,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import InvestPage from './pages/InvestPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ComingSoonModal from './components/ComingSoonModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleStartEarning = () => {
    setShowComingSoon(true);
  };

  const closeComingSoon = () => {
    setShowComingSoon(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
                <Leaf className="w-8 h-8 text-green-500" />
                <span className="text-xl font-bold text-gray-900">TakaConnect</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`text-gray-700 hover:text-green-500 px-3 py-2 rounded-md ${location.pathname === '/' ? 'text-green-500 font-medium' : ''}`}>Home</Link>
              <Link to="/how-it-works" className={`text-gray-700 hover:text-green-500 px-3 py-2 rounded-md ${location.pathname === '/how-it-works' ? 'text-green-500 font-medium' : ''}`}>How It Works</Link>
              <Link to="/invest" className={`text-gray-700 hover:text-green-500 px-3 py-2 rounded-md ${location.pathname === '/invest' ? 'text-green-500 font-medium' : ''}`}>Invest With Us</Link>
              <Link to="/about" className={`text-gray-700 hover:text-green-500 px-3 py-2 rounded-md ${location.pathname === '/about' ? 'text-green-500 font-medium' : ''}`}>About</Link>
              <Link to="/contact" className={`text-gray-700 hover:text-green-500 px-3 py-2 rounded-md ${location.pathname === '/contact' ? 'text-green-500 font-medium' : ''}`}>Contact</Link>
              <button 
                onClick={handleStartEarning}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-all"
              >
                Start Earning
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-500 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-green-100 text-green-500' : 'text-gray-700'} font-medium`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/how-it-works" 
                className={`block px-3 py-2 rounded-md ${location.pathname === '/how-it-works' ? 'bg-green-100 text-green-500' : 'text-gray-700'} font-medium`}
                onClick={closeMenu}
              >
                How It Works
              </Link>
              <Link 
                to="/invest" 
                className={`block px-3 py-2 rounded-md ${location.pathname === '/invest' ? 'bg-green-100 text-green-500' : 'text-gray-700'} font-medium`}
                onClick={closeMenu}
              >
                Invest With Us
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md ${location.pathname === '/about' ? 'bg-green-100 text-green-500' : 'text-gray-700'} font-medium`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded-md ${location.pathname === '/contact' ? 'bg-green-100 text-green-500' : 'text-gray-700'} font-medium`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <button 
                onClick={() => {
                  handleStartEarning();
                  closeMenu();
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-white bg-green-500 font-medium"
              >
                Start Earning
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage handleStartEarning={handleStartEarning} />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoon && <ComingSoonModal onClose={closeComingSoon} />}
    </div>
  );
}

export default App;