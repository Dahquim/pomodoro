"use client"

import {useEffect, useState} from "react";
import CircleTimer from "@/components/CircleTimer";
import AudioPlayer from "@/components/AudioPlayer";
import AboutButton from "@/components/AboutButton";
import TrackSelect from "@/components/TrackSelect";
import PomodoroOptions from "@/components/PomodoroOptions";

export default function Home() {
    const [ sessionLength, setSessionLength ] = useState(30 * 50);
    const [ breakLength, setBreakLength ] = useState (5 * 60);
    const [ timeLeft, setTimeLeft ] = useState(sessionLength);
    const [sessionCount, setSessionCount ] = useState(1)
    const [ isRunning, setIsRunning ] = useState(false);
    const [ isSession, setIsSession ] = useState(true);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ currentTrack, setCurrentTrack ] = useState<string>("/mp3/forest.mp3")
    const [ selectedTrack, setSelectedTrack ] = useState<string>("forest");

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        if (isSession) {
                            setIsSession(false);
                            setSessionCount(sessionCount+1)
                            setTimeLeft(breakLength);
                        } else {
                            setIsSession(true);
                            setTimeLeft(sessionLength)
                        }
                        return prev;
                    }
                    return prev -1;
                });
            }, 10)
        }
        return () => clearInterval(timer)
    }, [isRunning, isSession, sessionLength, breakLength]);

    const handleStartPause = () => {
        setIsPlaying((prev) => !prev);
        setIsRunning((prev) => !prev);
    }

    const handleReset = () => {
        setIsRunning(false);
        setIsSession(true)
        setSessionCount(1)
        setTimeLeft(sessionLength)
    }

    const handleSessionChange = (value: number) => {
        const newSessionLength = Math.min(Math.max(value, 5), 60) * 60;
        setSessionLength(newSessionLength)
        setTimeLeft(newSessionLength)
    }

    const handleBreakChange = (value: number) => {
        const newBreakLength = Math.min(Math.max(value, 1), 10) * 60;
        setBreakLength(newBreakLength);
    }

    const handleTrackEnd = () => {
        setIsPlaying(false)
    }

    const handleTrackChange = (trackSrc: string) => {
        setCurrentTrack("/mp3/" + trackSrc + ".mp3");
        setSelectedTrack(trackSrc)
    }

    return (
        <main className="bg-gradient-to-b from-base-300 to-base">
            <div id="pomodoro" className="w-screen">
                <TrackSelect
                    selectedTrack={selectedTrack}
                    handleTrackChange={handleTrackChange}
                />
                <div className="flex flex-col">
                    <CircleTimer
                        isSession={isSession}
                        sessionCount={sessionCount}
                        timeLeft={timeLeft}
                        isRunning={isRunning}
                        handleStartPause={handleStartPause}
                        handleReset={handleReset}
                    />
                    <PomodoroOptions
                        sessionLength={sessionLength}
                        handleSessionChange={handleSessionChange}
                        breakLength={breakLength}
                        handleBreakChange={handleBreakChange}
                    />
                    <AudioPlayer
                        track={currentTrack}
                        isPlaying={isPlaying}
                        onTrackEnd={handleTrackEnd}
                    />
                </div>
                <AboutButton />
            </div>
        </main>
    )
}
