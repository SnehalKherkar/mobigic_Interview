import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUpPage from './loginSignUp/SignUpPage'
import LoginPage from './loginSignUp/LoginPage'
import UploadFile from './files/UploadFile'

const PageLayout = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<SignUpPage/>} />
        <Route path='/login' element ={<LoginPage/>} />
        <Route path='/fileupload' element ={<UploadFile/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default PageLayout
