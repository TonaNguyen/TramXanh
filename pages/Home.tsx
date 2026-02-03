
import React from 'react';
import { ShieldCheck, Zap, Heart, Target, Eye, Leaf, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920" 
            alt="Nature Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-transparent to-black/20"></div>
        </div>

        {/* Decoration Icons */}
        <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
          <Leaf className="absolute top-[20%] left-[10%] text-green-400/20 w-24 h-24 animate-float" />
          <Sparkles className="absolute top-[60%] right-[10%] text-yellow-400/20 w-16 h-16 animate-pulse" />
        </div>

        <div className="relative z-20 text-center text-white px-4 max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-bold tracking-widest uppercase">Healthy Life - Healthy Taste</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
            {BRAND_INFO.name}
          </h1>
          
          <p className="text-xl md:text-3xl font-medium mb-12 text-green-300 tracking-wide max-w-3xl mx-auto leading-relaxed">
            {BRAND_INFO.slogan}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/san-pham" className="group bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-full font-black transition-all shadow-2xl hover:shadow-green-500/50 flex items-center gap-3 transform hover:-translate-y-1">
              XEM MENU NGAY <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/chinh-sach" className="bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white border border-white/30 px-10 py-5 rounded-full font-bold transition-all transform hover:-translate-y-1">
              CHÍNH SÁCH HỖ TRỢ
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 reveal">
              <div className="relative">
                <div className="absolute -inset-6 bg-green-100 rounded-[3rem] rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
                  alt="Healthy Bottles" 
                  className="relative rounded-[3rem] shadow-2xl z-10"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-10 reveal">
              <span className="text-green-600 font-black tracking-widest uppercase text-sm bg-green-50 px-4 py-2 rounded-lg">VỀ CHÚNG TÔI</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Thức uống vì <span className="text-green-600">Sức Khỏe</span> & Cộng Đồng
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed text-justify italic">
                “Trạm Xanh ra đời trong bối cảnh người Việt ngày càng quan tâm đến chế độ ăn uống khoa học, xu hướng ‘eat clean – healthy lifestyle’ và các sản phẩm có nguồn gốc tự nhiên.”
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="p-6 bg-gray-50 rounded-3xl">
                  <span className="text-4xl font-black text-green-600 block mb-2">100%</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Tự Nhiên</span>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl">
                  <span className="text-4xl font-black text-green-600 block mb-2">0%</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">Bảo Quản</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Lý Do Bạn Sẽ Yêu Trạm Xanh</h2>
            <div className="w-24 h-2 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Heart className="w-12 h-12" />, title: "Sống Lành Mạnh", desc: "Cung cấp dinh dưỡng, hỗ trợ tiêu hóa và thanh lọc cơ thể mỗi ngày." },
              { icon: <Zap className="w-12 h-12" />, title: "Sự Tiện Lợi", desc: "Đa dạng sản phẩm, giao hàng thần tốc tận tay bạn." },
              { icon: <ShieldCheck className="w-12 h-12" />, title: "Giá Trị Bền Vững", desc: "Khuyến khích tiêu dùng xanh, bảo vệ môi trường Việt Nam." },
              { icon: <Leaf className="w-12 h-12" />, title: "Nông Sản Việt", desc: "Ưu tiên nguyên liệu trong nước, hỗ trợ người nông dân Việt." }
            ].map((item, idx) => (
              <div key={idx} className="reveal group text-center p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-green-600 transition-all transform hover:-translate-y-4">
                <div className="mb-8 flex justify-center text-green-500 group-hover:text-white group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-green-100 h-full">
                <div className="w-20 h-20 bg-green-600 rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg shadow-green-500/30">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">SỨ MỆNH</h3>
                <p className="text-slate-500 text-xl leading-relaxed">
                  Trạm Xanh ra đời với sứ mệnh tạo ra những lựa chọn tốt hơn cho sức khỏe và môi trường thông qua các sản phẩm thực phẩm và đồ uống lành mạnh. Chúng tôi cam kết sử dụng nguyên liệu tự nhiên, quy trình an toàn và mô hình kinh doanh có trách nhiệm.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl h-full text-white">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-green-500 mb-10 border border-white/10">
                  <Eye className="w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black mb-8 tracking-tighter">TẦM NHÌN</h3>
                <p className="text-slate-400 text-xl leading-relaxed">
                  Trở thành thương hiệu thực phẩm và đồ uống healthy được tin dùng hàng đầu tại Việt Nam, tiên phong trong việc kết hợp đa dạng sản phẩm, đổi mới sáng tạo và phát triển bền vững, xây dựng cộng đồng sống khỏe – sống xanh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
