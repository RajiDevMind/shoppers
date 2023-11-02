import Input from "../../components/input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          onChange={handleChange}
          value={50}
          title="$0 - $50"
          name="test2"
        />
        <Input
          onChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />
        <Input
          onChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />
        <Input
          onChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
