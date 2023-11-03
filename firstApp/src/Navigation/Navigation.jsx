import "./Nav.css";
import shopperslogo from "../assets/shopperslogo.png";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav>
      <img src={shopperslogo} alt="shoppers logo" />
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your keyword"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons user-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
