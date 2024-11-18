import './Projects.css';
import particlesOptions from "../particles.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { Outlet, Link } from "react-router-dom";

import calculatorLogo from './assets/Calculator_Screenshot.png'


function Projects() {
    const particlesInit = useCallback(main => {
        loadSlim(main);
    }, [])

    return (
        <div className='App'>
            <Particles id='particles' options={particlesOptions} init={particlesInit} className='particles'/>
            <header className="App-header">
                <div>
                    <Link to="/Projects/Calculator" className='projectLinks'>
                        <div className='projectLinksText'>Calculator Application</div>
                        <img src={calculatorLogo} className='projectLink' />
                    </Link>
                </div>

            </header>
        </div>

    )
}


export default Projects;