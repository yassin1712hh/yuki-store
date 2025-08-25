export interface Product {
  id: string;
  name: string;
  category: 'Adopt Me' | 'MM2' | 'Grow a Garden';
  image: string;
  description: string;
  originalPrice?: number;
  price: number;
  discount?: number;
  currency: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'zain-cash' | 'asia';
  number?: string;
  bankName?: string;
  qrCode?: string;
}

export interface OrderData {
  product: Product;
  quantity: number;
  paymentMethod: PaymentMethod;
  customerInfo: {
    senderNumber?: string;
    bankAccount?: string;
    robloxUsername: string;
    discordUsername: string;
    discordId?: string;
    screenshot: File | null;
  };
}