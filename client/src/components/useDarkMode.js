import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const usePinkMode = (mode) => {

    const [toggle, setToggle] = useLocalStorage( 'pinkmode', mode)

    useEffect(()=>{
        if (toggle === true){
            return document.querySelector("body").classList.add("pink-mode")
        } else {
            return document.querySelector("body").classList.remove("pink-mode")
        }
    },[toggle])

    const setMode = e => {
        e.preventDefault();
        setToggle(!toggle);
      };

    return [toggle, setMode]
}