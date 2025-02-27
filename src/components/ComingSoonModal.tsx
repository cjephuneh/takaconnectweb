import React from 'react';
import { X, Calendar, Bell } from 'lucide-react';

interface ComingSoonModalProps {
  onClose: () => void;
}

function ComingSoonModal({ onClose }: ComingSoonModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h3>
          <p className="text-gray-600">
            We're working hard to launch this feature. Be the first to know when we go live!
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl mb-6">
          <div className="flex items-start gap-3">
            <Bell className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Get notified when we launch</h4>
              <p className="text-gray-600 text-sm mb-3">
                Join our waitlist to receive updates and early access.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full py-3 text-center text-green-600 font-medium hover:text-green-700"
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}

export default ComingSoonModal;