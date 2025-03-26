
import React from 'react';
import Layout from '../components/Layout';
import MedicalCampsDashboard from '../components/MedicalCampsDashboard';

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
        <MedicalCampsDashboard />
      </div>
    </Layout>
  );
};

export default DashboardPage;
