import { useState } from "react";

import "./App.css";
import Navigation from "./Navigation/Navigation";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";

import products from "./db/data";
import Card from "./components/card";

const id = new Date().getTime();
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ---------- input filter -------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // ---------- radio filter -------------

  const handlechange = (e) => {
    selectedCategory(e.target.value);
  };

  // ---------- buttons filter -------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(product, selected, query) {
    let filteredProducts = products;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }
    // selected filters
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    const result = filteredData(product, selected, query);

    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        // company,
        // color,
        // category,
      }) => (
        <Card
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
        />
      )
    );
  }

  return (
    <>
      <SideBar handlechange={handlechange} />
      <Navigation />
      <Recommended />
      <Product />
    </>
  );
}

export default App;
