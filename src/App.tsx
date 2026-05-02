import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import Dashboard from '@/views/Dashboard';
import POSTerminal from '@/views/POSTerminal';
import Inventory from '@/views/Inventory';
import Analytics from '@/views/Analytics';
import Staff from '@/views/Staff';
import Login from '@/views/Login';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'pos': return <POSTerminal />;
      case 'inventory': return <Inventory />;
      case 'analytics': return <Analytics />;
      case 'staff': return <Staff />;
      default: return <Dashboard />;
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Dashboard';
      case 'pos': return 'POS Terminal';
      case 'inventory': return 'Inventory';
      case 'analytics': return 'Analytics';
      case 'staff': return 'Staff';
      default: return 'SwiftPOS';
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav 
          title={getTitle()} 
          onNewSale={() => setCurrentView('pos')}
        />
        
        <main className="flex-1 overflow-y-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
