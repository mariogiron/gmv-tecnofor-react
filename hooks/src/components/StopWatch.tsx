import { useState, useRef } from 'react';

export default function Stopwatch() {
    const [startTime, setStartTime] = useState<number>(0);
    const [now, setNow] = useState<number>(0);
    const intervalRef = useRef<number>(0);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    );
}