import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import {weatherImage} from "./helper"

export default function InfoBox({info}){
    
    const img = weatherImage(info);

    return (
        <div className="InfoBox">

            <div className="cardContainer">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={img || "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  title="weather widget"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='cityName'>
                    {info.city && `${info.city[0].toUpperCase()}${info.city.slice(1).toLowerCase()}`}&nbsp;
                    {info.humidity>80? <ThunderstormIcon/> : info.temp<15 ? <AcUnitIcon/> : <WbSunnyIcon/>}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="span">
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    <p></p>
                  </Typography>
                </CardContent>
      
              </Card>
            </div>
            
            
        </div>
    )
}