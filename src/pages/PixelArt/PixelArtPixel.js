import { useState } from 'react'; 
import './PixelArtPixel.css'

function PixelArtPixel(props){
    const [color, setColor] = useState(props.color)

    function handlePaint() {
        if(props.isPainting){
            setColor(props.changeColor)
        }
    }

    function clickedPiece() {
        setColor(props.changeColor)
        props.setIsPainting(true)
    }

    return(
        <div 
            className='pixelArtPixel' 
            style={{backgroundColor:color}} 
            onMouseDown={clickedPiece} 
            onMouseEnter={handlePaint}
            data-x = {props.xCoord}
            data-y = {props.yCoord}
        >
        </div>
    )
}

export default PixelArtPixel;