import { useWeather } from "../../context/WeatherContext";
import Card from "../Card/Card";

function WeatherForecast() {
  const { weatherData, dailyWeather } = useWeather();

  const getDayNames = (day) => {
    const daysOfWeek = [
      "PAZAR",
      "PAZARTESİ",
      "SALI",
      "ÇARŞAMBA",
      "PERŞEMBE",
      "CUMA",
      "CUMARTESİ",
    ];
    const date = new Date(day);
    const dayOfWeek = daysOfWeek[date.getDay()]; // bulunduğu günden itibaren alınan gün bilgisi ataması
    return dayOfWeek;
  };
  if (!weatherData) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {dailyWeather?.map(
        (item, index) =>
          item && <Card item={item} key={index} getDayNames={getDayNames} />
      )}
    </div>
  );
}

export default WeatherForecast;
