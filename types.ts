
export interface Product {
  id: string;
  name: string;
  category: string;
  code: string;
  image: string;
  description: string;
  benefits: string;
  usage: string[];
  storage: string[];
  ingredients: string[];
  features: string[];
  volume: string;
}

export interface BrandInfo {
  name: string;
  slogan: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    website: string;
    hours: string;
  };
}
