import logo from './logo.svg';
import './App.css';
import WeatherWidget from './WeatherWidget';

function App() {
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  return (
    <div className="App">
      <WeatherWidget apiKey={API_KEY} city="Los Angeles" />
    </div>
  );
}

export default App;
