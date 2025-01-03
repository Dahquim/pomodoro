import React, {useEffect, useState} from 'react';
import "@/app/circleTimer.scss";
import NumberFlow from "@number-flow/react";
import {Pause, Play, RotateCcw} from "lucide-react";

interface CircleTimerProps {
    isSession: boolean,
    timeLeft: number,
    isRunning: boolean,
    handleStartPause: () => void,
    handleReset: () => void,
    sessionCount?: number
}

const CircleTimer = ({
     isSession,
     timeLeft,
     isRunning,
     handleStartPause,
     handleReset,
     sessionCount
}: CircleTimerProps) => {
    const [canReset, setCanReset] = useState(false)

    useEffect(() => {
        if (!isRunning) {
            setCanReset(true);
        } else {
            setCanReset(false)
        }
    }, [isRunning])

    const formatMinute = (seconds: number) => {
        return Math.floor(seconds / 60);
    }

    const formatSecond = (seconds: number) => {
        const remainingSeconds = seconds % 60;
        return remainingSeconds < 1 ? "0" : remainingSeconds
    }

    return (
        <div className="container justify-center py-20 flex-1">
            <div className="button button--circle">
                <div className="button__text text-center bg-white p-5 rounded-full h-44 w-48">
                    <div className="text-secondary font-bold text-2xl">{isSession ? `Session ${sessionCount}` : "Break"}</div>
                    <div id="countdown" className="text-4xl font-bold text-secondary">
                        <NumberFlow value={formatMinute(timeLeft)}/>
                        <span>:</span>
                        <NumberFlow trend={-1} format={{minimumIntegerDigits: 2}} value={formatSecond(timeLeft)}/>
                    </div>
                    <div className="flex flex-col items-center">
                        {isRunning ? (
                            <button onClick={handleStartPause} className="text-secondary">
                                    <span className="flex items-center">
                                        <Pause size={16}/>
                                        <span className="text-lg">Pause</span>
                                    </span>
                            </button>
                        ) : (
                            <button onClick={handleStartPause} className="text-secondary">
                                    <span className="flex items-center">
                                        <Play size={16}/>
                                        <span className="text-lg">Play</span>
                                    </span>
                            </button>
                        )}
                        {canReset && (
                            <button onClick={handleReset} className="text-secondary">
                                <span className="flex items-center">
                                    <RotateCcw size={16}/>
                                    <span className="text-lg">Reset</span>
                                </span>
                            </button>
                        )}
                    </div>
                </div>
                <div className="button__bubble-container">
                    <span className="bubble bg-primary/60 w-96 h-96 m-auto"></span>
                    <span className="bubble bg-primary/60 w-80 h-80 m-auto"></span>
                    <span className="bubble bg-primary/60 w-72 h-72 m-auto"></span>
                </div>
            </div>
        </div>
    );
};

export default CircleTimer;
