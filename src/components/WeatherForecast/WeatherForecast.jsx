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
    const date = new Date(day);// o günkü gün bilgisi ve sonrası 
    const dayOfWeek = daysOfWeek[date.getDay()]; 
    return dayOfWeek;
  };
  if (!weatherData) { // veriler gelmemişse henüz loading.. göster
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-6 px-16">
      {dailyWeather?.map(
        (item, index) =>
          item && <Card item={item} key={index} getDayNames={getDayNames} />
      )}
    </div>
  );
}

export default WeatherForecast;
