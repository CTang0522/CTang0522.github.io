
import Navbar from '../Navbar';
import PixelArtPixel from './PixelArtPixel';
import './PixelArt.css'

import { useState, useEffect, useRef } from 'react'; 
import { MantineProvider } from '@mantine/core';
import { IconColorPicker, IconX } from '@tabler/icons-react'

function PixelArt(){

    const canvasRef = useRef(null);

    const [showColorPicker, setShowColorPicker] = useState(false)

    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)

    const [customColor, setCustomColor] = useState(`rgb(${red},${green},${blue})`);
    useEffect(() => {
        const newColor = `rgb(${red},${green},${blue})`;
        setCustomColor(newColor);
    
        // If the user has selected custom color, keep it selected when sliders change
        if (changeColor.includes("rgb")) {
            setChangeColor(newColor);
        }
    }, [red, green, blue]);
    

    const brightness = (0.299*red)+(0.587*green)+(0.114*blue)

    const colorsList=[
        'red',
        'blue',
        'green',
        'orange',
        'yellow',
        'purple',
        'violet',
        'white',
        'black',
        'brown',
        customColor
    ]
    const [changeColor,setChangeColor] = useState('red')
    const [isPainting, setIsPainting] = useState(false)

    const colorPickerRef = useRef(null); // Reference for color picker container


    function handleMouseUp(){
        setIsPainting(false)
    }

    function clickColorPick(element){
        setChangeColor(element)
        if(element === customColor){
            setShowColorPicker(true)
        }
    }

    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    const board = [...Array(50)].map((_, index) => 
        <div className='pixelArtBoardRow'>
        {[...Array(80)].map((_, index2) => <PixelArtPixel key={index+"-"+index2} color='white' xCoord={index2} yCoord={index} changeColor={changeColor} isPainting={isPainting} setIsPainting={setIsPainting}/>)}
        </div>
    );

    const colorsSelector = colorsList.map((element,index) => 
        <div 
            className='pixelSelector' 
            style={{
                backgroundColor:element, 
                width: changeColor === element ? "10vmin" : "8vmin",
                height: changeColor === element ? "10vmin" : "8vmin",
                border: '2px solid black',
                borderRadius:'1vmin',
            }} 
            onClick={() => {clickColorPick(element)}}>
                {element === customColor && 
                    <IconColorPicker 
                        className='colorPickerIcon'
                        style={{
                            color: brightness < 128 ? 'white' : 'black'
                        }}/>
                }
        
        </div>
    )
    

    useEffect(() => {
        function handleClickOutside(event) {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
                setShowColorPicker(false);
            }
        }

        if (showColorPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showColorPicker]);

    function saveBoard() {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const pixels = document.querySelectorAll('.pixelArtPixel'); 

        if (pixels.length === 0) {
            console.error("No pixels found!");
            return;
        }

        const pixelSize = pixels[0].offsetWidth;
        const boardWidth = 80; // Number of pixels horizontally
        const boardHeight = 50; // Number of pixels vertically

        canvas.width = boardWidth * pixelSize;
        canvas.height = boardHeight * pixelSize;

        pixels.forEach((pixel) => {
            const color = window.getComputedStyle(pixel).backgroundColor;
            const x = pixel.getAttribute('data-x') * pixelSize;
            const y = pixel.getAttribute('data-y') * pixelSize;

            ctx.fillStyle = color;
            ctx.fillRect(x, y, pixelSize, pixelSize);
        });

        // Convert canvas to image and download
        const link = document.createElement('a');
        link.download = 'pixel-art.png';
        link.href = canvas.toDataURL();
        link.click();
    }

    






    return(
        <div className="App" onMouseUp={handleMouseUp}>
            <MantineProvider>
            <header className="App-header">
                <Navbar/>
                <div className="pixelArtBoardRow">{colorsSelector}</div>
                <br/>
                {showColorPicker && 
                <div className='customColorSelector' ref={colorPickerRef}>
                    <IconX
                    style={{
                        position:'absolute',
                        left:'5px',
                        top:'5px',
                    }}
                    onClick={() => setShowColorPicker(false)}
                    />
                    <div 
                        className='pixelSelector' 
                        style={{
                            backgroundColor:customColor, 
                            border: '2px solid black',
                            borderRadius:'1vmin',
                            margin:'auto',
                        }}>
                        
                    </div>
                    Custom Picker Selector
                    <br/>
                    <table style={{margin:'auto'}}>
                        <tr>
                            <td>
                                Red ({pad(red,3)}):<br/>
                                <input type='range' min={0} max={255} value={red} onChange={(e) => setRed(e.target.value)}/><br/>
                            </td>
                            &nbsp;&nbsp;&nbsp;
                            <td>
                                Green ({pad(green,3)}):<br/>
                                <input type='range' min={0} max={255} value={green} onChange={(e) => setGreen(e.target.value)}/><br/>
                            </td>
                            &nbsp;&nbsp;&nbsp;
                            <td>
                                Blue ({pad(blue,3)}):<br/>
                                <input type='range' min={0} max={255} value={blue} onChange={(e) => setBlue(e.target.value)}/><br/>
                            </td>
                        </tr>
                    </table>
                </div>}
                
                <div className="pixel-art-board">{board}</div>
                <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

    
                <br/>
                <div>
                    <button className='clearBoard' onClick={() => {window.location.reload()}}>Clear Board</button>
                    &nbsp;
                    <button className='clearBoard' onClick={saveBoard}>Save Board</button>
                </div>
            </header>
            </MantineProvider>
        </div>
    )

}


export default PixelArt;