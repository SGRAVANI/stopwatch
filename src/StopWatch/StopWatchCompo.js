import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./style.module.css"
export default function StopWatchCompo() {
    let [isRunning,setIsRunning]=useState(false)
    let [timer,setTimer]=useState(0)
    let min=0,sec=0;
    // let [tid,setTid]=useState(null)
    let timerId=null;
    useEffect(()=>{
     if(isRunning)
     {
     timerId=setTimeout(()=>{
      setTimer((prev)=>{
        return prev+1
     })
       
     },1000)   
    //  setTid(id)
     }
     return ()=>{
     clearTimeout(timerId)
     }
     
    },[isRunning,timer])
    function formatMsg(sec)
    {
    let min=Math.floor(sec/60);
    let remainingSecs=sec%60;
    return `${min}:${remainingSecs<10?"0".concat(remainingSecs):remainingSecs}`
    }
    function handleStartStop()
    {
     setIsRunning(!isRunning)
    }
    function handleReset()
    {
        setTimer(0);
        setIsRunning(false)
    }
  return (
    <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:"40px",backgroundColor:"cyan",boxShadow:"0 0 20px 10px 5px"}}>
    <div className={styles.stopWatchContainer}>
        <h1>Stopwatch</h1>
        <p >Time: {formatMsg(timer)}</p>
        <div >
            <button onClick={handleStartStop} className={styles.btn}>{isRunning?"Stop":"Start"}</button>
            <button onClick={handleReset}className={styles.btn}>Reset</button>
        </div>
    </div>
    </div>
  )
}
