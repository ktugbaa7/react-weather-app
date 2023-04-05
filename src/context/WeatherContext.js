import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import cities from "../components/citiesdata/cities_data.json";

const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {

  const [cityName, setCityName] = useState(
    cities.find((item) => item.name === "İstanbul") // istanbul seçili olarak getirilir
  );
   
  const [weatherData, setWeatherData] = useState([]);
  const [daysData, setDaysData] = useState();


  const dailyWeather = daysData?.list?.map((day, index) => {
    if (index % 7 !== 0) 
    return null 
    return {
        date: day.dt_txt.slice(0, 10),
        temperature: day.main.temp, // sıcaklık verisi
        description: day.weather[0].description, // hava bilgisi
        icon: day.weather[0].icon // durum icon
    }
  })

  const values = {
    weatherData,
    cityName,
    cities,
    dailyWeather,
    setCityName,
  };

  useEffect(() => {
    const getCity = async (cityName) => {
      try{
        const { data:weater } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=tr&units=metric`);
      setWeatherData(weater);
      const { data:forecast } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=tr&units=metric`);
      setDaysData(forecast);
      }catch(error) {
        console.log(error)
        alert("hata")
      }   
    }; 
    cityName && getCity(cityName);
  },[cityName]);

console.log(weatherData);

 
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext); // componentlerde kullanmak için bu şekilde dışa aktarıldı
