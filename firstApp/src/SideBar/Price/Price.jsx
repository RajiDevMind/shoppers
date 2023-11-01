import Input from "../../components/input";
import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Price;
