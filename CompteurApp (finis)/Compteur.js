import { useEffect, useState } from "react"
import { View, Text } from "react-native";

export default function Compteur(props) {
    const [timer, setTimer] = useState(props.maxTime);
    const status = props.reinit;
    const handleRunning = props.onUpdate; 
    
    useEffect(()=> {
        const interval = setInterval(decreaseTime, 1000);
        return(() => {
            clearInterval(interval);
        })
    }, [status])

    useEffect(()=>{
        reinitialiser()
    },[status])

    useEffect(() => {
        handleRunning(timer != 0)
    }, [timer])
    
    function decreaseTime() {
        setTimer(timer => Math.max(0, timer - 1));
    }

    function reinitialiser(){
        setTimer(timer => props.maxTime);
    }

    return(
    <View><Text>{timer}</Text></View>

    )
}