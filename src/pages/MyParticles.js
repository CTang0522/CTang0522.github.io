import particlesOptions from "./particles.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export function MyParticles(){
    const particlesInit = useCallback(main => {
        loadSlim(main);
    }, [])

    return(<Particles id='particles' options={particlesOptions} init={particlesInit} className='particles'/>)

}

export default MyParticles