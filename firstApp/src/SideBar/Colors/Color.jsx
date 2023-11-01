import Input from "../../components/input";
import "./Color.css";

const Color = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title color-title">Color</h2>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Color;
