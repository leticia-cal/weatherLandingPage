import { TitleAndNumber } from '../title_and_number'
import { SunInfo } from '../sun_info'

import './style.css'

export function SunTime(){
    return (
        <div className="container">
        <div className='title'>
            <span><ion-icon name="sunny"></ion-icon></span> Horário do sol
        </div>
        <div className='content'>
            <div className='sun'>
                <TitleAndNumber label="Hora Atual" contentNumber="05:00"/>
            </div>
        </div>
        <div className='sunInfo'>
            <SunInfo title="Nascer" hour="05:00"/>
            <SunInfo title="Pôr" hour="18:40"/>
        </div>
    </div>
    )
}