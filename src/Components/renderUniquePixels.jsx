import React from "react";
import { uniqueCombinations } from "../Utilities/uniqueCombinations";

const RenderUniquePixels = ({ imageHeight, imageWidth }) => {

  const rebCombinations = uniqueCombinations(imageHeight, imageWidth);
  
  return (
    <div
      className="card-body"
      style={{ height: `${imageHeight}px`, width: `${imageWidth}px` }}
    >
      {rebCombinations.map(color =>
        <div
          key={color}
          style={{
            backgroundColor: `rgba(${color[0]}, ${color[1]}, ${color[2]})`,
            height: "1px",
            width: "1px",
            float: "right",
          }}
        />
      )}
    </div>
  );
};

export default RenderUniquePixels;