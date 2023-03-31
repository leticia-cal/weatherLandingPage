import "./style.css";
import { ClimateInfo } from "../climate_info";

export function TemperatureNow() {
  return (
    <div id="temperature-now">
      <div className="nowHeader">
        <img src="../../assets/images/clouded.svg" alt="clima icone" />
        <div className="location">
          <ion-icon name="location"></ion-icon>
          <p>Rio do Sul, SC</p>
        </div>
      </div>
      <main>
        <div className="weatherInfo">
        <p>
          18 <span>ºC</span>
        </p>
          <span className="tMax">22°</span> <span className="tMin">16°</span>
        </div>

      </main>
      <div className="widget">
        <ClimateInfo
          name="Vento"
          icon="../../assets/images/air.svg"
          value="17"
          metric="km/h"
        />
        <ClimateInfo
          name="Umidade"
          icon="../../assets/images/humity.svg"
          value="31"
          metric="%"
        />
        <ClimateInfo
          name="Chuva"
          icon="../../assets/images/rain_probability.svg"
          value="10"
          metric="%"
        />
      </div>
    </div>
  );
}
