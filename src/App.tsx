import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { NotificationProvider } from './context/NotificationContext';
import Layout from './components/Layout';
import NotificationSystem from './components/NotificationSystem';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import SupportPage from './pages/SupportPage';
import { useNotification } from './context/NotificationContext';

const AppContent: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </Layout>
      </Router>
      <NotificationSystem 
        notifications={notifications} 
        onRemove={removeNotification} 
      />
    </>
  );
};

function App() {
  return (
    <NotificationProvider>
      <WishlistProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </WishlistProvider>
    </NotificationProvider>
  );
}

export default App;