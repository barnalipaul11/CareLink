
import React from 'react';
import Layout from '../components/Layout';
import ChatBot from '../components/ChatBot';
import { MessageCircle, ThumbsUp, AlertCircle } from 'lucide-react';

const ChatbotPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Assistant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get immediate medical guidance, find healthcare facilities, and learn about medical camps in your area.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChatBot />
          </div>
          
          <div className="space-y-6">
            {/* How to use */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-healthcare-blue text-white">
                <h3 className="font-semibold">How to Use the Medical Assistant</h3>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <MessageCircle size={20} className="text-healthcare-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Describe Your Symptoms</h4>
                    <p className="text-gray-600 text-sm">Tell us what you're experiencing, and we'll provide first aid guidance and recommendations.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <AlertCircle size={20} className="text-healthcare-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Find Healthcare Facilities</h4>
                    <p className="text-gray-600 text-sm">Ask about hospitals or healthcare facilities in your area, and we'll help you locate the nearest options.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <ThumbsUp size={20} className="text-healthcare-blue" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Discover Medical Camps</h4>
                    <p className="text-gray-600 text-sm">Inquire about medical camps and vaccination drives happening in your community.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Medical Disclaimer</h3>
              <p className="text-gray-600 text-sm">
                The information provided by this assistant is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
            
            {/* Emergency Contact */}
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h3 className="font-semibold text-red-700 mb-2">In Case of Emergency</h3>
              <p className="text-gray-700 text-sm mb-3">
                If you're experiencing a medical emergency, please call your local emergency services immediately:
              </p>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600">112</p>
                <p className="text-gray-600 text-sm">Emergency Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatbotPage;
