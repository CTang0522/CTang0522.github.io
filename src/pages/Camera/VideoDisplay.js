import { useEffect, useRef } from 'react'
import './Camera.css'

export function VideoDisplay({ stream }) {
    const videoRef = useRef(null)

    useEffect(() => {
        if(stream && videoRef.current){
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }
    }, [stream]);

    function capture(){
        if(videoRef.current){
            const canvas = document.createElement('canvas');
            const video = videoRef.current;

            const width = video.videoWidth;
            const height = video.videoHeight;

            canvas.width = width;
            canvas.height = height;

            const context = canvas.getContext('2d')
            context.drawImage(video,0,0,width,height)

            const imageData = canvas.toDataURL('image/png');

            const newTab = window.open();
            if(newTab) {
                newTab.document.body.style.margin = '0'
                newTab.document.body.style.backgroundColor = 'black'
                const img = newTab.document.createElement('img');
                img.src = imageData;
                img.style.width = '100%'; // Optional: style the image
                img.style.height = 'auto'; // Maintain aspect ratio
                newTab.document.body.appendChild(img);
            } else {
                alert('Failed to Open New Tab')
            }
        }
    }

    return(
        <div>
            <video ref={videoRef} autoPlay></video>
            <button onClick={capture} className='captureButton'>Capture Screenshot</button>
        </div>
    )
}

export default VideoDisplay