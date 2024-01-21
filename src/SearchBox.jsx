
import {useState} from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './SearchBox.css'

import { getWeatherInfo } from "./helper";

export default function SearchBox({updateInfo}){
   
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
            setCity("");
            setError(false);  
        }
        catch(err){
            setCity("");
            setError(true);   
        }
    }

    return (
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
                <TextField error={error} id="city" label="City name" variant="outlined" value={city} onChange={handleChange} 
                helperText={error?"No data available for the provided city":""}/>
                <br />
                <br />
                <Button variant="contained" type="submit" disabled={city.trimStart().length==0?true:false}>
                    Search
                </Button>
            </form>
        </div>
    )
}