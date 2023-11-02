import "./SideBar.css";
import Category from "./category/Category.jsx";
import Price from "./Price/Price.jsx";
import Colors from "./Colors/Color.jsx";

const SideBar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        {/* <div className="logo-container">
          <h1>G</h1>
        </div> */}
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default SideBar;
