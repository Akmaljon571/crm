import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {head, setHead, vaqt,setVaqt} = useContext(State)
   return {head, setHead, vaqt,setVaqt}
}

export default useStart;