import './App.css';
import React from "react";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>  
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />

        
          </Routes>
        </BrowserRouter>



    </>
  );
}