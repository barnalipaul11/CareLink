
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-healthcare-neutral flex flex-col">
      <Navbar />
      <main className="flex-grow py-6 px-4 sm:px-6 lg:px-8 animate-fade-in">
        {children}
      </main>
      <footer className="py-4 px-6 text-center text-sm text-healthcare-neutral-dark border-t border-healthcare-neutral-dark/10">
        <p>© {new Date().getFullYear()} Community Health Navigator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
