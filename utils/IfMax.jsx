import {useState,useEffect, useRef} from "react";
import Max_Size from "../components/other/MaxSize";

const IfMax = ({data,Component}) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [isTrue, setIsTrue] = useState(true);

    const changewh = () =>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=>{
        changewh()
        window.addEventListener("resize",()=>{
            changewh()
        }) 
        if(width > 480 || height > 830){
            setIsTrue(true)
        }else{
            setIsTrue(false)
        }
    },[width, height])

    if(isTrue){
        return <Max_Size />
    }
    return <Component data={data}/>
}

export default IfMax;