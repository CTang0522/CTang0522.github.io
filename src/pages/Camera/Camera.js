import './Camera.css'

import { useState, useEffect } from "react";

import { VideoDisplay } from './VideoDisplay'
import Navbar from '../Navbar';
import MyParticles from '../MyParticles';

export function Camera() {

    const [videoStream, setVideoStream] = useState(null)
    

    useEffect(() => {
        let mediaDevices = navigator.mediaDevices;
        mediaDevices.getUserMedia({
            video:true,
            audio:false,
        }).then((stream) => {
            setVideoStream(stream)
        }).catch((error) => {
            console.log("Error Accessing Media Devices: "+error);
        })
    }, []);

    return(
        <div className="App">
            <MyParticles/>
            <header className="App-header">
                <Navbar/>
                <VideoDisplay stream={videoStream}/>
            </header>
        </div>
    )
}

export default Camera