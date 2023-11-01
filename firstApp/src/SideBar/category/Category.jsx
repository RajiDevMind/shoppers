import Input from "../../components/input";
import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Category;
