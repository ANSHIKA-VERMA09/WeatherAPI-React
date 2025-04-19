import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const hot_url = "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=600&auto=format&fit=crop&q=60";
    const rain_url = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60";
    const cold_url = "https://images.unsplash.com/photo-1542267207-f8127b454605?w=600&auto=format&fit=crop&q=60";

    // Choose image and icon based on weather conditions
    const weatherImage = info.humidity > 70 ? rain_url : info.temp > 40 ? hot_url : cold_url;
    const WeatherIcon = info.humidity > 70 ? ThunderstormIcon : info.temp > 40 ? WhatshotIcon : AcUnitIcon;

    return (
        <div className="InfoBox">
            <h3>Current Weather</h3>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="weather"
                        height="140"
                        image={weatherImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                            
                            {info.city} <WeatherIcon />
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature: {info.temp}°C</p>
                            <p>Minimum Temperature: {info.temp_min}°C</p>
                            <p>Maximum Temperature: {info.temp_max}°C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Description: {info.weather} — feels like {info.feelsLike}°C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
