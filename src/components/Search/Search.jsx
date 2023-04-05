import React from "react";
import { useWeather } from "../../context/WeatherContext";

function Search() {
  
  // context api ile gelen stateler
  const { cityName, cities, setCityName } = useWeather();

  // select kısmında kullanılanacak şehir seçme metodu
  function handleSearch(e) {
    cities.filter((item) => {
      if (item.name === e.target.value) {
        setCityName(item);
      }
      return item;
    });
  }
  return (
    
      <form className="flex flex-col justify-center items-center py-12">
        <h1 className=" text-6xl mb-14 font-bold text-fuchsia-950">Weather App</h1>
        <label className=" text-2xl mb-4">Şehir seçiniz</label>
        <select className="w-80 h-12 px-2 font-medium rounded-md shadow-xl border-2 border-violet-500" value={cityName.name} onChange={handleSearch}>
          {cities?.map((item, i) => {
            return (
              <option className="text-fuchsia-950" value={item.name} key={i}> 
                {item.name}
              </option>
            );
          })}
        </select>
      </form>
    
  );
}

export default Search;
