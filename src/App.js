import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Search from "./components/Search/Search";
import CityCard from './components/CityCard/CityCard';
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

function App() {
  return (
    <WeatherProvider>

      <Search />
      <CityCard />
      <WeatherForecast />
      
    </WeatherProvider>
  );
}

export default App;
