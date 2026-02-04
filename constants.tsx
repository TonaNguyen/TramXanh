
import React from 'react';
import { Leaf, Droplets, FlaskConical, Milk } from 'lucide-react';
import { Product } from './types';



export const CATEGORIES = [
  { id: 'nut-milk', name: 'Sữa Hạt', icon: <Leaf className="w-5 h-5" />, color: 'bg-emerald-100 text-emerald-700' },
  { id: 'kombucha', name: 'Kombucha', icon: <Droplets className="w-5 h-5" />, color: 'bg-amber-100 text-amber-700' },
  { id: 'detox', name: 'Nước Detox', icon: <FlaskConical className="w-5 h-5" />, color: 'bg-sky-100 text-sky-700' },
  { id: 'yogurt', name: 'Sữa Chua Uống', icon: <Milk className="w-5 h-5" />, color: 'bg-rose-100 text-rose-700' },
];

export const BRAND_INFO = {
  name: "TRẠM XANH",
  slogan: "Thức Uống Từ Nông Sản Việt – Lành Mỗi Ngày, Xanh Mỗi Vị",
  contact: {
    address: "22 Hiệp Bình, Hiệp Bình Chánh, Thủ Đức, TP. HCM",
    phone: "0223 223 331",
    email: "Tramxanh2026@gmail.com",
    website: "www.tramxanh.vn",
    hours: "24/24h"
  }
};

// Map real Unsplash images for categories
const IMAGE_RESOURCES = {
  'nut-milk': [
    '/images/suahat/oc-cho.jpg',
    '/images/suahat/hanh-nhan.jpg',
    '/images/suahat/hat-dieu.jpg',
     
    '/images/suahat/dau-nanh.jpg',
    '/images/suahat/macca.jpg',
    '/images/suahat/dau-xanh.jpg',
    
    '/images/suahat/yen-mach.jpg',
    '/images/suahat/gao-lut.jpg',
    '/images/suahat/hat-sen.jpg',
    '/images/suahat/me-den.jpg'
  ],
 'kombucha': [
   
    '/images/kombucha/tra-dao.jpg',
    '/images/kombucha/tra-vai.jpg',
    '/images/kombucha/tra-chanh-day.jpg',
    '/images/kombucha/dau-tay.jpg',
    '/images/kombucha/tao-xanh.jpg',
    '/images/kombucha/gung-mat-ong.jpg',
    '/images/kombucha/cam-que.jpg',
    '/images/kombucha/viet-quat.jpg',
    '/images/kombucha/tra-hoa-cuc.jpg',
    '/images/kombucha/dau-tam.jpg',
  ],
  'detox': [
    '/images/detox/chanh-mat-ong.jpg',
    '/images/detox/cam-hat-chia.jpg',
    '/images/detox/dau-chia.jpg',
    '/images/detox/tao-que-chia.jpg',
    '/images/detox/nha-dam-chia.jpg',
    '/images/detox/dua-leo-ha-chia.jpg',
    '/images/detox/chanh-day-chia.jpg',
    '/images/detox/viet-quat-chia.jpg',
    '/images/detox/gung-chia.jpg',
    '/images/detox/dua-ha-chia.jpg'
  ],
  'yogurt': [
    '/images/suachua/sua-chua-nguyeen-chat.jpg',
    '/images/suachua/sua-chua-nguyeen-chat.jpg',
    '/images/suachua/sua-chua-nguyeen-chat.jpg',
    '/images/suachua/sua-chua-nguyeen-chat.jpg',
    '/images/suachua/suachuanepcam.jpg',
    '/images/suachua/suachuamatong.jpg',
    '/images/suachua/sauchuadau.jpg',
    '/images/suachua/suachuaviet.jpg',
    '/images/suachua/suachuasoai.jpg',
    '/images/suachua/suachuacam.jpg',
    '/images/suachua/suachuacom.jpg'
  ]
};

export const PRODUCTS: Product[] = [
  // GROUP I: SỮA HẠT (SH01 - SH10)
  ...[
    { id: 'Sữa hạt óc chó', name: 'Sữa hạt óc chó', code: 'SH01' },
    { id: 'Sữa hạt hạnh nhân', name: 'Sữa hạt hạnh nhân', code: 'SH02' },
    { id: 'Sữa hạt điều', name: 'Sữa hạt điều', code: 'SH03' },
    { id: 'Sữa hạt đậu nành', name: 'Sữa hạt đậu nành', code: 'SH04' },
    { id: 'Sữa hạt macca', name: 'Sữa hạt macca', code: 'SH05' },
    { id: 'Sữa hạt đậu xanh', name: 'Sữa hạt đậu xanh', code: 'SH06' },
    { id: 'Sữa hạt yến mạch', name: 'Sữa hạt yến mạch', code: 'SH07' },
    { id: 'Sữa hạt gạo lứt', name: 'Sữa hạt gạo lứt', code: 'SH08' },
    { id: 'Sữa hạt sen', name: 'Sữa hạt sen', code: 'SH09' },
    { id: 'Sữa hạt mè đen', name: 'Sữa hạt mè đen', code: 'SH10' }
  ].map((p, i) => ({
    ...p,
    category: 'nut-milk',
    volume: '330ml',
    image: IMAGE_RESOURCES['nut-milk'][i ],
    description: 'Sữa hạt được chế biến từ các loại hạt tự nhiên, không chất bảo quản, ít đường, giàu dinh dưỡng.',
    benefits: 'Bổ sung năng lượng, tốt cho tim mạch, hỗ trợ tiêu hóa',
    usage: ['Lắc đều trước khi uống', 'Sử dụng trực tiếp, ngon hơn khi uống lạnh', 'Phù hợp cho người ăn chay, ăn kiêng'],
    storage: ['Bảo quản ngăn mát tủ lạnh 2–6°C', 'Sử dụng tốt nhất trong 24–48h'],
    ingredients: ['Hạt tự nhiên', 'Nước tinh khiết', 'Đường phèn', 'Muối biển'],
    features: ['Không chất bảo quản', 'Không hương liệu', 'Thuần thực vật']
  })),

  // GROUP II: KOMBUCHA (KB01 - KB10)
  ...[
    { id: 'kb01', name: 'Kombucha trà đào', code: 'KB01' },
    { id: 'kb02', name: 'Kombucha trà vải', code: 'KB02' },
    { id: 'kb03', name: 'Kombucha trà chanh dây', code: 'KB03' },
    { id: 'kb04', name: 'Kombucha dâu tây', code: 'KB04' },
    { id: 'kb05', name: 'Kombucha táo xanh', code: 'KB05' },
    { id: 'kb06', name: 'Kombucha gừng mật ong', code: 'KB06' },
    { id: 'kb07', name: 'Kombucha cam quế', code: 'KB07' },
    { id: 'kb08', name: 'Kombucha việt quất', code: 'KB08' },
    { id: 'kb09', name: 'Kombucha trà hoa cúc', code: 'KB09' },
    { id: 'kb10', name: 'Kombucha trà dâu tằm', code: 'KB10' }
  ].map((p, i) => ({
...p, category: 'kombucha', 
volume: '330ml', 
image: IMAGE_RESOURCES['kombucha'][i ], 
description: 'Nước trà lên men tự nhiên, giàu lợi khuẩn, hỗ trợ hệ tiêu hóa và thanh lọc cơ thể.', 
benefits: 'Thanh lọc, hỗ trợ tiêu hóa, giải khát tự nhiên',
 usage: ['Uống trực tiếp', 'Nên uống sau bữa ăn', 'Khuyên dùng 200-300ml/ngày'], 
 storage: ['Luôn bảo quản lạnh 2–6°C', 'Không lắc mạnh trước khi mở'],
  ingredients: ['Trà đen/xanh', 'Men SCOBY', 'Đường mía', 'Trái cây tươi'],
   features: ['Lên men tự nhiên', 'Gas tự nhiên', 'Giàu Probiotics']
  })),

  // GROUP III: DETOX (DT01 - DT10)
  ...[
    { id: 'dt01', name: 'Nước chanh mật ong hạt chia', code: 'DT01' },
    { id: 'dt02', name: 'Nước cam hạt chia', code: 'DT02' },
    { id: 'dt03', name: 'Nước dâu hạt chia', code: 'DT03' },
    { id: 'dt04', name: 'Nước táo quế hạt chia', code: 'DT04' },
    { id: 'dt05', name: 'Nước nha đam hạt chia', code: 'DT05' },
    { id: 'dt06', name: 'Dưa leo – bạc hà – hạt chia', code: 'DT06' },
    { id: 'dt07', name: 'Nước chanh dây hạt chia', code: 'DT07' },
    { id: 'dt08', name: 'Nước việt quất hạt chia', code: 'DT08' },
    { id: 'dt09', name: 'Nước gừng chanh hạt chia', code: 'DT09' },
    { id: 'dt10', name: 'Nước dứa bạc hà hạt chia', code: 'DT10' }
  ].map((p, i) => ({
    ...p,
    category: 'detox',
    volume: '330ml',
    image: IMAGE_RESOURCES['detox'][i ],
    description: 'Pha chế từ trái cây tươi, thảo mộc và hạt chia, giúp giải nhiệt, làm đẹp da.',
    benefits: 'Giải nhiệt, hỗ trợ giảm cân, đẹp da',
    usage: ['Lắc đều trước khi dùng', 'Dùng thay nước giải khát', 'Uống sáng hoặc giữa ngày'],
    storage: ['Bảo quản ngăn mát tủ lạnh', 'Sử dụng trong 24h sau khi mở'],
    ingredients: ['Nước tinh khiết', 'Hạt chia', 'Trái cây tươi', 'Thảo mộc'],
    features: ['Ít calo', 'Không màu thực phẩm', 'Thanh mát']
  })),

  // GROUP IV: YOGURT (SC01 - SC11)
  ...[
    { id: 'sc01', name: 'Sữa chua uống nguyên bản', code: 'SC01' },
    { id: 'sc02', name: 'Sữa chua uống ít đường', code: 'SC02' },
    { id: 'sc03', name: 'Sữa chua uống không đường', code: 'SC03' },
    { id: 'sc04', name: 'Sữa chua uống tách béo', code: 'SC04' },
    { id: 'sc05', name: 'Sữa chua uống nếp cẩm', code: 'SC05' },
    { id: 'sc07a', name: 'Sữa chua uống mật ong', code: 'SC07' },
    { id: 'sc07b', name: 'Sữa chua uống dâu', code: 'SC07' },
    { id: 'sc08', name: 'Sữa chua uống việt quất', code: 'SC08' },
    { id: 'sc09', name: 'Sữa chua uống xoài', code: 'SC09' },
    { id: 'sc10', name: 'Sữa chua uống cam', code: 'SC10' },
    { id: 'sc11', name: 'Sữa chua uống vị cốm', code: 'SC11' }
  ].map((p, i) => ({
    ...p,
    category: 'yogurt',
    volume: '250ml',
    image: IMAGE_RESOURCES['yogurt'][i ],
    description: 'Sữa lên men tự nhiên, kết hợp hương vị trái cây tươi, tốt cho hệ tiêu hóa.',
    benefits: 'Hỗ trợ tiêu hóa, tăng sức đề kháng',
    usage: ['Lắc đều trước khi uống', 'Ngon hơn khi uống lạnh', 'Phù hợp mọi lứa tuổi'],
    storage: ['Bảo quản lạnh 2–6°C', 'Không đông đá sản phẩm'],
    ingredients: ['Sữa tươi sạch', 'Men sống', 'Trái cây xay nhuyễn', 'Đường phèn'],
    features: ['Lên men tự nhiên', 'Không chất làm đặc', 'Vị chua thanh']
  }))
];
