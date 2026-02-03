
import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronRight, Info, X, CheckCircle2, Sparkles, Milk } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';

const ProductModal = ({ product, onClose }: { product: Product, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-green-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col md:flex-row animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-red-50 hover:text-red-500 transition-all transform hover:rotate-90"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover animate-pulse-soft" />
        </div>

        <div className="md:w-1/2 p-10 overflow-y-auto">
          <div className="mb-8">
            <span className="text-xs font-black text-white bg-green-600 px-3 py-1.5 rounded-full uppercase tracking-widest">{product.code}</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">{product.name}</h2>
            <p className="text-green-600 mt-2 font-bold text-lg">{product.volume} / Chai</p>
          </div>

          <div className="space-y-8">
            <section className="reveal active">
              <h3 className="font-bold text-gray-900 flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
                Công Dụng Chính
              </h3>
              <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-2xl">{product.benefits}</p>
            </section>

            <section className="reveal active delay-100">
              <h3 className="font-bold text-gray-900 flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"><Info className="w-5 h-5 text-amber-600" /></div>
                Cách Dùng
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {product.usage.map((u, i) => (
                  <li key={i} className="flex gap-2 text-gray-600 text-sm items-start">
                    <span className="text-green-500 font-bold">•</span> {u}
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid grid-cols-2 gap-4 reveal active delay-200">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <h4 className="font-bold text-blue-900 text-xs uppercase mb-2">Bảo Quản</h4>
                {product.storage.slice(0, 1).map((s, i) => <p key={i} className="text-[10px] text-blue-700">{s}</p>)}
              </div>
              <div className="bg-emerald-50 p-4 rounded-2xl">
                <h4 className="font-bold text-emerald-900 text-xs uppercase mb-2">Đặc Điểm</h4>
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((f, i) => (
                    <span key={i} className="text-[9px] bg-white text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-10 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-green-500/30 transform hover:-translate-y-1 active:scale-95">
            Đặt Giao Tận Nơi
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesTab = activeTab === 'all' || p.category === activeTab;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="py-24 bg-gray-50 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" /> Healthy Menu
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Thưởng Thức <span className="text-green-600">Sống Khỏe</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Hơn 30 dòng sản phẩm tinh túy, được chắt lọc từ thiên nhiên dành cho bạn.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="sticky top-24 z-40 space-y-6 mb-16 bg-gray-50/80 backdrop-blur-md py-4 reveal">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-green-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Hôm nay bạn muốn uống gì?" 
                  className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-white bg-white focus:border-green-500 outline-none transition-all shadow-xl shadow-gray-200/50 text-lg font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar scroll-smooth">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-8 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all transform active:scale-95 ${
                activeTab === 'all' 
                ? 'bg-green-600 text-white shadow-xl shadow-green-500/30 -translate-y-1' 
                : 'bg-white text-gray-500 border border-gray-100 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              Tất Cả
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all flex items-center gap-3 transform active:scale-95 ${
                  activeTab === cat.id 
                  ? 'bg-green-600 text-white shadow-xl shadow-green-500/30 -translate-y-1' 
                  : 'bg-white text-gray-500 border border-gray-100 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid with stagger animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product, idx) => (
            <div 
              key={product.id} 
              className="reveal active group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:-translate-y-2"
              style={{ transitionDelay: `${(idx % 4) * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-black text-green-700 shadow-xl tracking-widest">
                    {product.code}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-white text-green-700 py-3 rounded-xl font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    Xem Chi Tiết
                  </button>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] uppercase font-bold text-green-600 tracking-widest">
                      {CATEGORIES.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 line-clamp-1 group-hover:text-green-700 transition-colors">{product.name}</h3>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed italic">
                  "{product.description}"
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Dung tích</span>
                    <span className="text-lg font-black text-green-700">{product.volume}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="p-3 bg-green-50 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:rotate-12"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm reveal active">
            <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <Search className="w-10 h-10 text-green-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops! Không tìm thấy rồi...</h3>
            <p className="text-gray-500">Thử tìm "sữa hạt" hoặc "kombucha" xem sao bạn nhé!</p>
          </div>
        )}
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default Products;
