import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Activity, 
  ChevronLeft, 
  ChevronRight, 
  Edit, 
  Coffee, 
  Database, 
  Cloud,
  Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';

const inventoryData = [
  { id: 1, name: 'Arabica Gold 250g', sku: 'SKU-29384', category: 'Minuman', cost: 'Rp 45.000', price: 'Rp 75.000', stock: 42, icon: Coffee },
  { id: 2, name: 'Premium Beef Patty', sku: 'SKU-29385', category: 'Makanan', cost: 'Rp 120.000', price: 'Rp 165.000', stock: 5, icon: Package, low: true },
  { id: 3, name: 'Matcha Sundae Mix', sku: 'SKU-29386', category: 'Makanan', cost: 'Rp 22.000', price: 'Rp 35.000', stock: 128, icon: Coffee },
  { id: 4, name: 'Still Water 600ml', sku: 'SKU-29387', category: 'Minuman', cost: 'Rp 3.500', price: 'Rp 8.000', stock: 542, icon: Cloud },
  { id: 5, name: 'Potato Fries (L)', sku: 'SKU-29388', category: 'Makanan', cost: 'Rp 12.000', price: 'Rp 25.000', stock: 12, icon: Database },
];

const historyData = [
  { type: 'in', label: 'Stok Masuk', item: 'Arabica Gold 250g', qty: '+50', time: 'Just Now', vendor: 'Blue Bottle Co.' },
  { type: 'out', label: 'Stok Keluar', item: 'Premium Beef Patty', qty: '-2', time: '12:45 PM', vendor: 'Sale #TX-1039' },
  { type: 'adj', label: 'Penyesuaian', item: 'Matcha Sundae Mix', qty: '-5', time: '10:20 AM', vendor: 'Expired Product' },
  { type: 'in', label: 'Stok Masuk', item: 'Still Water 600ml', qty: '+200', time: 'Yesterday', vendor: 'Warehouse B' },
];

export default function Inventory() {
  return (
    <div className="p-6 lg:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Produk</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black tabular-nums text-slate-900 tracking-tighter">1,284</h3>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Stok Menipis</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black tabular-nums text-red-600 tracking-tighter">24</h3>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full uppercase tracking-widest">Penting</span>
          </div>
        </div>
        <div className="md:col-span-2 bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center gap-4 overflow-x-auto no-scrollbar">
          <p className="text-xs font-black text-slate-900 uppercase tracking-widest whitespace-nowrap">Kategori:</p>
          <div className="flex gap-2">
            {['Semua', 'Makanan', 'Minuman', 'Elektronik', 'Pakaian'].map((cat, i) => (
              <button key={cat} className={cn(
                "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
                i === 0 ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-slate-50 border-slate-200 text-slate-500 hover:border-blue-300"
              )}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h4 className="font-bold text-on-surface">Daftar Inventaris</h4>
            <button className="text-slate-400 hover:text-slate-600"><Filter size={18} /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">Nama Produk</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Harga Beli</th>
                  <th className="px-6 py-4">Harga Jual</th>
                  <th className="px-6 py-4 text-center">Stok</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {inventoryData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-400">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 leading-tight">{item.name}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">{item.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-500">{item.category}</td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-900 tabular-nums">{item.cost}</td>
                    <td className="px-6 py-4 text-xs font-black text-blue-600 tabular-nums">{item.price}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-black tabular-nums shadow-sm border",
                        item.low ? "bg-red-50 text-red-700 border-red-100" : "bg-green-50 text-green-700 border-green-100"
                      )}>
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-300 hover:text-blue-600 transition-colors transition-all active:scale-90"><Edit size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-slate-50 flex justify-between items-center bg-slate-50/30">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 5 of 1,284 products</span>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-white hover:shadow-sm transition-all"><ChevronLeft size={16} /></button>
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-white hover:shadow-sm transition-all"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h4 className="font-bold text-on-surface">Riwayat Pergerakan</h4>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest cursor-pointer hover:underline">Lihat Semua</span>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[600px] p-6 space-y-6">
              {historyData.map((history, i) => (
                <div key={i} className="flex gap-4 items-start relative pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    history.type === 'in' ? "bg-green-100 text-green-700" : history.type === 'out' ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                  )}>
                    <Activity size={14} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-bold text-slate-900 leading-tight">{history.label}</p>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{history.time}</span>
                    </div>
                    <p className="text-xs text-slate-600"><span className={`font-bold ${history.type === 'in' ? 'text-green-600' : 'text-red-600'}`}>{history.qty}</span> {history.item}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic mt-1">{history.vendor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={24} className="text-blue-400" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Prediksi Stok</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Berdasarkan data penjualan 7 hari terakhir, <span className="text-white font-bold tracking-tight text-sm">Premium Beef Patty</span> diprediksi akan habis dalam <span className="text-blue-400 font-black">2 hari</span>. Segera lakukan restock.
              </p>
              <button className="w-full bg-blue-600 text-white text-xs font-black py-4 rounded-xl hover:bg-blue-500 transition-all shadow-lg active:scale-95 shadow-blue-600/20">
                BUAT PESANAN RESTOCK
              </button>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] text-blue-500/10 scale-150 rotate-12 group-hover:rotate-6 transition-transform">
              <Package size={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
