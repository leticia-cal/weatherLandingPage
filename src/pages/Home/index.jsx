import { useState } from "react";
import { TemperatureNow } from "../../components/temperature_now";
import { AirQuality } from "../../components/air_quality";
import { SunTime } from "../../components/sun_time";
import { WeekWeather } from "../../components/week_weater";

import "./style.css";

export function Home() {
  return (
    <div className="Home">
      <TemperatureNow />
      <div className="Additional">
        <div className="AirAndSun">
          <AirQuality />
          <SunTime />
        </div>
        <WeekWeather />
      </div>
    </div>
  );
}
