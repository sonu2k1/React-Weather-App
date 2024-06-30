import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY ="0bcf72b1a44dee48c3415a6e3179644c";

    let getWeatherInfo = async () => {
      try{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
      let result ={
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    }catch(err){
      throw err;
    }
    };
    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) =>{
      try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
      }catch(err){
        setError("No such place in Our API");
      }
    };

    
    return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit} >
        <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange} />
        <br /><br />
        <Button variant="contained" type='submit' >
        Search
      </Button>
      {error && <p style={{color:"red"}}>No Such Place Exists!</p>}
      </form>
        </div>
    )
}