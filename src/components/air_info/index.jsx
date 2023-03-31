import './style.css'

export function AirInfo({quantity, gas}){
    return(
        <div className="airInfoWidget">
            <p>{quantity}</p>
            <p>{gas}</p>
        </div>
    )
}