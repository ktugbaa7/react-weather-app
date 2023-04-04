import React from "react";

function Card({ item, index, getDayNames }) {
  const img = `https://openweathermap.org/img/wn/${item.icon}@2x.png`;

  return (
    <div key={index} className="">
      <div>
        <p className=""> {getDayNames(`${item.date}`)} </p>
      </div>
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="text-center">
        <p className="text-sm"> {item.description} </p>
        <p className="font-semibold">{item.temperature.toFixed(0)} °C</p>
      </div>
    </div>
  );
}

export default Card;
