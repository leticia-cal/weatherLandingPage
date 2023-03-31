import './style.css'

export function SunInfo({title, hour}){
    return(
        <div className="SunInfoWidget">
            <p>{title}</p>
            <p>{hour}</p>
        </div>
    )
}