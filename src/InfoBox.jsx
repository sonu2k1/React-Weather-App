import Card from '@mui/material/Card';
import "./InfoBox.css/";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_URL = 
    "https://plus.unsplash.com/premium_photo-1667143951629-a1b2acc1a832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1c3R5JTIwc2t5fGVufDB8fDB8fHww";
 
    let COLD_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fHww";
    let HOT_URL="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHN1biUyMGFkdGVybm9vbnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://plus.unsplash.com/premium_photo-1664910358669-b19dce4be056?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return(
    <div className="InfoBox">
        {/* <h1>WeatherInfo - {info.weather}</h1> */}
        <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL
          :info.temp>15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
          info.humidity > 80
          ? <ThunderstormIcon/>
          :info.temp>15
          ?<WbSunnyIcon/>
          :<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperatue = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>
            The Weather can be describe as <i>{info.weather}</i> and feels like
           {info.feelslike}&deg;C
            
         </p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
  );
}