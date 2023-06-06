import { Container } from 'react-bootstrap';
import './Blog.css';
import { FaLinkedin,FaTwitter,FaGithub,FaYoutubeSquare, FaBookmark} from 'react-icons/fa';
import {FcNext} from "react-icons/fc";
import { NavLink } from 'react-router-dom';
function Blog() {
  return (
    <div  className='parentdiv'> 
      <Container className='div1'>
      <div class='imgdiv'>

      <img alt="" src='https://media.licdn.com/dms/image/D5603AQEUnnUZdBILTw/profile-displayphoto-shrink_800_800/0/1678530059186?e=2147483647&v=beta&t=Ue88nJSLY_rcMhw13P1VRYPln_7qmgRM2dCFwlmWrcU' 
       className="image" />

      </div>
      <p className='hpdiv'>
       <div className='hpdiv1'>
        
    <h1  class="text-2xl  text-left text-white mr-3">
    Hey I'm Ninad.
  </h1>
  
  <p class='text-2xl text-left text-gray-400 '>
  I'm a passionate web developer.
  </p>
  </div>
  <div className='div2'>
    <a href='https://www.linkedin.com/in/ninad-vyas-b767491a3/'>
  <sapn class=' text-gray-400 text-lg flex hover:text-blue-500 cursor-pointer '>
  <FaLinkedin class='mt-1 fill-blue-500 mr-1'/>Linkedin
  </sapn>
  </a>

  <a href='https://youtube.com/@ninadvyas07'>
  <sapn class=' text-gray-400 text-lg flex hover:text-red-500 cursor-pointer '>
  <FaYoutubeSquare class='mt-1 fill-red-500 mr-1'/>Youtube
  </sapn>
  </a>

  <a href='https://twitter.com/NinadVyas87'>
  <sapn class=' text-gray-400 text-lg flex hover:text-[#1D9BF9] cursor-pointer  '>
  <FaTwitter class='mt-1 fill-[#1D9BF9] mr-1'/>Twitter
  </sapn>
  </a>

  <a href='https://github.com/NinadVyas'>
  <sapn class=' text-gray-400 text-lg flex hover:text-white cursor-pointer '>
  <FaGithub  class='mt-1 fill-white mr-1'/>Github
  </sapn>
  </a>
  
  </div>
  </p>
  <div class='p-5'></div>
  <div className='navstyletop'>
  <h1   class=' text-white text-2xl flex'>
  <FcNext  class='mt-1 '/><NavLink to="About" class='hover:text-[#1d8bf9]' >About</NavLink>
  </h1>
  <h1   class=' text-white text-2xl flex'>
  <FcNext  class='mt-1 '/><NavLink to="Viewblog" class='hover:text-[#1d8bf9]' >Blogs</NavLink>
  </h1>
  <h1   class=' text-white text-2xl flex'>
  <FcNext  class='mt-1 '/><NavLink to="Project" class='hover:text-[#1d8bf9]' >Project</NavLink>
  </h1>
  </div>
  <div className='navstyle'>
  <h1  class=' text-white text-3xl flex'>
  <FaBookmark  class='mt-1 '/>Recent Posts!
  </h1>
  
  </div>
  <div class='leading-6'>
  <a href='https://dev.to/ninadvyas/firebase-google-auth-firestore-in-react-js-10j'>
  <h1  class="text-2xl p-4 hover:text-[#1D9BF9] cursor-pointer text-left text-white ">
  Firebase Google Auth & Firestore In React JS 🚀
  </h1></a>
  <p class='text-gray-400 text-lg flex pl-5'>
  Jun 05 , 2023 
  </p>
  <a href='https://dev.to/ninadvyas/nextjs-134new-features-and-performance-boosts-with-17n0'>
  <h1  class="text-2xl p-4 hover:text-[#1D9BF9] cursor-pointer text-left text-white ">
  Next.js 13.4:New Features and Performance Boosts 🚀
  </h1></a>
  <p class='text-gray-400 text-lg flex pl-5'>
  May 31 , 2023 
  </p>
    <a href='https://dev.to/ninadvyas/exploring-react-routes-4oke'>
  <h1  class="text-2xl p-4 hover:text-[#1D9BF9] cursor-pointer text-left text-white ">
   Exploring React Routes 2023 🚀
  </h1></a>
  <p class='text-gray-400 text-lg flex pl-5'>
  May 22 , 2023 
  </p>

  
  </div>
  </Container>
  </div>
  
  );
}

export default Blog;
