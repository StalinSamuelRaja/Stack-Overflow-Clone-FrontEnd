import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/topBar'
import MainSpace from './components/mainSpace'
import LandingPage from './components/landingPage'
import SignUpPage from './components/login-signup/SignUpPage'
import LoginPage from './components/login-signup/LoginPage'
import Tags from './components/tags/tags'
import View_QA from './components/view_qa'
import { data } from 'autoprefixer'
import { getAllQuestion } from './helpers/Q_helper'
import { Route, Routes } from 'react-router-dom'



function App() {
//   const [quesAnsw, setQuesAnsw] = useState()

// useEffect(()=>{
//   getAllQuestion().then((Quest)=>{
//     setQuesAnsw(Quest)
// })
// })

  return (
    <div className='w-full '>
      <Routes>
      
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/ques/all" element={<MainSpace/>}/>
        
      </Routes>
      
      
      {/* <MainSpace/> */}
      {/* <View_QA/> */}
      {/* <SignUpPage/> */}
      {/* <LoginPage/> */}
      {/* <Tags/> */}
    </div>
   
  )
}

export default App
