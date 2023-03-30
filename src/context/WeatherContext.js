import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { usePosition } from "use-position";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  const { latitude, longitude } = usePosition();
    

  const getWeatherData = async (lat, lon) => {

    //hava durumunu türkçe dilinde görmek için splitle 0. elemanı seçip bunu tr yaparız
    const lang = navigator.language.split("-")[0]; 
    
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${lang}&units=metric`
      );
      setWeatherData(data);
    } catch (error) {
      console.log(error);
      alert("veri alınırken hata oluştu.");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  

  const values = {
    weatherData,
    setWeatherData,
    getWeatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext); // componentlerde kullanmak için bu şekilde dışa aktarıldı
