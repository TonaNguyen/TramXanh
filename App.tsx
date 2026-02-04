
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Clock, Globe, Leaf } from 'lucide-react';
import { BRAND_INFO } from './constants';
import Home from './pages/Home';
import Products from './pages/Products';
import Policies from './pages/Policies';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Sản Phẩm', path: '/san-pham' },  
    { name: 'Chính Sách', path: '/chinh-sach' },
  ];

  // Placeholder for the brand logo - User can replace this URL with their actual logo file path
  const logoUrl = "https://i.ibb.co/Lhb8tqC/logo-tram-xanh.png"; // Giả định đây là link ảnh bạn cung cấp

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300"></div>
                {/* 
                  Thay src bằng đường dẫn file logo của bạn. 
                  Ví dụ: src="/path/to/your/logo.jpg" 
                */}
                <img 
                  src="/images/logo.png" 
                  alt="Trạm Xanh Logo" 
                  className="relative z-10 w-full h-full rounded-full object-cover p-1 border-2 border-green-600"
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-black tracking-tighter transition-colors leading-none ${
                  scrolled || !isHome ? 'text-green-700' : 'text-white'
                }`}>TRẠM XANH</span>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                  scrolled || !isHome ? 'text-green-600/70' : 'text-green-300'
                }`}>Hữu cơ & Tái chế</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-all hover:scale-105 hover:text-green-500 ${
                  location.pathname === link.path 
                    ? 'text-green-600' 
                    : scrolled || !isHome ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${BRAND_INFO.contact.phone}`}
              className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-all shadow-xl hover:shadow-green-500/40 active:scale-95"
            >
              Hotline: {BRAND_INFO.contact.phone}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || !isHome ? 'text-gray-600' : 'text-white'}`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-[60] transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
               <img 
                  src="/imges/logo.png" 
                  alt="Logo" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-green-600"
                />
               <span className="text-2xl font-black text-green-700 tracking-tighter">TRẠM XANH</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="h-8 w-8 text-gray-600" /></button>
          </div>
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${BRAND_INFO.contact.phone}`}
              className="block w-full bg-green-600 text-white text-center py-4 rounded-2xl font-bold text-lg"
            >
              Gọi Hotline
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-1 rounded-full w-14 h-14 shadow-lg overflow-hidden border-2 border-green-500">
                <img 
                  src="/images/logo.png" 
                  alt="Footer Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter leading-none">TRẠM XANH</span>
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest mt-1">Hữu cơ & Tái chế</span>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed italic border-l-4 border-green-500 pl-6">
              "{BRAND_INFO.slogan}"
            </p>


            
          </div>

          <div>
            <h3 className="text-xl font-bold mb-10 text-green-500 flex items-center gap-2">
              <div className="w-6 h-1 bg-green-500 rounded-full"></div> LIÊN HỆ
            </h3>
            <ul className="space-y-6 text-slate-300">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-6 h-6 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">{BRAND_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-6 h-6 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">{BRAND_INFO.contact.phone}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">{BRAND_INFO.contact.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-10 text-green-500 flex items-center gap-2">
              <div className="w-6 h-1 bg-green-500 rounded-full"></div> THEO DÕI
            </h3>
            <div className="flex gap-4">
              {[Facebook, Instagram, Globe].map((Icon, i) => (
                <a key={i} href="#" className="bg-slate-800 p-4 rounded-2xl hover:bg-green-600 hover:text-white transition-all transform hover:-translate-y-2">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-slate-800 text-slate-500 text-sm">
          © 2024 TRẠM XANH - LÀNH MỖI NGÀY, XANH MỖI VỊ
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      
      const fallbackTimer = setTimeout(() => {
         document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
      }, 1500);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/chinh-sach" element={<Policies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default function RootApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
