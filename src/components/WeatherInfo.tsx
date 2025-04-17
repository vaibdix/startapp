'use client';
import { useEffect, useState } from 'react';

interface WeatherData {
    current: {
        temperature_2m: number;
        weather_code: number;
        time: string;
    };
}

export default function WeatherInfo() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const fetchWeather = async () => {
            const latitude = 18.5196;
            const longitude = 73.8553;

            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
                );
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error('Error fetching weather:', error);
            }
        };

        fetchWeather();
        
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000); // Update every second for the clock

        return () => clearInterval(timer);
    }, []);

    const getWeatherDescription = (code: number) => {
        const weatherCodes: { [key: number]: string } = {
            0: 'Clear sky',
            1: 'Mainly clear',
            2: 'Partly cloudy',
            3: 'Overcast',
            45: 'Foggy',
            48: 'Depositing rime fog',
            51: 'Light drizzle',
            53: 'Moderate drizzle',
            55: 'Dense drizzle',
            61: 'Slight rain',
            63: 'Moderate rain',
            65: 'Heavy rain',
        };
        return weatherCodes[code] || 'Unknown';
    };

    return (
        <div className="bg-black text-white w-full p-4">
            <div className="flex justify-between items-start">
                <div>
                    <div className="text-6xl font-light">
                        {date.toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit',
                            hour12: true 
                        })}
                    </div>
                    <div className="text-gray-400 mt-1">
                        {date.toLocaleDateString('en-US', { 
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                </div>
                {weather && (
                    <div className="text-right">
                        <div className="text-4xl font-light">
                            {Math.round(weather.current.temperature_2m)}°C
                        </div>
                        <div className="text-gray-400 text-lg">
                            {getWeatherDescription(weather.current.weather_code)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}