import {Minus, Plus} from "lucide-react";

interface PomodoroOptionsProps {
    sessionLength: number,
    handleSessionChange: (value: number) => void,
    breakLength: number,
    handleBreakChange: (value: number) => void
}

export default function PomodoroOptions({ sessionLength, handleSessionChange, breakLength, handleBreakChange }: PomodoroOptionsProps) {
    return (
        <div id="options" className="flex gap-4 py-8">
            <div className="flex flex-col space-y-2">
                <span className="text-secondary font-bold uppercase [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">Session Length</span>
                <div>
                    <button onClick={() => handleSessionChange(sessionLength / 60 - 1)}><Minus
                        className="text-secondary"/></button>
                    <input
                        type="number"
                        value={sessionLength / 60}
                        max="59"
                        min="5"
                        className="border-b-4 border-secondary rounded-xl text-secondary font-bold text-3xl p-1 m-1"
                        onChange={(e) => handleSessionChange(Number(e.target.value))}
                    />
                    <button onClick={() => handleSessionChange(sessionLength / 60 + 1)}><Plus
                        className="text-secondary"/></button>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <span className="text-secondary font-bold uppercase [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">Break Length</span>
                <div>
                    <button onClick={() => handleBreakChange(breakLength / 60 - 1)}><Minus className="text-secondary"/>
                    </button>
                    <input
                        type="number"
                        value={breakLength / 60}
                        max="10"
                        min="1"
                        className="border-b-4 border-secondary rounded-xl text-secondary font-bold text-3xl p-1 m-1"
                        onChange={(e) => handleBreakChange(Number(e.target.value))}
                    />
                    <button onClick={() => handleBreakChange(breakLength / 60 + 1)}><Plus className="text-secondary"/>
                    </button>
                </div>
            </div>

        </div>
    )
}