import React, {useEffect, useRef, useState} from "react";

interface AudioPlayerProps {
    track: string | null;
    isPlaying: boolean;
    onTrackEnd?: () => void;
}

function AudioPlayer({ track, isPlaying, onTrackEnd} : AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [ volume, setVolume ] = useState(50);

    useEffect(() => {

        if (audioRef.current) {
            audioRef.current.volume = volume/100
            if (isPlaying && track) {

                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, track, volume]);

    useEffect(() => {
        if(audioRef.current && track) {
            audioRef.current.src = track;
        }
        if(audioRef.current && isPlaying) {
            audioRef.current.play()
        }
    }, [track, isPlaying])

    useEffect(() => {
        if(audioRef.current && onTrackEnd) {
            audioRef.current.addEventListener("ended", onTrackEnd);
            return () => {
                audioRef.current?.removeEventListener("ended", onTrackEnd)
            }
        }
    }, [onTrackEnd])

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseInt(event.target.value, 10))
    }

    return (
        <div className="flex items-center w-3/5 mx-auto">
            <audio ref={audioRef}/>
            <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={handleVolumeChange}
                className="range range-xs range-primary"
            />
        </div>
    )
}

export default AudioPlayer;