import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { useState } from 'react';
import { CheckoutPage } from './pages/CheckoutPage';
import { Navigation } from './Navigation';
import { Basket } from './types';


const App = () => {
  var [basket, setBasket] = useState<Basket>({
    items: [],
    total: 0
  });

  console.log('App reloaded');


  return (
    <div>
      <Navigation basket={basket} />
      <div className="p-12">
        <Routes>
          <Route path="/" element={<ProductPage basket={basket} setBasket={setBasket} />} />
          <Route path="/checkout" element={<CheckoutPage basket={basket} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
