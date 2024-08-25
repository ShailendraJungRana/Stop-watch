import {useEffect, useState} from 'react'

function StopWatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] =useState(false);

    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(()=>{
            setTime((prevTime) => prevTime + 10)},10);
        }
        else if (!running){
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    },[running]);
    const formatTime = (value) => {
        return ("0" + value).slice(-2);
    };



  return (
    <div className='max-w-md flex flex-col items-center justify-center py-8'>
        <h1 className='text-lg font-semibold pb-2'>StopWatch</h1>
        <div className='text-xl  font-semibold py-4'> 
        <span>{formatTime(Math.floor((time / 60000) % 60))}:</span>
                <span>{formatTime(Math.floor((time / 1000) % 60))}:</span>
                <span>{formatTime(Math.floor((time / 10) % 100))}</span>
        </div>
        <div className='w-1/3 flex flex-row max-w-md justify-between'>
            {running ?(<button className='border rounded-lg py-1 px-2.5' onClick={()=>{setRunning(false)}}>Stop</button>):
            (<button className='border rounded-lg py-1 px-3' onClick={()=>{setRunning(true)}}>Start</button>)
            }
            <button className='border rounded-lg py-1 px-2.5' onClick={()=>{setTime(0)}} >Reset</button>
        </div>
    </div>
  )
}

export default StopWatch
