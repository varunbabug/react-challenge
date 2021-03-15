import React from 'react';
import { range } from './../Utilities/rangeofNumbers';
import { getRandomInt } from './../Utilities/getRandomInt';

const RenderUniquePixels = ({imageHeight, imageWidth}) => {
    let red = 0;
    let blue = 0;
    let green = 0; 

    const rangeOfPixels = range(imageHeight * imageWidth);

    return ( 
        <div
        className="card-body"
        style={{ height: `${imageHeight}px`, width: `${imageWidth}px` }}
        >
        {rangeOfPixels.map((element) => {
            red = getRandomInt(0, 256);
            green = getRandomInt(0, 256);
            blue = getRandomInt(0, 256);

            return (
            <div
                key={element}
                style={{
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                height: "1px",
                width: "1px",
                float: "right",
                }}
            />
            );
        })}
        </div>
    );
}
 
export default RenderUniquePixels;