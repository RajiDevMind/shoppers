import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideBar />
      <Navigation />
      <Recommended />
      <Product />
    </>
  );
}

export default App;
