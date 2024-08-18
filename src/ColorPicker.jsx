import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColor(e) {
    setColor(e.target.value);
  }

  const whiteColor = color == "#000000" ? "#fff" : "#000";

  return (
    <>
      <h1>Color Picker App</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p className="color-text" style={{ color: whiteColor }}>
          Selected Color: {color.toLocaleUpperCase()}
        </p>
      </div>
      <label>Select Color: </label>
      <input type="color" value={color} onChange={handleColor} />
    </>
  );
}

export default ColorPicker;
