import { createContext, useEffect, useState } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {

    let nol = (data) =>{
        console.log(data.toString().split('').length);
         if (data.toString().split('').length == 1) {
            return `0${data}`
         } 
         return data
    }

    const [head, setHead] = useState('Xisobod');
    const [vaqt, setVaqt] = useState(`${nol(new Date().getDate())}.${nol(new Date().getMonth())}.${nol(new Date().getFullYear())}`);

    useEffect(() => {
        setInterval(() => {
         setVaqt(`${nol(new Date().getDate())}.${nol(new Date().getMonth())}.${nol(new Date().getFullYear())}`)
        }, 1000);
     }, [vaqt]);




    const data = {head, setHead, vaqt,setVaqt}

    return <State.Provider value={data}>{ children }</State.Provider>
}