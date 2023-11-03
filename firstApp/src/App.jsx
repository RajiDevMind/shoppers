import { useState } from "react";

import "./App.css";
import Navigation from "./Navigation/Navigation";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";

import products from "./db/data";
import Card from "./components/card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ---------- input filter -------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // ---------- radio filter -------------

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // ---------- buttons filter -------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(product, selected, query) {
    let filteredProducts = product;

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

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <SideBar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
}

export default App;
