import { useState, useEffect } from "react"
import IndividualDay from "./InidividualDay";
import { ScrollArea, MantineProvider } from '@mantine/core';
import Navbar from "../Navbar";
import MyParticles from "../MyParticles";


function Weather() {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function waitFor(conditionFn, interval = 100) {
        return new Promise((resolve) => {
          const checkCondition = setInterval(() => {
            if (conditionFn()) {
              clearInterval(checkCondition);
              resolve();
            }
          }, interval);
        });
      }

    useEffect(() => {
        const fetchWeather = async () => {
          try {
            const { coords } = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            })
            const {latitude, longitude} = coords
            
            console.log("INSIDE WAIT")
            // Step 1: Get Grid Points
            const gridPointResponse = await fetch(
                `https://api.weather.gov/points/${latitude},${longitude}`
            );
            if (!gridPointResponse.ok) throw new Error('Failed to fetch grid points');
            const gridPointData = await gridPointResponse.json();

            // Step 2: Get Forecast
            const forecastUrl = gridPointData.properties.forecast;
            const forecastResponse = await fetch(forecastUrl);
            if (!forecastResponse.ok) throw new Error('Failed to fetch forecast');
            const forecastData = await forecastResponse.json();

            // Step 3: Update State
            setForecast(forecastData);
            setLoading(false);
            

            
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    
        fetchWeather();
        console.log(forecast)
      }, []);

    if(loading){
        return(
            <div className="App">
                <MyParticles />
                <header className="App-header">
                    Loading Weather Data Please Wait...
                </header>
            </div>
        )
    } else {
        return(
            <MantineProvider>
            <div className="App">
                <MyParticles />
                <header className="App-header">
                  <Navbar />
                    <h2>Your Weather Report</h2>
                    <ScrollArea scrollbars="x" w={"80vw"} style={{border:"2px solid #ffffff",borderRadius:"5px"}}>
                        <div style={{display:"flex"}}>
                        {forecast && forecast.properties.periods.map((period)=>(<IndividualDay period={period}/>))}
                        </div>
                    </ScrollArea>
                </header>
            </div>
            </MantineProvider>
        )
    }
}


export default Weather