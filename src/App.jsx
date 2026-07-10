
import './App.css'
import { Login } from './Features/Authentication/Login'
import { Signup } from './Features/Authentication/Signup'
// import { Parent } from './Hooks/UseContextHook/Parent'
// import Cards from './Components/Cards'
// import { Counter } from './Components/Counter'
// import { Footer } from './Components/Footer'
// import { MultimediaandStyling } from './Components/MultimediaandStyling'
// import { Navbar } from './Components/Navbar'
// import { Navbar1 } from './Components/Navbar1'
// import { Parent } from './Components/Parent'
import { MainLayout } from './Layout/MainLayout'

import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
    {/* <center>
    <h1>this is home page</h1>
    </center> */}
    {/* <Navbar/>
    <Counter/>
    <Footer/> */}
    {/* <MultimediaandStyling/> */}
     {/* <Navbar1/> */}
    {/* <Cards/>
    <Footer/> 
    <Parent/> */}
    {/* <MainLayout/> */}
    {/* <Parent/> */}
      
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>

            <Route path='/*' element={<MainLayout/>}></Route>
        </Routes>

    </>
  )
}

export default App
