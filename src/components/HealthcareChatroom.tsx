
import React, { useState } from 'react';
import { Play, Heart, MessageSquare, Share2, ThumbsUp, Video, BookOpen, Clock } from 'lucide-react';

// Mock data for posts
const initialPosts = [
  {
    id: 1,
    author: {
      name: 'Dr. Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop',
      role: 'Cardiologist'
    },
    date: '2 days ago',
    content: 'Today I want to talk about the importance of maintaining healthy blood pressure levels. Hypertension is often called the "silent killer" because it typically has no symptoms until serious problems arise.',
    likes: 24,
    comments: 5,
    shares: 3,
    videoUrl: 'https://example.com/video1.mp4',
    videoThumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    author: {
      name: 'Dr. Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop',
      role: 'Nutritionist'
    },
    date: '4 days ago',
    content: 'Let\'s discuss healthy eating habits that don\'t break the bank. Eating well doesn\'t have to be expensive. Here are some budget-friendly nutritious foods and meal ideas for the whole family.',
    likes: 42,
    comments: 12,
    shares: 15,
    videoUrl: 'https://example.com/video2.mp4',
    videoThumbnail: 'https://images.unsplash.com/photo-1455279032580-11724aa9bf06?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    author: {
      name: 'Dr. Lisa Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=150&auto=format&fit=crop',
      role: 'Pediatrician'
    },
    date: '1 week ago',
    content: 'Childhood vaccinations: what parents need to know. In this video, I explain the importance of following the recommended vaccination schedule and address common concerns.',
    likes: 38,
    comments: 7,
    shares: 22,
    videoUrl: 'https://example.com/video3.mp4',
    videoThumbnail: 'https://images.unsplash.com/photo-1632053003385-def3f43bfbd6?q=80&w=500&auto=format&fit=crop'
  }
];

// Mock data for upcoming sessions
const upcomingSessions = [
  {
    id: 1,
    title: 'Managing Diabetes: Daily Care & Monitoring',
    doctor: 'Dr. Alex Rivera',
    time: 'Tomorrow, 10:00 AM',
    thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Mental Health Awareness & Self-Care',
    doctor: 'Dr. Emily Watson',
    time: 'Oct 25, 3:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=100&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Prenatal Care: What to Expect',
    doctor: 'Dr. Maria Gonzalez',
    time: 'Oct 28, 11:00 AM',
    thumbnail: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e2?q=80&w=100&auto=format&fit=crop'
  }
];

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  videoUrl: string;
  videoThumbnail: string;
}

const HealthcareChatroom: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: <BookOpen size={18} /> },
    { id: 'nutrition', name: 'Nutrition', icon: <Heart size={18} /> },
    { id: 'prevention', name: 'Prevention', icon: <ThumbsUp size={18} /> },
    { id: 'mental', name: 'Mental Health', icon: <MessageSquare size={18} /> }
  ];

  const handlePostLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
      {/* Main content - posts */}
      <div className="lg:col-span-2 space-y-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Healthcare Community</h1>
          <p className="text-gray-600">Learn from healthcare professionals and connect with your community.</p>
        </div>
        
        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 mb-4 -mx-1 hide-scrollbar">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap mx-1 px-4 py-2 rounded-full flex items-center transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-healthcare-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Posts */}
        <div className="space-y-6">
          {posts.map(post => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-slide-in-bottom"
              style={{ animationDelay: `${post.id * 100}ms` }}
            >
              {/* Post header */}
              <div className="p-5 flex items-center space-x-3">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-healthcare-blue"
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                    <span className="ml-2 px-2 py-0.5 bg-healthcare-accent text-healthcare-blue-dark text-xs rounded-full">
                      {post.author.role}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.date}
                  </p>
                </div>
              </div>
              
              {/* Post content */}
              <div className="px-5">
                <p className="text-gray-700 mb-4">{post.content}</p>
              </div>
              
              {/* Post video */}
              <div className="relative h-64 group cursor-pointer">
                <img 
                  src={post.videoThumbnail} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-200">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <Play size={32} className="text-healthcare-blue ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Video size={14} className="mr-1" />
                  Medical Education
                </div>
              </div>
              
              {/* Post actions */}
              <div className="p-5 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-6">
                    <button 
                      className="flex items-center space-x-1 text-gray-600 hover:text-healthcare-blue transition-colors duration-200"
                      onClick={() => handlePostLike(post.id)}
                    >
                      <ThumbsUp size={18} />
                      <span>{post.likes}</span>
                    </button>
                    
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-healthcare-blue transition-colors duration-200">
                      <MessageSquare size={18} />
                      <span>{post.comments}</span>
                    </button>
                    
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-healthcare-blue transition-colors duration-200">
                      <Share2 size={18} />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                  
                  <button className="px-4 py-1.5 bg-healthcare-blue text-white rounded-md hover:bg-healthcare-blue-dark transition-colors duration-200 btn-hover">
                    Watch Full Video
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="space-y-6">
        {/* Upcoming live sessions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-healthcare-blue text-white">
            <h3 className="font-semibold">Upcoming Live Health Sessions</h3>
          </div>
          
          <div className="p-4 space-y-4">
            {upcomingSessions.map(session => (
              <div key={session.id} className="flex items-center space-x-3 group animate-pulse-gentle">
                <div className="relative w-12 h-12 overflow-hidden rounded-md flex-shrink-0">
                  <img 
                    src={session.thumbnail} 
                    alt={session.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-healthcare-blue transition-colors duration-200">{session.title}</h4>
                  <p className="text-gray-500 text-sm">{session.doctor}</p>
                  <p className="text-healthcare-blue text-xs">{session.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-gray-50 text-center">
            <button className="text-healthcare-blue hover:text-healthcare-blue-dark font-medium transition-colors duration-200">
              View all upcoming sessions
            </button>
          </div>
        </div>
        
        {/* Join Community */}
        <div className="bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark rounded-xl shadow-sm overflow-hidden text-white text-center p-6 animate-float">
          <h3 className="font-semibold text-xl mb-2">Join Our Healthcare Community</h3>
          <p className="mb-4 opacity-90">Connect with doctors and health professionals for regular advice and support.</p>
          <button className="px-6 py-2 bg-white text-healthcare-blue rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 btn-hover">
            Become a Member
          </button>
        </div>
        
        {/* Community stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Community Stats</h3>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-healthcare-blue">24</p>
                <p className="text-gray-600 text-sm">Active Doctors</p>
              </div>
              
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-healthcare-blue">156</p>
                <p className="text-gray-600 text-sm">Articles & Videos</p>
              </div>
              
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-healthcare-blue">1.2k</p>
                <p className="text-gray-600 text-sm">Community Members</p>
              </div>
              
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-healthcare-blue">18</p>
                <p className="text-gray-600 text-sm">Health Topics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareChatroom;
