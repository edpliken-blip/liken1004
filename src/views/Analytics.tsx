import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  Download, 
  Calendar, 
  TrendingUp, 
  TrendingDown, 
  ChevronDown,
  Headphones,
  Zap,
  Watch
} from 'lucide-react';
import { cn } from '@/lib/utils';

const trendData = [
  { name: 'MON', laba: 400, biaya: 240 },
  { name: 'TUE', laba: 600, biaya: 350 },
  { name: 'WED', laba: 450, biaya: 400 },
  { name: 'THU', laba: 800, biaya: 450 },
  { name: 'FRI', laba: 900, biaya: 500 },
  { name: 'SAT', laba: 1100, biaya: 600 },
  { name: 'SUN', laba: 700, biaya: 400 },
];

const stockValueData = [
  { name: 'Tersedia', value: 75, color: '#2563eb' },
  { name: 'Habis', value: 25, color: '#f1f5f9' },
];

const bestSellers = [
  { name: 'Pro Wireless Headphones', category: 'Elektronik', sold: '1,240', revenue: 'Rp 310.000.000', status: 'Aman', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=100&auto=format&fit=crop', icon: Headphones },
  { name: 'Ultra Sprint Sneakers', category: 'Olahraga', sold: '985', revenue: 'Rp 197.000.000', status: 'Aman', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=100&auto=format&fit=crop', icon: Zap },
  { name: 'Smart Watch Gen 5', category: 'Aksesoris', sold: '752', revenue: 'Rp 150.400.000', status: 'Rendah', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=100&auto=format&fit=crop', icon: Watch },
];

export default function Analytics() {
  return (
    <div className="p-6 lg:p-8 space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-black text-on-surface tracking-tight">Financial Reports</h2>
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-blue-100">Live</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-slate-200 rounded-lg px-4 py-2 shadow-sm">
            <Calendar size={14} className="text-slate-400 mr-2" />
            <span className="text-xs font-bold text-slate-600">Oct 1, 2023 - Oct 31, 2023</span>
          </div>
          <button className="flex items-center gap-2 bg-primary-brand text-white font-bold text-xs px-6 py-2 rounded-lg shadow-lg shadow-blue-600/20 hover:opacity-90 active:scale-95 transition-all">
            <Download size={14} />
            EKSPOR LAPORAN
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Penjualan Harian', value: 'Rp 4.250.000', change: '+12.5% vs kemarin', trend: 'up' },
          { label: 'Penjualan Mingguan', value: 'Rp 28.140.000', change: '+8.2% vs minggu lalu', trend: 'up' },
          { label: 'Penjualan Bulanan', value: 'Rp 112.500.000', change: '-2.1% vs bulan lalu', trend: 'down' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-xl font-black tabular-nums text-on-surface mt-1 tracking-tight">{stat.value}</h3>
            </div>
            <div className={cn(
              "mt-4 flex items-center text-[10px] font-black uppercase tracking-widest",
              stat.trend === 'up' ? "text-green-600" : "text-red-600"
            )}>
              {stat.trend === 'up' ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-bold text-slate-800 text-sm italic serif">Tren Laba Rugi</h4>
            <div className="flex gap-4">
              <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest"><span className="w-2 h-2 bg-primary-brand rounded-full mr-2"></span> Laba</span>
              <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest"><span className="w-2 h-2 bg-slate-200 rounded-full mr-2"></span> Biaya</span>
            </div>
          </div>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="laba" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="biaya" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col h-full">
          <h4 className="font-bold text-slate-800 text-sm italic serif mb-8">Sisa Nilai Stok</h4>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stockValueData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {stockValueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Nilai</span>
                <span className="text-2xl font-black text-blue-800 tabular-nums tracking-tighter">Rp 452M</span>
              </div>
            </div>
            
            <div className="mt-8 w-full space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Stok Tersedia</span>
                <span className="font-black text-slate-900 tabular-nums tracking-tight">14,203 Unit</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Kategori Aktif</span>
                <span className="font-black text-slate-900 tabular-nums tracking-tight">42 Kategori</span>
              </div>
              <button className="w-full text-primary-brand font-black text-[10px] uppercase tracking-widest py-4 border-t border-slate-100 hover:bg-slate-50 transition-all mt-4">
                LIHAT DETAIL INVENTARIS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h4 className="font-bold text-slate-800 text-sm italic serif">Daftar Barang Terlaris</h4>
          <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1 hover:text-slate-600">
            FILTER <ChevronDown size={14} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <th className="px-8 py-4">Nama Produk</th>
                <th className="px-8 py-4">Kategori</th>
                <th className="px-8 py-4">Terjual</th>
                <th className="px-8 py-4">Pendapatan</th>
                <th className="px-8 py-4">Status Stok</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 italic serif">
              {bestSellers.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-100 shadow-sm transition-transform group-hover:scale-110">
                        <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
                      </div>
                      <span className="font-bold text-sm text-slate-900 not-italic sans">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-500">{item.category}</td>
                  <td className="px-8 py-5 font-black text-slate-900 tabular-nums not-italic sans">{item.sold}</td>
                  <td className="px-8 py-5 font-black text-slate-900 tabular-nums not-italic sans">{item.revenue}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-2 py-1 text-[10px] font-black rounded uppercase tracking-tighter not-italic sans",
                      item.status === 'Aman' ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    )}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
