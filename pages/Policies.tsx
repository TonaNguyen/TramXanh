
import React from 'react';
import { ShieldCheck, ArrowLeftRight, HelpCircle, Truck, UserCheck, Lock, Gift, AlertTriangle } from 'lucide-react';

const PolicySection = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string | React.ReactNode }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-green-50 p-3 rounded-xl text-green-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <div className="text-gray-600 leading-relaxed text-sm">
      {typeof content === 'string' ? <p>{content}</p> : content}
    </div>
  </div>
);

const Policies = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Chính Sách & Điều Khoản</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Tại Trạm Xanh, chúng tôi cam kết mang lại trải nghiệm tốt nhất cho khách hàng thông qua các quy tắc và chính sách minh bạch.
          </p>
        </div>

        {/* Section A: Customer Support */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-8 bg-green-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">A. CHÍNH SÁCH HỖ TRỢ KHÁCH HÀNG</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PolicySection 
              icon={<HelpCircle className="w-6 h-6" />}
              title="Tư vấn sản phẩm"
              content="Hỗ trợ tư vấn miễn phí về thành phần, công dụng, cách sử dụng sản phẩm thông qua hotline, mạng xã hội hoặc website chính thức."
            />
            <PolicySection 
              icon={<ArrowLeftRight className="w-6 h-6" />}
              title="Đổi trả sản phẩm"
              content="Khách hàng được đổi sản phẩm khi lỗi do sản xuất hoặc vận chuyển, điều kiện còn nguyên tem, nhãn và chưa qua sử dụng."
            />
            <PolicySection 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Hoàn tiền"
              content="Hoàn tiền khi không thể đổi mới hoặc không đáp ứng yêu cầu thỏa thuận sau khi xác minh lỗi thuộc về nhà cung cấp."
            />
            <PolicySection 
              icon={<Truck className="w-6 h-6" />}
              title="Hỗ trợ giao hàng"
              content="Hỗ trợ giao hàng nhanh nội thành, đảm bảo bảo quản đúng điều kiện lạnh trong suốt quá trình vận chuyển."
            />
            <PolicySection 
              icon={<UserCheck className="w-6 h-6" />}
              title="Chăm sóc sau bán"
              content="Tiếp nhận phản hồi, góp ý về chất lượng sản phẩm và dịch vụ để liên tục cải thiện trải nghiệm người dùng."
            />
            <PolicySection 
              icon={<Lock className="w-6 h-6" />}
              title="Bảo mật thông tin"
              content="Thông tin cá nhân khách hàng được bảo mật tuyệt đối, chỉ dùng cho mục đích mua bán và chăm sóc khách hàng."
            />
            <PolicySection 
              icon={<Gift className="w-6 h-6" />}
              title="Ưu đãi - Khuyến mãi"
              content="Tích điểm cho khách hàng thân thiết và tham gia chương trình tái chế chai nhựa theo quy định của Trạm Xanh."
            />
          </div>
        </div>

        {/* Section B: Terms & Disputes */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-8 bg-amber-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">B. ĐIỀU KHOẢN & GIẢI QUYẾT TRANH CHẤP</h2>
          </div>

          <div className="space-y-6">
            {[
              { id: 1, title: "Điều khoản chung", content: "Khách hàng khi mua và sử dụng sản phẩm được xem là đã đồng ý với các điều khoản công bố." },
              { id: 2, title: "Giao sai hoặc thiếu số lượng", content: "Thông báo trong 24 giờ kể từ khi nhận. Chúng tôi xác minh và giao bổ sung hoặc đổi đúng đơn hàng." },
              { id: 3, title: "Sản phẩm kém chất lượng", content: "Cung cấp hình ảnh/video lỗi. Trạm Xanh kiểm tra, xác nhận và đổi mới hoặc hoàn tiền." },
              { id: 4, title: "Không đúng mẫu mã, hương vị", content: "Tiếp nhận phản hồi và đổi sản phẩm đúng mẫu hoặc hoàn tiền theo nhu cầu." },
              { id: 5, title: "Hư hỏng do vận chuyển", content: "Trạm Xanh chịu trách nhiệm đổi sản phẩm mới và phối hợp với đơn vị vận chuyển để khắc phục." },
              { id: 6, title: "Hủy đơn hàng", content: "Cần thông báo trước khi giao. Đơn đã giao thành công không hỗ trợ hủy trừ lỗi từ phía Trạm Xanh." }
            ].map(item => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border-l-4 border-amber-500 shadow-sm flex gap-4">
                <div className="bg-amber-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-amber-700 shrink-0">
                  {item.id}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}

            <div className="mt-12 bg-green-900 text-white p-10 rounded-3xl relative overflow-hidden">
              <AlertTriangle className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5" />
              <h3 className="text-2xl font-bold mb-6">Quy Trình Giải Quyết Tranh Chấp</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                {[
                  "Tiếp nhận khiếu nại qua hotline/email",
                  "Xác minh thông tin & nguyên nhân",
                  "Đề xuất phương án xử lý (đổi/hoàn)",
                  "Thống nhất & thực hiện giải pháp",
                  "Kết thúc & lưu hồ sơ khiếu nại"
                ].map((step, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-xs text-center border border-white/20">
                    <span className="block font-bold text-green-400 mb-2">Bước {i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-green-200 text-sm italic">
                * Nguyên tắc: Mọi tranh chấp được ưu tiên giải quyết trên tinh thần thiện chí, hợp tác theo pháp luật Việt Nam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
