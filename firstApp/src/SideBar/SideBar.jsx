import "./SideBar.css";
import Category from "./category/Category.jsx";
import Price from "./Price/Price.jsx";
import Colors from "./Colors/Color.jsx";
const SideBar = () => {
  return (
    <>
      <section className="sidebar">
        {/* <div className="logo-container">
          <h1>G</h1>
        </div> */}
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default SideBar;
