import React from 'react';
import { Lock, User, Key, Eye, LogIn, ShieldCheck, PieChart, RefreshCcw } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex w-full bg-slate-50 font-sans">
      <main className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-[440px] flex flex-col items-center">
          <div className="mb-12 text-center animate-in zoom-in duration-700">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center rounded-2xl shadow-xl shadow-blue-600/30 text-white">
                <Lock size={32} />
              </div>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Precision POS</h1>
            <p className="text-slate-500 font-medium mt-2 italic serif">Sistem Manajemen Point of Sale Aman</p>
          </div>

          <div className="w-full bg-white border border-slate-200 p-10 rounded-2xl shadow-2xl animate-in slide-in-from-bottom duration-500 delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Username</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600 text-slate-400">
                    <User size={18} />
                  </div>
                  <input 
                    className="block w-full pl-14 pr-4 h-14 border border-slate-200 bg-slate-50/30 rounded-xl font-bold text-sm tracking-tight focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-slate-300"
                    placeholder="Masukkan username anda"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
                  <button type="button" className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors">Lupa Password?</button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600 text-slate-400">
                    <Key size={18} />
                  </div>
                  <input 
                    type="password"
                    className="block w-full pl-14 pr-12 h-14 border border-slate-200 bg-slate-50/30 rounded-xl font-bold text-sm tracking-tight focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-slate-300"
                    placeholder="••••••••"
                    required
                  />
                  <button type="button" className="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-300 hover:text-slate-600 transition-colors">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full h-16 bg-blue-600 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 rounded-xl shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Masuk ke Sistem
                <LogIn size={18} />
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3 text-emerald-600">
                <ShieldCheck size={20} />
                <p className="text-[9px] font-black uppercase tracking-[0.2em]">Enkripsi AES-256 Bit Diaktifkan</p>
              </div>
            </div>
          </div>

          <footer className="mt-12 text-center animate-in fade-in duration-1000 delay-500">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              © 2024 Precision POS Enterprise. v4.2.1-stable
            </p>
            <div className="flex justify-center gap-6 mt-4">
              {['Syarat & Ketentuan', 'Kebijakan Privasi'].map(link => (
                <button key={link} className="text-[10px] font-black text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest">{link}</button>
              ))}
            </div>
          </footer>
        </div>
      </main>

      <div className="hidden xl:flex w-1/3 bg-blue-600 relative overflow-hidden flex-col justify-center p-20 text-white">
        <div className="relative z-10 space-y-8 animate-in slide-in-from-right duration-700">
          <h2 className="text-5xl font-black tracking-tighter leading-[0.9]">Efisiensi Tanpa Batas di Ujung Jari.</h2>
          <p className="text-lg text-blue-100 font-medium max-w-[400px]">
            Keamanan data transaksi anda adalah prioritas kami. Selamat datang kembali di panel kendali Precision POS.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 group hover:bg-white/20 transition-all cursor-default shadow-lg">
              <PieChart size={24} className="text-blue-300 mb-4 transition-transform group-hover:scale-110" />
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">Real-time</div>
              <div className="text-sm font-black uppercase tracking-tight">Analytics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 group hover:bg-white/20 transition-all cursor-default shadow-lg">
              <RefreshCcw size={24} className="text-blue-300 mb-4 transition-transform group-hover:scale-110" />
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">Instant</div>
              <div className="text-sm font-black uppercase tracking-tight">Stock Sync</div>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute -right-20 -bottom-20 opacity-10">
          <div className="w-[500px] h-[500px] border-[60px] border-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
