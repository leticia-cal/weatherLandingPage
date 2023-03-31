import "./style.css";

export function ClimateInfo({name, icon, value, metric}){
    return(
        <div className="climate">
            <img src={icon} alt="Icon probabilidade de..." />
            <div className="probability">
                <p>{name}</p>
                <p>{value} <span>{metric}</span></p>
            </div>
        </div>
    )
}