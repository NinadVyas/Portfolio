import './App.css';
import { FaLinkedin,FaTwitter,FaGithub,FaYoutube,FaYoutubeSquare } from 'react-icons/fa';


function App() {
  return (
    <div  className='parentdiv'> 
      <div className='div1'>
      <div class='p-10'></div>
      <img  src='https://media.licdn.com/dms/image/D5603AQEUnnUZdBILTw/profile-displayphoto-shrink_800_800/0/1678530059186?e=2147483647&v=beta&t=Ue88nJSLY_rcMhw13P1VRYPln_7qmgRM2dCFwlmWrcU' 
       className="image" />
    <h1  class="text-2xl text-left text-white mr-3">
    Hey I'm Ninad.
  </h1>
  <p class='text-2xl text-left text-gray-400'>
  I am a passionate web developer who turns innovative ideas into reality with clean and efficient code.
  </p>
 
  <div class='space-x-8 flex '  >
  <sapn class=' text-gray-400 text-xl flex hover:text-blue-500 cursor-pointer font-mono'>
  <FaLinkedin class='mt-1 fill-blue-500'/>Linkedin
  </sapn>
  <sapn class=' text-gray-400 text-xl flex hover:text-red-500 cursor-pointer font-mono'>
  <FaYoutubeSquare class='mt-1 fill-red-500'/>Youtube
  </sapn>
  <sapn class=' text-gray-400 text-xl flex hover:text-[#1D9BF9] cursor-pointer font-mono'>
  <FaTwitter class='mt-1 fill-[#1D9BF9]'/>Twitter
  </sapn>
  <sapn class=' text-gray-400 text-xl flex hover:text-white cursor-pointer font-mono'>
  <FaGithub  class='mt-1 fill-white'/>Github
  </sapn>
  {/* <sapn class=' text-gray-400 text-2xl'>
    Blog
  </sapn>
  <sapn class=' text-gray-400 text-2xl float-right'>
    <FaTwitter calss=''/>Twitter
  </sapn>
  <sapn class=' text-gray-400 text-2xl'>
  <FaGithub calss=''/> Github
  </sapn> */}
  </div>
  </div>
  </div>
  );
}

export default App;
