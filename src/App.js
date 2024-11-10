import portrait from './assets/portrait.jpg'
import email from './assets/email.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import resume from './assets/resume.svg'
import resumePdf from './assets/resume.pdf'
import './App.css';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesOptions from "./particles.json";
import NavBar from "./Navbar"
import { Fade } from "react-awesome-reveal";
import { MantineProvider, Flex } from '@mantine/core';


function App() {



  const particlesInit = useCallback(main => {
    loadSlim(main);
  }, [])

  return (
    <div className="App">
      <MantineProvider>
        <header className="App-header">
          <Particles id='particles' options={particlesOptions} init={particlesInit}>Hello World</Particles>
          <Fade>
            <br />
            <Flex justify="center" align="center" direction="row" wrap="nowrap">
              <div>
                <img src={portrait} className='portrait' alt='Portrait' />
                <div className='container'>
                  <a href='https://www.linkedin.com/in/ctang0522/' target='_blank' className='item'>
                    <img src={linkedin} />
                  </a>
                  <a href='https://github.com/CTang0522' target='_blank' className='item'>
                    <img src = {github} />
                  </a>
                  <a href={resumePdf} target='_blank' className='item'>
                    <img src = {resume} />
                  </a>
                  <a href='mailto:christang522@gmail.com' target='_blank' className='item'>
                    <img src = {email} />
                  </a>
                </div>
              </div>
              <br/>
              <div id='aboutMe'>
                Hello, my name is Christopher Tang and I am an Application Developer at <a href="http://www.componentwise.com/" target='_blank' className='links'>ComponentWise Solutions</a> based out of Perry Hall, MD.
                I have recently graduated from the University of Maryland in College Park, MD (Class of 2024). During my time at UMD I was lucky
                enough to study Computer Science as well as obtain minors in Sustainability Studies and Geospatial Information Science. Outside of
                the classroom I was also an active member of <a href='https://ktpumd.com/' target='_blank' className='links'>Kappa Theta Pi</a>. Post graduation I
                have dedicated myself to developing my talents as a full-stack developer through personal projects as well as work experience.
              </div>
            </Flex>
          </Fade>
        </header>
        <br /><br />
      </MantineProvider>
    </div>
  );
}

export default App;
