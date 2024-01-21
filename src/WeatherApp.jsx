import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useEffect, useState } from "react";
import { getWeatherInfo } from "./helper";

import {} from "./WeatherApp.css"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({})

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    useEffect(()=>{
        async function fetchData(){
            let result = await getWeatherInfo("Goa");
            setWeatherInfo(result);
        }
        fetchData();
    },[]);

    return (
        <div className="weather">
            <h2 >Weather App by Vinay</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
            
        </div>
    )
}