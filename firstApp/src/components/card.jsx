import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [counts, setCounts] = useState(0);
  const [cart, setCarts] = useState([]);

  const addToCart = () => {
    if (counts > 0 - 1) {
      setCounts(counts + 1);
      let totalCounts = counts + 1,
        _id;
      console.log(totalCounts, title);
      const itemInCart = { count: totalCounts, title: title };
      localStorage.setItem("carts", JSON.stringify(itemInCart));
    }
  };

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> <p>{newPrice}</p>
          </div>
        </section>
        <div className="bag">
          <button className="addToCartBttn" onClick={addToCart}>
            <BsFillBagHeartFill className="bag-icon" />{" "}
            {counts > 0 && (
              <p style={{ color: "white" }}>Added {counts} to Cart</p>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
