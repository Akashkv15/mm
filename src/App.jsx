import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'animate.css';
import Headersection from './components/Headersection'
import Mainbodysection from './components/Mainbodysection'
import Mainbodysectiontwo from './components/Mainbodysectiontwo';
import CarouselFadeExample from './components/CarouselFadeExample';
import Mainbodysectionthree from './components/Mainbodysectionthree';
import Mainbodysectionfour from './components/Mainbodysectionfour';
import Mainbodysectionfive from './components/Mainbodysectionfive';
import Mainbodysectionsix from './components/Mainbodysectionsix';
import Mainbodyseven from './components/Mainbodyseven';









function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Headersection/>
     <Mainbodysection/>
     <Mainbodysectiontwo/>
     <CarouselFadeExample/>
     <Mainbodysectionthree/>
     <Mainbodysectionfour/>
     <Mainbodysectionfive/>
     <Mainbodysectionsix/>
     <Mainbodyseven/>
    </>
  )
}

export default App
