import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Trash2, 
  Plus, 
  Minus, 
  CreditCard, 
  Printer, 
  X, 
  Pause,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const products = [
  { id: 1, name: 'Artisan Dark Chocolate', sku: 'SKU-9021', price: 12.50, img: 'https://images.unsplash.com/photo-1549007994-cb92ca71450a?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Organic Espresso Roast', sku: 'SKU-4412', price: 18.00, img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Stainless Steel Bottle', sku: 'SKU-1102', price: 24.99, img: 'https://images.unsplash.com/photo-1556942154-0062402d4b3d?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Sport Trainers', sku: 'SKU-3329', price: 89.00, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop' },
  { id: 5, name: 'Wireless Headphones', sku: 'SKU-7751', price: 299.00, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop' },
  { id: 6, name: 'Leather Watch', sku: 'SKU-8820', price: 145.00, img: 'https://images.unsplash.com/photo-1524592091214-8c97afad3d3e?q=80&w=400&auto=format&fit=crop' },
  { id: 7, name: 'Mint Film Camera', sku: 'SKU-2022', price: 79.99, img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=400&auto=format&fit=crop' },
];

export default function POSTerminal() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.qty + delta);
        return newQty === 0 ? null : { ...item, qty: newQty };
      }
      return item;
    }).filter(Boolean));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden animate-in slide-in-from-right duration-500">
      <div className="flex-1 flex flex-col min-w-0 border-r border-slate-200">
        <div className="p-4 bg-white border-b border-slate-200 flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              className="w-full pl-12 pr-4 h-12 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
              placeholder="Scan barcode or search items..." 
              type="text" 
            />
          </div>
          <button className="h-12 px-6 bg-slate-100 rounded-xl flex items-center gap-2 font-bold text-sm text-slate-700 hover:bg-slate-200 transition-colors">
            Categories
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-slate-50/50">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <button 
                key={product.id}
                onClick={() => addToCart(product)}
                className="flex flex-col text-left bg-white border border-slate-100 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-lg transition-all active:scale-[0.98] group"
              >
                <div className="aspect-square w-full bg-slate-100 overflow-hidden relative">
                  <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src={product.img} alt={product.name} />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors" />
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <span className="text-xs font-bold text-on-surface line-clamp-2 leading-tight">{product.name}</span>
                  <div className="mt-2 flex justify-between items-end">
                    <span className="text-[10px] text-slate-400 font-bold">{product.sku}</span>
                    <span className="font-bold tabular-nums text-blue-600 text-sm">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </button>
            ))}
            <button className="flex flex-col text-left bg-white border border-slate-100 border-dashed rounded-xl overflow-hidden hover:border-blue-600 hover:bg-blue-50 transition-all group p-4 items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:border-blue-200">
                <Plus size={24} />
              </div>
              <span className="font-bold text-sm text-slate-400 group-hover:text-blue-600">Custom Item</span>
            </button>
          </div>
        </div>

        <div className="bg-slate-100 border-t border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-700 text-xs uppercase tracking-widest">Quick Quantity Override</h3>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Select item then press key</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[1, 2, 3, 4, 5, 10, 20].map(val => (
              <button key={val} className="flex-none w-16 h-16 bg-white border border-slate-200 rounded-xl font-bold flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                {val}
              </button>
            ))}
            <button className="flex-none px-6 h-16 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center hover:opacity-90 transition-all shadow-sm">
              Custom
            </button>
          </div>
        </div>
      </div>

      <aside className="w-full md:w-[400px] flex flex-col bg-white border-l border-slate-200 shadow-xl z-10">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                <User size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Customer</p>
                <h4 className="font-bold text-slate-900 leading-tight">Walk-in Customer</h4>
              </div>
            </div>
            <button className="text-blue-600 font-bold text-xs hover:underline uppercase tracking-widest">Change</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <th className="px-6 py-4">Item</th>
                <th className="px-2 py-4 text-center">Qty</th>
                <th className="px-6 py-4 text-right">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {cart.map((item, i) => (
                <tr key={i} className="group hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-sm leading-tight">{item.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">Unit: ${item.price.toFixed(2)}</p>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Minus size={12} /></button>
                      <span className="font-bold tabular-nums text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Plus size={12} /></button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-bold tabular-nums text-sm">${(item.price * item.qty).toFixed(2)}</span>
                  </td>
                </tr>
              ))}
              {cart.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-20 text-center text-slate-300 italic opacity-50">
                    <ShoppingCart size={48} className="mx-auto mb-4" />
                    <p className="text-sm font-bold">Add some items to start order</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-white border-t-2 border-slate-100 p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center text-slate-500 font-medium text-sm">
              <span>Subtotal</span>
              <span className="font-bold tabular-nums">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-500 font-medium text-sm">
              <span>Tax (10%)</span>
              <span className="font-bold tabular-nums">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-red-600 font-medium text-sm">
              <span>Discount</span>
              <span className="font-bold tabular-nums">-$0.00</span>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-end">
              <div>
                <h2 className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Total Payable</h2>
                <span className="text-3xl font-black text-blue-600 tabular-nums">${total.toFixed(2)}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 font-bold block">Items: {cart.length}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="h-12 border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Pause size={18} />
              Hold
            </button>
            <button onClick={() => setCart([])} className="h-12 border-2 border-red-600 rounded-xl font-bold text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
              <X size={18} />
              Void
            </button>
            <button className="col-span-2 h-16 bg-blue-600 text-white rounded-xl font-black text-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 hover:scale-[1.01] active:scale-[0.98] transition-all">
              <CreditCard size={24} />
              Process Payment
            </button>
            <button className="col-span-2 h-10 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
              <Printer size={16} />
              Print Last Receipt
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
