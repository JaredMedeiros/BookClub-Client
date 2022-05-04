import Mainblock from './Components/Mainblock/Mainblock'
import Workblock from './Components/Workblock/Workblock'
import Contactblock from './Components/Contactblock/Contactblock'
import LogoAnimation from './Components/LogoAnimation/LogoAnimation'
import GridWave from './Components/GridWave/GridWave'
import './App.scss'


function App() {
  return (
  <div className = 'main'>
  <Mainblock className = 'section'/>
  <Workblock className = 'section'/>
  <LogoAnimation />
  <Contactblock className = 'section'/>
  {/* <GridWave /> */}
  </div>
  )     
}

export default App;
