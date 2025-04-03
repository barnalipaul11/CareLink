
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Search, Filter, ArrowUpDown } from 'lucide-react';

// Mock data for medical camps
const mockCamps = [
  {
    id: 1,
    title: 'Free Vaccination Drive',
    date: '2023-10-15',
    time: '9:00 AM - 4:00 PM',
    location: 'Community Center, 123 Main St',
    organizer: 'Public Health Department',
    type: 'Vaccination',
    description: 'Annual flu vaccination drive open to all community members. Free for seniors and children under 12.',
    image: 'https://images.unsplash.com/photo-1626351545208-28c9080106ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Diabetes Screening Camp',
    date: '2023-11-05',
    time: '10:00 AM - 2:00 PM',
    location: 'Public Library, 456 Oak Ave',
    organizer: 'Diabetes Association',
    type: 'Screening',
    description: 'Free diabetes screening and consultation with healthcare professionals. Learn about diabetes prevention and management.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Dental Health Camp',
    date: '2023-11-12',
    time: '9:00 AM - 3:00 PM',
    location: 'Westside Community Hall, 789 Pine Rd',
    organizer: 'Smile Foundation',
    type: 'Dental',
    description: 'Free dental check-ups, cleanings, and oral health education. Limited spots available.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Eye Check-up Camp',
    date: '2023-11-20',
    time: '10:00 AM - 4:00 PM',
    location: 'City Health Center, 321 Elm St',
    organizer: 'Vision For All',
    type: 'Eye Care',
    description: 'Comprehensive eye examinations and distribution of free spectacles for those in need.',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Women\'s Health Awareness',
    date: '2023-12-03',
    time: '11:00 AM - 3:00 PM',
    location: 'Community Hospital, 567 Maple Dr',
    organizer: 'Women\'s Health Initiative',
    type: 'Women\'s Health',
    description: 'Free breast cancer screening, reproductive health consultations, and wellness workshops.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=500&auto=format&fit=crop'
  }
];

const MedicalCampsDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [sortOrder, setSortOrder] = useState('upcoming');

  // Filter types from mock data
  const typeFilters = ['All', ...Array.from(new Set(mockCamps.map(camp => camp.type)))];

  // Filter and sort camps
  const filteredCamps = mockCamps
    .filter(camp => {
      // Search filter
      const matchesSearch = camp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           camp.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           camp.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Type filter
      const matchesType = filterType === 'All' || camp.type === filterType;
      
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      // Sort by date
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      return sortOrder === 'upcoming' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Camps & Healthcare Drives</h1>
        <p className="text-gray-600">Find and attend free healthcare camps and vaccination drives in your community.</p>
      </div>
      
      {/* Search and filters */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-2 pr-4 w-full border border-gray-300 rounded-md focus:ring-healthcare-blue focus:border-healthcare-blue transition-all duration-200"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <Filter size={18} className="text-gray-500" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-3 focus:ring-healthcare-blue focus:border-healthcare-blue transition-all duration-200"
              >
                {typeFilters.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div 
              className="flex items-center space-x-2 cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-3 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setSortOrder(prev => prev === 'upcoming' ? 'past' : 'upcoming')}
            >
              <ArrowUpDown size={18} className="text-gray-500" />
              <span>{sortOrder === 'upcoming' ? 'Upcoming First' : 'Recent First'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Camps listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCamps.length > 0 ? (
          filteredCamps.map(camp => (
            <div 
              key={camp.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-scale-in"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={camp.image} 
                  alt={camp.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-healthcare-accent text-healthcare-blue-dark rounded-full mb-2">
                    {camp.type}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{camp.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{camp.description}</p>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start">
                    <Calendar size={16} className="mr-2 mt-0.5 text-healthcare-blue" />
                    <span>{new Date(camp.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock size={16} className="mr-2 mt-0.5 text-healthcare-blue" />
                    <span>{camp.time}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-0.5 text-healthcare-blue" />
                    <span>{camp.location}</span>
                  </div>
                  <div className="flex items-start">
                    <Users size={16} className="mr-2 mt-0.5 text-healthcare-blue" />
                    <span>Organized by: {camp.organizer}</span>
                  </div>
                </div>
                
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <button className="w-full py-2 bg-healthcare-blue text-white rounded-md hover:bg-healthcare-blue-dark transition-colors duration-200 btn-hover">
                     <a href="https://forms.gle/Th9tWh16njC5QF4C9">Register for Camp</a>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center p-12 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-center">
              <p className="text-xl font-medium text-gray-700 mb-2">No camps found</p>
              <p className="text-gray-500">Try adjusting your search or filters to find available camps.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalCampsDashboard;
