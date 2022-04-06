
import React from "react";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <>
      <div>
        <header>
          <NavBar/>
        </header>
          <ItemListContainer name="Martin" />


      </div>
    </>
  );
}