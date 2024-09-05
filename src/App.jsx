import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import {Text} from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom'

// 100 w
function App() {

  // routes

  // Chakra ui - different components
    // look for cards
  return (

    <>
    <Routes>
      <Route path='/' element='{<Design/>}'/>
    </Routes>
      {/* <p>me? im mature</p>
      <Text fontSize = '6xxl' textAlign = "center">Hello World</Text> */}
    </>
  )
}

export default App
