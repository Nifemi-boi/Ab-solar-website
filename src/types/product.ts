export interface Product {
  id: string;
  name: string;
  category: 'solar-panels' | 'inverters' | 'batteries' | 'charge-controllers' | 'surge-breakers' | 'accessories';
  price: number;
  capacity?: string;
  description: string;
  image: string;
  rating: number;
  inStock: boolean;
  specs?: Record<string, string>;
}

export interface CartItem extends Product {
  quantity: number;
}
