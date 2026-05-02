import React from 'react';
import { 
  LayoutDashboard, 
  Monitor, 
  Package, 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Lock,
  Store
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pos', label: 'POS Terminal', icon: Monitor },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'staff', label: 'Staff', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="hidden lg:flex flex-col h-screen sticky left-0 top-0 bg-slate-50 border-r border-slate-200 w-64 transition-all duration-200 ease-in-out">
      <div className="p-6 flex flex-col items-center gap-2 border-b border-slate-200">
        <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-white shadow-sm">
          <Store size={24} />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-black text-blue-600">Main Branch</h2>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Terminal #01</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center px-6 py-3 gap-3 transition-all duration-200 ease-in-out border-r-4",
                isActive 
                  ? "bg-blue-50 text-blue-700 border-blue-600 font-semibold" 
                  : "text-slate-600 hover:bg-slate-100 border-transparent"
              )}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-200 space-y-1">
        <button className="w-full flex items-center px-2 py-3 gap-3 text-slate-600 hover:bg-slate-100 transition-all rounded-lg">
          <HelpCircle size={20} />
          <span className="text-sm font-medium">Support</span>
        </button>
        <button className="w-full flex items-center px-2 py-3 gap-3 text-slate-600 hover:bg-slate-100 transition-all rounded-lg">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
        <button className="mt-4 w-full h-[48px] bg-slate-900 text-white rounded font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
          <Lock size={14} />
          Lock Station
        </button>
      </div>
    </aside>
  );
}
