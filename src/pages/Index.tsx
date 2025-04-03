
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, Users, ChevronRight, MapPin, ArrowRight, Heart, Shield } from 'lucide-react';
import Layout from '../components/Layout';

const Index = () => {
  const features = [
    {
      icon: <MessageCircle size={24} className="text-healthcare-blue" />,
      title: 'Medical Chatbot',
      description: 'Get immediate first aid guidance, find nearby healthcare facilities, and learn about local health initiatives.',
      link: '/chatbot'
    },
    {
      icon: <Calendar size={24} className="text-healthcare-blue" />,
      title: 'Medical Camps',
      description: 'Discover free health camps, vaccination drives, and community health events in your area.',
      link: '/dashboard'
    },
    {
      icon: <Users size={24} className="text-healthcare-blue" />,
      title: 'Healthcare Chatroom',
      description: 'Learn from healthcare professionals through educational videos and health practice recommendations.',
      link: '/chatroom'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-24 px-4 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-3 py-1 bg-healthcare-accent text-healthcare-blue-dark rounded-full text-sm font-medium">
                Connecting Communities to Care
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Community <br />
                <span className="text-healthcare-blue">Health Navigator</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Bridging the gap between underserved communities and quality healthcare through technology, information, and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/chatbot" 
                  className="px-6 py-3 bg-healthcare-blue text-white rounded-lg flex items-center justify-center hover:bg-healthcare-blue-dark transition-colors duration-200 shadow-sm btn-hover"
                >
                  Get Medical Guidance
                  <ChevronRight size={18} className="ml-1" />
                </Link>
                <Link 
                  to="/dashboard" 
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 btn-hover"
                >
                  Find Health Camps
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="relative h-full flex items-center justify-center animate-fade-in">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-healthcare-blue rounded-3xl opacity-10 animate-pulse-gentle"></div>
                <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-healthcare-teal rounded-3xl opacity-10 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 m-auto w-full h-full glass-card rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2787&auto=format&fit=crop" 
                    alt="Healthcare professional" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-4 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-healthcare-accent rounded-full flex items-center justify-center">
                      <Heart size={20} className="text-healthcare-blue" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Healthcare Access</p>
                      <p className="text-gray-600 text-sm">For everyone</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-healthcare-accent rounded-full flex items-center justify-center">
                      <Shield size={20} className="text-healthcare-blue" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Health Security</p>
                      <p className="text-gray-600 text-sm">For communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting underserved communities with essential healthcare services and information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-healthcare-accent rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link 
                  to={feature.link}
                  className="flex items-center text-healthcare-blue font-medium hover:text-healthcare-blue-dark transition-colors duration-200 link-underline"
                >
                  Explore
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map/Locations Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-3 py-1 bg-healthcare-accent text-healthcare-blue-dark rounded-full text-sm font-medium">
                Local Healthcare Resources
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Find Healthcare Resources Near You</h2>
              <p className="text-gray-600">
                Our platform helps you locate nearby healthcare facilities, free medical camps, and community health events to ensure you have access to care when you need it.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-healthcare-blue/10 p-2 rounded-full mt-1">
                    <MapPin size={20} className="text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Hospitals & Clinics</h3>
                    <p className="text-gray-600 text-sm">Find the nearest medical facilities with information on services, insurance acceptance, and availability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-healthcare-blue/10 p-2 rounded-full mt-1">
                    <Calendar size={20} className="text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Health Camps & Events</h3>
                    <p className="text-gray-600 text-sm">Stay informed about free medical camps, vaccination drives, and health education events in your community.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-healthcare-blue/10 p-2 rounded-full mt-1">
                    <Users size={20} className="text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Community Support</h3>
                    <p className="text-gray-600 text-sm">Connect with healthcare professionals and community health workers for guidance and support.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/chatbot" 
                className="inline-flex items-center text-healthcare-blue font-medium hover:text-healthcare-blue-dark transition-colors duration-200 link-underline"
              >
                Ask our assistant for nearby resources
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg h-96 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthcare map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-1">Healthcare Resources Map</h3>
                  <p className="text-gray-700 text-sm">Find facilities, services, and events near you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Healthcare Journey Today</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Take the first step towards better health for you and your community. 
            Our platform is here to connect you with the resources and information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/chatbot" 
              className="px-6 py-3 bg-white text-healthcare-blue rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 shadow-sm btn-hover"
            >
              Chat with Medical Assistant
              <ChevronRight size={18} className="ml-1" />
            </Link>
            <Link 
              to="/dashboard" 
              className="px-6 py-3 bg-transparent border border-white text-white rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-200 btn-hover"
            >
              Explore Health Camps
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
