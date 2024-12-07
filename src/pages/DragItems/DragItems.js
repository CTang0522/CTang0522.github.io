import Draggable from 'react-draggable'
import './DragItems.css'
import { IconTrash } from "@tabler/icons-react";

import { useState, useRef } from 'react';
import Navbar from "../Navbar";
import MyParticles from "../MyParticles";


export function DragItems() {

    const canvasRef = useRef(null)
    const [items, setItems] = useState([]);
    const [maxZIndex, setMaxZIndex] = useState(0);

    const addItem = (dragItemType) => {
        const canvas = canvasRef.current;
        if(!canvas) return;
        const { width, height } = canvas.getBoundingClientRect()

        const newItem = {
            id:items.length,
            dragItemType: dragItemType,
            position: {x:Math.max(Math.random()*width-100,0),y:Math.max(Math.random()*height-100, 0)},
            zIndex: maxZIndex+1
        };
        setItems([...items, newItem]);
        setMaxZIndex(maxZIndex+1);
    }

    const handleDrag = (e, data, id) => {
        setItems((prevItems) => prevItems.map((item) => 
                item.id === id ? {...item, position:{x:data.x, y:data.y}} : item
            )
        )
    }

    const bringToFront = (id) => {
        setItems((prevItems) => 
            prevItems.map((item) => 
                item.id === id ? {...item, zIndex:maxZIndex+1} : item
            )
        );
        setMaxZIndex(maxZIndex+1);
    }

    const removeItem = (event, id) => {
        event.preventDefault()
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems);
    }

    const clearBoard = () => {
        setItems([])
        setMaxZIndex(0)
    }


    return(
    <div className="App">
        <MyParticles/>
        <header className="App-header">
            <Navbar/>
            <div className="myCanvas" id="myCanvas" ref={canvasRef}>
                {items.map((item) => (
                    <Draggable
                        key={item.id}
                        position={item.position}
                        onStart={() => bringToFront(item.id)}
                        onStop={(e, data) => handleDrag(e, data, item.id)}
                    >
                        <div className={item.dragItemType} onContextMenu={(event) => {removeItem(event, item.id)}}/>
                    </Draggable>
                ))}
            </div>
            <div className="selector">
                <button className="createDraggableItem" onClick={() => {addItem("dragBox")}}>
                    <div className="dragBoxSelector" />
                </button>

                <button className="createDraggableItem" onClick={() => {addItem("dragRect")}}>
                    <div className="dragRectSelector" />
                </button>

                <button className="createDraggableItem" onClick={() => {addItem("dragTriangle")}}>
                    <div className="dragTriangleSelector" />
                </button>

                <button className="createDraggableItem" onClick={() => {addItem("dragCircle")}}>
                    <div className="dragCircleSelector" />
                </button>

                <button className="createDraggableItem" onClick={() => {clearBoard()}}>
                    <IconTrash className="trash"/>
                </button>
                
            </div>
        </header>
    </div>
    )
}

export default DragItems