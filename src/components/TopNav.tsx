import React from 'react';
import { Search, Bell, Settings, User, ShoppingCart } from 'lucide-react';

interface TopNavProps {
  title: string;
  onNewSale?: () => void;
}

export default function TopNav({ title, onNewSale }: TopNavProps) {
  return (
    <header className="flex justify-between items-center w-full px-6 h-16 sticky top-0 z-50 bg-white border-b border-slate-200 antialiased">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        <nav className="hidden md:flex items-center gap-6 h-16">
          <button className="text-slate-500 hover:text-slate-900 transition-colors h-full flex items-center text-sm font-medium border-b-2 border-transparent">Overview</button>
          <button className="text-slate-500 hover:text-slate-900 transition-colors h-full flex items-center text-sm font-medium">Activity</button>
          <button className="text-slate-500 hover:text-slate-900 transition-colors h-full flex items-center text-sm font-medium">Settings</button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input 
            className="bg-slate-100 border-none rounded-lg px-10 py-2 text-sm w-64 focus:ring-2 focus:ring-primary-brand" 
            placeholder="Search data..." 
            type="text" 
          />
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>

        <button 
          onClick={onNewSale}
          className="bg-primary-brand text-white px-4 h-10 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95"
        >
          <ShoppingCart size={16} />
          New Sale
        </button>

        <div className="flex items-center gap-1 border-l border-slate-200 pl-4 ml-2">
          <button className="p-2 text-slate-500 hover:bg-slate-50 transition-colors rounded-full relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error-brand rounded-full border-2 border-white"></span>
          </button>
          
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 ml-2 cursor-pointer bg-slate-100 flex items-center justify-center">
            <User size={20} className="text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
