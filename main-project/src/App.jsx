import React from "react"
import boxes from "./boxes.jsx"
import Box from "./Box.jsx"

export default function App(props) {
    
        const [squares, setSquares] = React.useState(boxes)
        
        const squareElements = squares.map(square => (
            <Box key={square.id} on={square.on} />
        ))
    return (
        <main>
            {squareElements}
        </main>
    )
}

