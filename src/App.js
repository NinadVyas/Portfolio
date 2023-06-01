import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Blog from './components/Blog';
import About from './components/About';

function App() {
    return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blog/>} />
        <Route path='About' element={<About/>} />

      </Routes>
      </BrowserRouter>
    )
}

export default App
