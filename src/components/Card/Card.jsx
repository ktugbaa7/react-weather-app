import React from "react";

function Card({ item, index, getDayNames }) {
  const img = `https://openweathermap.org/img/wn/${item.icon}@2x.png`;

  return (
    <div
      key={index}
      className="md:flex md:flex-col md:justify-center md:items-center bg-transparent rounded-xl shadow-2xl shadow-current w-full md:mx-auto md:w-[95%] h-32 md:h-64 flex justify-around items-center"
    >
      <div>
        <p className="font-normal"> {getDayNames(`${item.date}`)} </p>
      </div>
      <div className="">
        <img src={img}/>
      </div>
      <div className="text-center">
        <p className="text-light"> {item.description} </p>
        <p className="text-2xl font-light">{item.temperature.toFixed(0)} °C</p>
      </div>
    </div>
  );
}

export default Card;
