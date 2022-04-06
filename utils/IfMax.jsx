import {useState,useEffect, useRef} from "react";
import Max_Size from "../components/other/MaxSize";

const IfMax = ({data,Component}) => {
    const [width,sw] = useState(0)
    const [height,sh] = useState(0)
    const [isTrue,sit] = useState(true);

    const changewh = () =>{
        sw(window.innerWidth)
        sh(window.innerHeight)
    }

    useEffect(()=>{
        changewh()
        window.addEventListener("resize",()=>{
            changewh()
        }) 
        if(width > 480 || height > 830){
            sit(true)
        }else{
            sit(false)
        }
    },[width,height])

    if(isTrue){
        return <Max_Size />
    }
    return <Component data={data}/>
}

export default IfMax;