import useStart from '../../hooks/useStart'
import './header.scss'
import sun from '../../img/icon-sun.svg'
import qongiroq from '../../img/Notification.svg'
import { useEffect, useState } from 'react'

function HeaderMe() {
    const {head, vaqt} = useStart()

    let nol = (data) =>{
        console.log(data.toString().split('').length);
         if (data.toString().split('').length == 1) {
            return `0${data}`
         } 
         return data
    }


    const [s, sets] = useState(`${nol(new Date().getSeconds())}:${nol(new Date().getMinutes())}:${nol(new Date().getHours())}`);

    useEffect(() => {
       setInterval(() => {
        sets(`${nol(new Date().getSeconds())}:${nol(new Date().getMinutes())}:${nol(new Date().getHours())}`)
       }, 1000);
    }, [s]);

    return (
        <header className="header_father">
            <h1 className='header_h11'>{head}</h1>
            <span className='header_data'>{vaqt}</span>
            <span className='header_data'>{s}</span>
            <div className="rigth">
                <select className='header-til' >
                    <option value="uz">Uz</option>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                </select>
                <div className="sun">
                    <img className='sun-img' src={sun} alt="sun" />
                </div>
                <div className="sun">
                    <img className='sun-img' src={qongiroq} alt="sun" />
                </div>
            </div>
        </header>
    )
}

export default HeaderMe