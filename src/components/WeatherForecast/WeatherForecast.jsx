import { useWeather } from "../../context/WeatherContext"


function WeatherForecast() {
 const { weatherData } = useWeather();
console.log(weatherData)
  return (
    <div>
      <h3>{weatherData.name}</h3>
      <p>{weatherData?.weather?.map(data => data.description).join(", ")}</p>
      <p>{weatherData?.main?.temp} derece</p>  

      <p>{new Date(weatherData.dt * 1000).toLocaleDateString()}</p>
    </div>
  )
}

export default WeatherForecast