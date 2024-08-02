"use client"
import Draggable from "react-draggable"

export default function App() {

    return (
        <div>
            <Draggable>
                <div className="w-64 h-32 border-black border-2 rounded-xl p-4">
                    Online Friends
                </div>
            </Draggable>
            <Draggable>
                <div className="w-64 h-96 border-black border-2 rounded-xl p-4">
                    Chat window
                </div>
            </Draggable>
            <Draggable>
                <div className="w-96 h-64 border-black border-2 rounded-xl p-4">
                    2024 Maths Exam Paper
                </div>
            </Draggable>
        </div>
    )
}
