import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [err, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f40a4359f635e9a62ab01a70db697308";

    let getResponse = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            if (!response.ok) {
                // API returned an error status like 404
                throw new Error("City not found");
            }

            let jsonResponse = await response.json();
            let result = {
                city: jsonResponse.name,
                feelsLike: jsonResponse.main.feels_like,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                weather: jsonResponse.weather[0].description,
                humidity: jsonResponse.main.humidity,
            };

            updateInfo(result);
            setError(false); // ✅ Clear any previous error
        } catch (err) {
            setError(true); // ✅ Show error message
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        getResponse();
        setCity("");
    };

    return (
        <div className="Search">
            <h1>Search for the Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="searchBox"
                    label="Search for a City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>Search</Button>
            </form>

            {err && (
                <div style={{ color: "red", marginTop: "1rem" }}>
                    <p>⚠️ There is no such place in the API!<br />
                        Sorry for the inconvenience.</p>
                </div>
            )}
        </div>
    );
}
