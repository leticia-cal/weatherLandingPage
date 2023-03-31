import './style.css'

export function WeekWidget({dayName, iconUrl, maxT, minT}){
    return(
        <div className="weekDay">
            <h3>{dayName}</h3>
            <img src={iconUrl} alt="Weather icon" />
            <p><span className="tMax">{minT}</span> <span className="tMin">{maxT}</span></p>
        </div>
    )
}