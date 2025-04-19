import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp() {
    const [weather, setWeather] = useState({
        city: "Delhi",
        feelsLike: 38.6,
        humidity: 11,
        temp: 41.38,
        temp_max: 41.38,
        temp_min: 41.38,
        weather: "clear sky"
    });

    return (
        <>
           
            <SearchBox updateInfo={setWeather} />
            <InfoBox info={weather} />
        </>
    );
}
