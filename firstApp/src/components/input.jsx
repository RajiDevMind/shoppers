const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label htmlFor="" className="sidebar-label-container">
      <input
        onChange={handleChange}
        value={value}
        type="radio"
        name={name}
        id=""
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
