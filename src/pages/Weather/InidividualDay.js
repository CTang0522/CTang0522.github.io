import { ScrollArea } from "@mantine/core"
import "./Weather.css"

function IndividualDay(period) {
    console.log(period)
    console.log(period.period.probabilityOfPrecipitation)
    var precip = period.period.probabilityOfPrecipitation
    return(
        <div className="individualDay">
            <ScrollArea w={'100%'} h={'100%'} scrollbars="y">
                <br/>
                <strong className="periodName">{period.period.name}</strong><br/><br/>
                Temp: {period.period.temperature}&deg;{period.period.temperatureUnit}<br/>
                <img style={{width:'20vmin', height:'20vmin', margin:'auto', marginTop:'2vmin'}} src={period.period.icon}/>
                <br/>
                <div className="shortForecast">
                {period.period.shortForecast}
                </div><br/>
                <div className="shortForecast">
                {precip.value != null && <div>{precip.value}% Chance of Precipitation</div>}
                {precip.value == null && <div>Unknown Chance of Precipitation</div>}
                </div>


            </ScrollArea>
        </div>
       
    )
}

export default IndividualDay