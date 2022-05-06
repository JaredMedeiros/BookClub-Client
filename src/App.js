import Mainblock from './Components/Mainblock/Mainblock'
import Workblock from './Components/Workblock/Workblock'
import Contactblock from './Components/Contactblock/Contactblock'
import LogoAnimation from './Components/LogoAnimation/LogoAnimation'
import GridWave from './Components/GridWave/GridWave'
import './App.scss'
import React, { useRef } from 'react' 


function App() {

  const workOnClickRef = useRef(null);
  const contactOnClickRef = useRef(null);

  const scrollEffect = ( targetRef ) => {
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
  <div className = 'main'>
    <div className = 'tabs'>
            <ul>
                <li onClick = { () => scrollEffect(workOnClickRef)}><i>work, </i></li>
                <li onClick = { () => scrollEffect(contactOnClickRef)}>contact</li>
            </ul>
        </div>  
    <Mainblock />
    <GridWave />
    <Workblock ref = { workOnClickRef }/>
    <LogoAnimation />
    <Contactblock ref = { contactOnClickRef } />
  </div>
  )     
}

export default App;
