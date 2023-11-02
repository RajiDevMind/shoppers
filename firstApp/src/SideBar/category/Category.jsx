import Input from "../../components/input";
import "./Category.css";

const Category = ({ handleChange }) => {
  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          onChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          onChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          onChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
