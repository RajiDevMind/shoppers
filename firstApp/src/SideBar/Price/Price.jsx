import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="text2" id="" />
          <span className="checkmark"></span>All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="text2" id="" />
          <span className="checkmark"></span>$0 - $50
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="text2" id="" />
          <span className="checkmark"></span>$50 - $100
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="text2" id="" />
          <span className="checkmark"></span>$100 - $150
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="text2" id="" />
          <span className="checkmark"></span>$150 - $200
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="text2" id="" />
          <span className="checkmark"></span>$250 - $300
        </label>
      </div>
    </div>
  );
};

export default Price;
