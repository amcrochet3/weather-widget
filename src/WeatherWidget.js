import React, { useState, useEffect } from 'react';

const WeatherWidget = ({ apiKey, city = 'New York' }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                if (!response.ok) throw new Error('Weather data could not be fetched.');
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city, apiKey]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Weather in {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Condition: {weatherData.weather[0].main}</p>
        </div>
    );
};

export default WeatherWidget;
