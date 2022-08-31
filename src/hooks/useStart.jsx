import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {head, setHead} = useContext(State)
   return {head, setHead}
}

export default useStart;