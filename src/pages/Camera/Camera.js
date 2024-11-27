import './Camera.css'

import { useCallback, useState, useEffect } from "react";
import particlesOptions from "../particles.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import { VideoDisplay } from './VideoDisplay'

export function Camera() {
    const particlesInit = useCallback(main => {
        loadSlim(main);
      }, [])

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
            <Particles id='particles' options={particlesOptions} init={particlesInit} />
            <header className="App-header">
                <VideoDisplay stream={videoStream}/>
            </header>
        </div>
    )
}

export default Camera