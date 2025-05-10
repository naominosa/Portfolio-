// components/ColorDropdown.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from './Redux/reducers/backgroundSlice';

const colors = [
  { name: "Blush Pink", value: "#F9C5D1" },
  { name: "Peach Puff", value: "#FFDAB9" },
  { name: "Lavender", value: "#E6E6FA" },
  { name: "Misty Rose", value: "#FFE4E1" },
  { name: "Mint Cream", value: "#F5FFFA" },
  { name: "Light Sky Blue", value: "#87CEFA" },
  { name: "Honeydew", value: "#F0FFF0" },
  { name: "Wheat", value: "#F5DEB3" },
  { name: "Thistle", value: "#D8BFD8" },
  { name: "Seashell", value: "#FFF5EE" },
];

function ColorDropdown() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setColor(e.target.value));
  };

  return (
    <select className="dropdown" onChange={handleChange}>
      <option value="">Select a Color</option>
      {colors.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default ColorDropdown;

