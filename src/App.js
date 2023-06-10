import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Blog from './components/Blog';
import About from './components/About';
import Viewblog from './components/Viewblog';
import Project from './components/Project';
import Projectlist from './components/Projectlist';
import Photo from './components/Photo';
import Navigation from "./components/Navigation";



function App() {
    return(
      <BrowserRouter>
      <Routes>


        <Route path='/' element={<Blog/>} />
        <Route path='About' element={<About/>} />
        <Route path='Photo' element={<Photo/>} />
        <Route path='Viewblog' element={<Viewblog/>} />
        <Route path='Project' element={<Project/>} />
        <Route path='Projectlist' element={<Projectlist/>} />
        <Route path='Navigation' element={<Navigation/>} />        


      </Routes>
      </BrowserRouter>
    )
}

export default App
