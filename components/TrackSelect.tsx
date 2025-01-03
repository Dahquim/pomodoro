import {Bird, CloudRain, Orbit, TreePine, Waves} from "lucide-react";

interface TrackSelectProps {
    selectedTrack: string,
    handleTrackChange: (trackSrc: string) => void
}

export default function TrackSelect({selectedTrack, handleTrackChange}: TrackSelectProps) {
    return (
        <div id="trackSelect" className="grid grid-cols-5">
            <button
                className={`${selectedTrack === "forest" ? "from-secondary text-base" : ""} bg-gradient-to-b hover:from-secondary flex flex-col items-center p-3`}
                onClick={() => handleTrackChange("forest")}
            >
                <TreePine size="20"/>Forest
            </button>
            <button
                className={`${selectedTrack === "waves" ? "from-secondary text-base" : ""}  bg-gradient-to-b hover:from-secondary flex flex-col items-center p-3`}
                onClick={() => handleTrackChange("waves")}
            >
                <Waves size="20"/>Ocean
            </button>
            <button
                className={`${selectedTrack === "rainy" ? "from-secondary text-base" : ""}  bg-gradient-to-b hover:from-secondary flex flex-col items-center p-3`}
                onClick={() => handleTrackChange("rainy")}
            >
                <CloudRain size="20"/>Rainy
            </button>
            <button
                className={`${selectedTrack === "peace" ? "from-secondary text-base" : ""}  bg-gradient-to-b hover:from-secondary flex flex-col items-center p-3`}
                onClick={() => handleTrackChange("peace")}
            >
                <Bird size="20"/>Peace
            </button>
            <button
                className={`${selectedTrack === "cosmic" ? "from-secondary text-base" : ""}  bg-gradient-to-b hover:from-secondary flex flex-col items-center p-3`}
                onClick={() => handleTrackChange("cosmic")}
            >
                <Orbit size="20"/>Cosmic
            </button>
        </div>
    )
}