import { createContext, useState } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {

    const [head, setHead] = useState('Xisobod');


    const data = {head, setHead}

    return <State.Provider value={data}>{ children }</State.Provider>
}