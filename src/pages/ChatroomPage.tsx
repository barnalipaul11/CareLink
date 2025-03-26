
import React from 'react';
import Layout from '../components/Layout';
import HealthcareChatroom from '../components/HealthcareChatroom';

const ChatroomPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
        <HealthcareChatroom />
      </div>
    </Layout>
  );
};

export default ChatroomPage;
