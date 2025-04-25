import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { useState } from 'react';
import { CheckoutPage } from './pages/CheckoutPage';
import { Navigation } from './Navigation';
import { Basket } from './types';


const App = () => {



  return (
    <div>

      <Navigation />
      <div className="p-12">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
1