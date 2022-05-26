import './App.css';
import React from "react";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './components/Context/CartContextProvider';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CheckoutDone from './components/Checkout/CheckoutDone';

export default function App() {

  return (
    <>  
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/promo" element={<ItemListContainer promo = {true} />}/>
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkoutdone/:orderId" element={<CheckoutDone />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}