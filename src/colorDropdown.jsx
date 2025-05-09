// components/ColorDropdown.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from './Redux/reducers/backgroundSlice';

const colors = [
    { name: "Red Orange", value: "#FF5733" },
    { name: "Lime Green", value: "#33FF57" },
    { name: "Royal Blue", value: "#3357FF" },
    { name: "Khaki", value: "#F0E68C" },
    { name: "Blue Violet", value: "#8A2BE2" },
    { name: "Light Sea Green", value: "#20B2AA" },
    { name: "Deep Pink", value: "#FF1493" },
    { name: "Chartreuse", value: "#7FFF00" },
    { name: "Gold", value: "#FFD700" },
    { name: "Turquoise", value: "#40E0D0" },
    { name: "Crimson", value: "#DC143C" },
    { name: "Dark Turquoise", value: "#00CED1" },
    { name: "Hot Pink", value: "#FF69B4" },
    { name: "Medium Orchid", value: "#BA55D3" },
    { name: "Medium Sea Green", value: "#3CB371" },
    { name: "Indian Red", value: "#CD5C5C" },
    { name: "Light Pink", value: "#FFB6C1" },
    { name: "Slate Blue", value: "#6A5ACD" },
    { name: "Spring Green", value: "#00FA9A" },
    { name: "Orange", value: "#FFA500" },
    { name: "Light Steel Blue", value: "#B0C4DE" },
    { name: "Goldenrod", value: "#DAA520" },
    { name: "Cadet Blue", value: "#5F9EA0" },
    { name: "Chocolate", value: "#D2691E" },
    { name: "Yellow Green", value: "#9ACD32" },
    { name: "Tomato", value: "#FF6347" },
    { name: "Sea Green", value: "#2E8B57" },
    { name: "Dark Magenta", value: "#8B008B" },
    { name: "Medium Slate Blue", value: "#7B68EE" },
    { name: "Medium Aquamarine", value: "#66CDAA" },
    { name: "Coral", value: "#FF7F50" },
    { name: "Green Yellow", value: "#ADFF2F" },
    { name: "Cornflower Blue", value: "#6495ED" },
    { name: "Thistle", value: "#D8BFD8" },
    { name: "Dark Olive Green", value: "#556B2F" },
    { name: "Orange Red", value: "#FF4500" },
    { name: "Fire Brick", value: "#B22222" },
    { name: "Steel Blue", value: "#4682B4" },
    { name: "Medium Violet Red", value: "#C71585" },
    { name: "Sky Blue", value: "#87CEEB" },
    { name: "Sienna", value: "#A0522D" },
    { name: "Spring Green (Bright)", value: "#00FF7F" },
    { name: "Olive Drab", value: "#6B8E23" },
    { name: "Crimson (Repeated)", value: "#DC143C" },
    { name: "Dark Salmon", value: "#E9967A" },
    { name: "Dark Sea Green", value: "#8FBC8F" },
    { name: "Dark Orchid", value: "#9932CC" },
    { name: "Dark Khaki", value: "#BDB76B" },
    { name: "Deep Sky Blue", value: "#00BFFF" },
    { name: "Sandy Brown", value: "#F4A460" }
  ];
  

function ColorDropdown() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setColor(e.target.value));
  };

  return (
    <select className='dropdown' onChange={(e) => dispatch(setColor(e.target.value))}>
  <option value="">Select a Background Color</option>
  {colors.map((color) => (
    <option key={color.value} value={color.value}>
      {color.name}
    </option>
  ))}
</select>
  )
}

export default ColorDropdown;
