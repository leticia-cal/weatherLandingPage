import { WeekWidget } from '../week_widget'

import './style.css'

export function WeekWeather(){
    return (
        <div className="weekContainer">
            <WeekWidget dayName="Amanhã" iconUrl="../../assets/images/clouded.svg" maxT="21º" minT="16º"/>
            <WeekWidget dayName="Sexta-feira" iconUrl="../../assets/images/sun_and_cloud.svg" maxT="21º" minT="16º"/>
            <WeekWidget dayName="Sábado" iconUrl="../../assets/images/sunny.svg" maxT="21º" minT="16º"/>
            <WeekWidget dayName="Domingo" iconUrl="../../assets/images/rain.svg" maxT="21º" minT="16º"/>
            <WeekWidget dayName="Segunda-feira" iconUrl="../../assets/images/storm.svg" maxT="21º" minT="16º"/>
        </div>
    )
}