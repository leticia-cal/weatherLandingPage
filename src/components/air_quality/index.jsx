import { AirInfo } from '../air_info'
import { TitleAndNumber } from '../title_and_number'

import './style.css'

export function AirQuality(){
    return (
        <div className="container">
            <div className='title'>
                <span><ion-icon name="leaf"></ion-icon></span> Qualidade do ar
            </div>
            <main className='content'>
                <TitleAndNumber label="Boa" contentNumber={21}/>
            </main>
            <div className='info'>
                <AirInfo quantity={12.9} gas="PM2.5"/>
                <AirInfo quantity={12.9} gas="PM10"/>
                <AirInfo quantity={2.1} gas="sO₂"/>
                <AirInfo quantity={1.4} gas="NO₂"/>
                <AirInfo quantity={21.2} gas="O₃"/>
                <AirInfo quantity={0.7} gas="CO"/>
            </div>
        </div>
    )
}