import { PaymentMethod } from '../types';

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'zain-cash',
    name: 'Zain Cash',
    type: 'zain-cash',
    number: '07713000663',
    qrCode: '/image copy.png'
  },
  {
    id: 'asia',
    name: 'Asia Hawala',
    type: 'asia',
    number: '7737006018',
    bankName: 'Asia Hawala Exchange'
  }
];