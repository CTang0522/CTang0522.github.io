import './Projects.css';
import { Outlet, Link } from "react-router-dom";

import calculatorLogo from './assets/Calculator_Screenshot.png'
import chessLogo from './assets/Chess_Screenshot.png'
import weatherLogo from './assets/Weather_Screenshot.png'
import cameraLogo from './assets/Camera_Logo.webp'
import artBoardLogo from './assets/ArtBoard_Screenshot.png'
import Navbar from '../Navbar';
import MyParticles from '../MyParticles';


function Projects() {
    

    return (
        <div className='App'>
            <MyParticles/>
            <header className="App-header">
                <Navbar />
                <div className='projectContainer'>
                    <Link to="/Projects/Calculator" className='projectLinks'>
                        <div className='projectLinksText'>Calculator Application</div>
                        <img src={calculatorLogo} className='projectLink' />
                    </Link>
                    <Link to="/Projects/Chess" className='projectLinks'>
                        <div className='projectLinksText'>Chess Application</div>
                        <img src={chessLogo} className='projectLink' />
                    </Link>
                    <Link to="/Projects/Weather" className='projectLinks'>
                        <div className='projectLinksText'>Weather Application</div>
                        <img src={weatherLogo} className='projectLink' />
                    </Link>
                    <Link to="/Projects/Camera" className='projectLinks'>
                        <div className='projectLinksText'>Camera Application</div>
                        <img src={cameraLogo} className='projectLink' />
                    </Link>
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