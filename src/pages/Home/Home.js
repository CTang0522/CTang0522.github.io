import portrait from './assets/portrait.jpg'
import email from './assets/email.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import resume from './assets/resume.svg'
import resumePdf from './assets/resume.pdf'
import './Home.css';
import { Fade } from "react-awesome-reveal";
import { MantineProvider } from '@mantine/core';
import { Link } from "react-router-dom";
import Navbar from '../Navbar'
import MyParticles from '../MyParticles'


function Home() {
  return (
    <div className="App">
      <MantineProvider>
        <header className="App-header">
          <MyParticles/>
          <Navbar />
          <Fade>
            <br />
            <div className='bigContainer'>
              <div>
                <img src={portrait} className='portrait' alt='Portrait' />
                <div className='container'>
                  
                  <a href='https://www.linkedin.com/in/ctang0522/' target='_blank' className='item' rel="noreferrer">
                    <img src={linkedin} title='LinkedIn' className='linkIcon'/><br/>
                  </a>
                  <a href='https://github.com/CTang0522' target='_blank' className='item' rel="noreferrer">
                    <img src={github} title='Github' className='linkIcon'/>
                  </a>
                  <a href={resumePdf} target='_blank' className='item' rel="noreferrer">
                    <img src={resume} title='Resume' className='linkIcon'/>
                  </a>
                  <a href='mailto:christang522@gmail.com' target='_blank' className='item' rel="noreferrer">
                    <img src={email} title='Send an Email' className='linkIcon'/>
                  </a>
                </div>
              </div>
              <div id='aboutMe' className='bigItem'>
                Hello, my name is Christopher Tang and I am an Application Developer at <a href="http://www.componentwise.com/" target='_blank' className='links'>ComponentWise Solutions</a> based out of Perry Hall, MD.
                I have recently graduated from the University of Maryland in College Park, MD (Class of 2024). During my time at UMD I was lucky
                enough to study Computer Science as well as obtain minors in Sustainability Studies and Geospatial Information Science. Outside of
                the classroom I was also an active member of <a href='https://ktpumd.com/' target='_blank' className='links'>Kappa Theta Pi</a>. Post graduation I
                have dedicated myself to developing my talents as a full-stack developer through <Link className='links' to="/Projects">personal projects</Link> as well as work experience.
                <br/><br/>
                If I'm not working or coding I spend my free time working out and staying active. I love going to the gym or playing volleyball and lacrosse.
                I am in the market for new hobbies though and am always ready to try new things and expose myself to new ideas.
              </div>
            </div>
          </Fade>
        </header>
        <br /><br />
      </MantineProvider>
    </div>
  );
}

export default Home;
