import './App.css';
import { FaLinkedin,FaTwitter,FaGithub,FaYoutubeSquare } from 'react-icons/fa';
import { FiEdit } from "react-icons/fi";
import Blog from "../src/components/Blog.js"

function App() {
  return (
    <div  className='parentdiv'> 
      <div className='div1'>
      <div class='p-10'></div>
      <img  src='https://media.licdn.com/dms/image/D5603AQEUnnUZdBILTw/profile-displayphoto-shrink_800_800/0/1678530059186?e=2147483647&v=beta&t=Ue88nJSLY_rcMhw13P1VRYPln_7qmgRM2dCFwlmWrcU' 
       className="image" />
       <div class=' sapce-x-2'>
    <h1  class="text-2xl  text-left text-white mr-3">
    Hey I'm Ninad.
  </h1>
  <p class='text-2xl text-left text-gray-400'>
  I am a passionate web developer who turns innovative ideas into reality with clean and efficient code.
  </p>
  </div>
  <div className='div2'  >
    <a href='https://www.linkedin.com/in/ninad-vyas-b767491a3/'>
  <sapn class=' text-gray-400 text-xl flex hover:text-blue-500 cursor-pointer '>
  <FaLinkedin class='mt-1 fill-blue-500'/>Linkedin
  </sapn>
  </a>
  <span class='p-2'>
  </span>
  <a href='https://youtube.com/@ninadvyas07'>
  <sapn class=' text-gray-400 text-xl flex hover:text-red-500 cursor-pointer '>
  <FaYoutubeSquare class='mt-1 fill-red-500'/>Youtube
  </sapn>
  </a>
  <span class='p-2'>
  </span>
  <a href='https://twitter.com/NinadVyas87'>
  <sapn class=' text-gray-400 text-xl flex hover:text-[#1D9BF9] cursor-pointer  '>
  <FaTwitter class='mt-1 fill-[#1D9BF9]'/>Twitter
  </sapn>
  </a>
  <span class='p-2'>
  </span>
  <a href='https://github.com/NinadVyas'>
  <sapn class=' text-gray-400 text-xl flex hover:text-white cursor-pointer '>
  <FaGithub  class='mt-1 fill-white'/>Github
  </sapn>
  </a>
  </div>
  <div class='p-5'></div>
  <div class='m-5 '>
  <h1 onClick={Blog} class=' text-white text-2xl flex '>
  <FiEdit  class='mt-1 '/>Blogs
  </h1>
  
  </div>
  <div class='leading-6'>
    <a href='https://dev.to/ninadvyas/exploring-react-routes-4oke'>
  <h1  class="text-2xl p-4 hover:text-[#1D9BF9] cursor-pointer text-left text-white ">
   Exploring React Routes 2023 🚀
  </h1></a>
  <p class='text-gray-400 text-lg flex pl-5'>
  May 22 , 2023 
  </p>
  <a href='https://dev.to/ninadvyas/nextjs-134new-features-and-performance-boosts-with-17n0'>
  <h1  class="text-2xl p-4 hover:text-[#1D9BF9] cursor-pointer text-left text-white ">
  Next.js 13.4:New Features and Performance Boosts 🚀
  </h1></a>
  <p class='text-gray-400 text-lg flex pl-5'>
  May 31 , 2023 
  </p>
  </div>
  </div>
  </div>
  
  );
}

export default App;
