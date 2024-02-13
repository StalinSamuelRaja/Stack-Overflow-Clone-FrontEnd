import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/topBar'
import MainSpace from './components/mainSpace'
import LandingPage from './components/landingPage'
// import SignUpPage from './components/login-signup/SignUpPage'
// import LoginPage from './components/login-signup/LoginPage'
import Tags from './components/tags/tags'
import View_QA from './components/view_qa'
import { data } from 'autoprefixer'
import { getAllQuestion } from './helpers/Q_helper'
import { Route, Routes } from 'react-router-dom'
import AskQuestion from './components/askQuestion'
import Questions from './components/question'
import { useDispatch } from 'react-redux'
import { getAllAnswer } from './helpers/A_helper'
import { updatequestioninfo } from './reducers/questionreducer'
import { updateanswerinfo } from './reducers/answerreducer'

import RegisterUser from './components/Register'
import Signinuser from './components/Signin'



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllQuestion().then((data) => dispatch(updatequestioninfo(data)));
    // getAllAnswer().then((data)=>dispatch(updateanswerinfo(data)))
  }, [dispatch]);

  return (
    <div className='w-full '>
      
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/ques/all" element={<MainSpace/>}/>
        <Route path="/ask/ques" element={<AskQuestion/>}/>
        <Route path="/view/ques/:questionId" element={<View_QA/>}/>
        <Route path="/login" element={<Signinuser/>}/>
        <Route path="/signup" element={<RegisterUser/>}/>
        <Route path="/tags" element={<Tags/>}/>
      </Routes>
     
    </div>
   
  )
}

export default App
