import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  BarChart3, 
  AlertCircle, 
  Package, 
  ChevronRight,
  Coffee,
  Database,
  Cloud
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: '08:00', sales: 400 },
  { name: '10:00', sales: 700 },
  { name: '12:00', sales: 1200 },
  { name: '14:00', sales: 900 },
  { name: '16:00', sales: 800 },
  { name: '18:00', sales: 1100 },
  { name: '20:00', sales: 600 },
];

const StatCard = ({ title, value, change, trend, color }: any) => (
  <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-2">
      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</span>
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
        {change}
      </span>
    </div>
    <div className="text-2xl font-bold tabular-nums text-on-surface">{value}</div>
    <div className="h-1 bg-slate-50 rounded-full mt-4 overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: '70%' }}></div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Sales Today" 
          value="Rp 14.250.000" 
          change="+12.5%" 
          trend="up" 
          color="bg-primary-brand"
        />
        <StatCard 
          title="Gross Profit" 
          value="Rp 3.840.000" 
          change="+4.2%" 
          trend="up" 
          color="bg-green-600"
        />
        <StatCard 
          title="Operational Costs" 
          value="Rp 1.120.000" 
          change="-2.1%" 
          trend="down" 
          color="bg-red-600"
        />
        <StatCard 
          title="New Customers" 
          value="42" 
          change="+28" 
          trend="up" 
          color="bg-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-on-surface flex items-center gap-2">
              <BarChart3 size={18} className="text-primary-brand" />
              Real-time Revenue Performance
            </h3>
            <div className="flex bg-slate-100 p-1 rounded-lg gap-1">
              <button className="px-3 py-1 text-xs font-semibold rounded-md text-slate-600 hover:bg-white hover:shadow-sm transition-all">Weekly</button>
              <button className="px-3 py-1 text-xs font-semibold rounded-md bg-white shadow-sm text-primary-brand">Monthly</button>
            </div>
          </div>
          <div className="p-6 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b'}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#2563eb" fillOpacity={1} fill="url(#colorSales)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="p-6 bg-slate-50 grid grid-cols-3 divide-x divide-slate-200 text-center">
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Peak Hour</div>
              <div className="text-sm font-bold">12:00 - 14:00</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Average Order</div>
              <div className="text-sm font-bold">Rp 340.000</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Best Seller</div>
              <div className="text-sm font-bold">Cappuccino XL</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex-1">
            <h3 className="font-bold text-on-surface mb-6 flex items-center justify-between">
              Low Stock Alerts
              <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">4 critical</span>
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Espresso Beans 1kg', detail: '3 items left', icon: Coffee, status: 'critical' },
                { name: 'Paper Cups (S)', detail: '12 units remaining', icon: Package },
                { name: 'UHT Milk 1L', detail: '8 cartons remaining', icon: Database },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${item.status === 'critical' ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'}`}>
                  <div className={`w-10 h-10 rounded flex items-center justify-center ${item.status === 'critical' ? 'bg-red-100 text-red-600' : 'bg-white text-slate-400 border border-slate-200'}`}>
                    <item.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-on-surface">{item.name}</div>
                    <div className={`text-[10px] font-bold ${item.status === 'critical' ? 'text-red-600' : 'text-slate-500'}`}>{item.detail}</div>
                  </div>
                  <button className="text-blue-600 text-[10px] font-black hover:underline uppercase tracking-tighter">Restock</button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-center py-2 text-xs font-bold text-slate-400 hover:text-blue-600 border-t border-slate-100 flex items-center justify-center gap-1 group">
              View Full Inventory List
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-on-surface mb-4">Store Status</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">Active</span>
                </div>
                <div className="text-sm font-medium">Terminal #01 is online</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Shift Time</div>
                <div className="text-sm font-bold tabular-nums">04:32:15</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-on-surface">Recent Transactions</h3>
          <button className="text-blue-600 text-xs font-bold hover:underline">Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { id: '#TRX-98421', customer: 'John Smith', initials: 'JS', status: 'Completed', method: 'QRIS / Dana', amount: 'Rp 125.000' },
                { id: '#TRX-98420', customer: 'Amanda Lee', initials: 'AL', status: 'Completed', method: 'Cash', amount: 'Rp 48.000', secondary: true },
                { id: '#TRX-98419', customer: 'Guest User', initials: 'G', status: 'Pending', method: 'BCA Transfer', amount: 'Rp 2.100.000' },
              ].map((tx, i) => (
                <tr key={i} className={`hover:bg-slate-50 transition-colors ${tx.secondary ? 'bg-slate-50/50' : ''}`}>
                  <td className="px-6 py-4 font-bold text-xs tabular-nums text-slate-600">{tx.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">{tx.initials}</div>
                      <span className="text-sm font-medium">{tx.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter ${tx.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{tx.method}</td>
                  <td className="px-6 py-4 text-right font-bold text-sm tabular-nums text-on-surface">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
