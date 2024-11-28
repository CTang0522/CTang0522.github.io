import './Projects.css';
import particlesOptions from "../particles.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { Outlet, Link } from "react-router-dom";

import calculatorLogo from './assets/Calculator_Screenshot.png'
import chessLogo from './assets/Chess_Screenshot.png'
import weatherLogo from './assets/Weather_Screenshot.png'
import cameraLogo from './assets/Camera_Logo.webp'
import artBoardLogo from './assets/ArtBoard_Screenshot.png'


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
                    <br/>
                    <Link to="/Projects/Chess" className='projectLinks'>
                        <div className='projectLinksText'>Chess Application</div>
                        <img src={chessLogo} className='projectLink' />
                    </Link>
                    <br/>
                    <Link to="/Projects/Weather" className='projectLinks'>
                        <div className='projectLinksText'>Weather Application</div>
                        <img src={weatherLogo} className='projectLink' />
                    </Link>
                    <br/>
                    <Link to="/Projects/Camera" className='projectLinks'>
                        <div className='projectLinksText'>Camera Application</div>
                        <img src={cameraLogo} className='projectLink' />
                    </Link>
                    <br />
                    <Link to="/Projects/ArtBoard" className='projectLinks'>
                        <div className='projectLinksText'>ArtBoard Application</div>
                        <img src={artBoardLogo} className='projectLink' />
                    </Link>
                </div>

            </header>
        </div>

    )
}


export default Projects;