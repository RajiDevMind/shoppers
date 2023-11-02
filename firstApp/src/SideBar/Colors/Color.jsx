import Input from "../../components/input";
import "./Color.css";

const Color = ({ handleChange }) => {
  return (
    <div className="mls">
      <h2 className="sidebar-title color-title">Color</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="Black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <label htmlFor="" className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="White"
            color=""
            name="test1"
          />
          <span
            className="checkmark"
            style={{ backgroundColor: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </div>
  );
};

export default Color;
