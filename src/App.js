import './App.css';
import React from "react";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <>
      <div>
        <header>
          <NavBar/>
        </header>
          <ItemListContainer/>


      </div>
    </>
  );
}