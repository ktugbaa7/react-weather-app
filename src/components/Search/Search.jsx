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
    <div className="">
      <form>
        <label>Şehir seçiniz</label>
        <select value={cityName.name} onChange={handleSearch}>
          {cities?.map((item, i) => {
            return (
              <option value={item.name} key={i}> 
                {item.name}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}

export default Search;
