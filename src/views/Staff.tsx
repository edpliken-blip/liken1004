import React from 'react';
import { 
  UserPlus, 
  Download, 
  Search, 
  Filter, 
  Edit, 
  RotateCcw, 
  Shield, 
  ArrowRight,
  BadgeCheck,
  MoreVertical,
  Activity,
  User,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

const users = [
  { id: 1, name: 'Alex Rivera', email: 'arivera@swiftpos.com', role: 'ADMIN', status: 'Active', lastLogin: '2m ago', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop' },
  { id: 2, name: 'Sarah Chen', email: 'schen@swiftpos.com', role: 'CASHIER', status: 'Active', lastLogin: '1h 14m ago', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop' },
  { id: 3, name: 'David Miller', email: 'dmiller@swiftpos.com', role: 'CASHIER', status: 'Offline', lastLogin: 'Aug 12, 18:22', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop' },
  { id: 4, name: 'Jordan Smith', email: 'jsmith@swiftpos.com', role: 'CASHIER', status: 'Suspended', lastLogin: 'Yesterday', initials: 'JS' },
];

export default function Staff() {
  return (
    <div className="p-6 lg:p-8 space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-on-surface tracking-tight">User Management</h2>
          <p className="text-slate-500 text-sm font-medium italic serif mt-1">Manage branch staff, roles, and system permissions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg shadow-sm hover:bg-slate-50 transition-all">
            <Download size={14} />
            EXPORT LIST
          </button>
          <button className="flex items-center gap-2 bg-primary-brand text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg shadow-lg shadow-blue-600/20 hover:opacity-90 active:scale-95 transition-all">
            <UserPlus size={14} />
            ADD NEW USER
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Staff', value: '12', icon: User, color: 'bg-blue-50 text-blue-600' },
          { label: 'Active Now', value: '4', icon: Activity, color: 'bg-green-50 text-green-600' },
          { label: 'Administrators', value: '3', icon: BadgeCheck, color: 'bg-amber-50 text-amber-600' },
          { label: 'Security Score', value: '98%', icon: Shield, color: 'bg-rose-50 text-rose-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-300 transition-colors">
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", stat.color)}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-900 tabular-nums tracking-tighter">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 text-sm italic serif">User Directory</h3>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input className="bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-4 py-1.5 text-xs focus:ring-1 focus:ring-blue-600 outline-none w-48" placeholder="Search..." />
              </div>
              <button className="text-slate-400 hover:text-blue-600 transition-colors"><Filter size={18} /></button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                  <th className="px-8 py-4">Staff Member</th>
                  <th className="px-8 py-4 text-center">Role</th>
                  <th className="px-8 py-4 text-center">Status</th>
                  <th className="px-8 py-4 text-center">Last Login</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 italic serif">
                {users.map((staff, i) => (
                  <tr key={staff.id} className={cn("hover:bg-slate-50/50 transition-colors group", i % 2 !== 0 && "bg-slate-50/20")}>
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100">
                          {staff.img ? (
                            <img className="w-full h-full object-cover" src={staff.img} alt={staff.name} />
                          ) : (
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 not-italic sans">{staff.initials}</div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 not-italic sans leading-tight">{staff.name}</p>
                          <p className="text-[10px] text-slate-400 not-italic sans font-medium">{staff.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-center">
                      <span className={cn(
                        "px-2 py-1 text-[9px] font-black rounded uppercase tracking-tighter not-italic sans",
                        staff.role === 'ADMIN' ? "bg-blue-50 text-blue-600 border border-blue-100" : "bg-slate-100 text-slate-600"
                      )}>
                        {staff.role}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-center">
                      <div className="flex items-center justify-center gap-1.5 not-italic sans">
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          staff.status === 'Active' ? "bg-green-500" : staff.status === 'Offline' ? "bg-slate-300" : "bg-red-500"
                        )}></span>
                        <span className={cn(
                          "text-[10px] font-bold",
                          staff.status === 'Active' ? "text-green-600" : staff.status === 'Offline' ? "text-slate-400 italic" : "text-red-500"
                        )}>{staff.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-center text-[10px] tabular-nums font-bold text-slate-400 not-italic sans">{staff.lastLogin}</td>
                    <td className="px-8 py-4 text-right">
                      <button className="p-1 px-2 text-slate-300 hover:text-blue-600 group-hover:scale-110 transition-all"><Edit size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-slate-50 flex justify-between items-center bg-slate-50/30">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 1-4 of 12 users</span>
            <div className="flex bg-white border border-slate-200 rounded-lg p-1 gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-primary-brand text-white shadow-md text-xs font-black">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-50 text-slate-600 text-xs font-bold">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-50 text-slate-600 text-xs font-bold">3</button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 space-y-8">
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <UserPlus size={18} />
              </div>
              <h3 className="text-lg font-black text-on-surface tracking-tight sm:italic serif">Add New Staff</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Full Name</label>
                <input className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50/30 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-medium" placeholder="e.g. John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Email Address</label>
                <input className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50/30 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-medium" placeholder="john@example.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Assign Role</label>
                  <select className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50/30 focus:border-blue-600 focus:bg-white transition-all text-sm font-bold appearance-none">
                    <option>Cashier</option>
                    <option>Manager</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">Status</label>
                  <select className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50/30 focus:border-blue-600 focus:bg-white transition-all text-sm font-bold appearance-none">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 p-4 bg-blue-50/50 rounded-xl text-blue-600 mb-6 font-bold sm:italic serif text-xs leading-tight">
                  <Info size={16} className="shrink-0" />
                  User will receive an invite to set their password.
                </div>
                <button className="w-full h-14 bg-primary-brand text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-blue-600/20">
                  CONFIRM & CREATE USER
                </button>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <h4 className="font-bold flex items-center gap-3 mb-3 text-sm italic serif tracking-tight">
                <Shield size={20} className="text-blue-400" />
                Security Integrity
              </h4>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                All staff actions are logged via encrypted audit trails. User access is protected by SOC2-compliant identity protocols.
              </p>
              <button className="text-[10px] font-black text-blue-400 hover:text-white flex items-center gap-2 transition-colors uppercase tracking-widest group/btn">
                VIEW ACCESS LOGS
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 scale-150 rotate-[-15deg] group-hover:rotate-0 transition-transform">
              <Shield size={160} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
