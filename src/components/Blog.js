import '../components/Blog.css';
import { FiEdit } from "react-icons/fi";

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
  
  <div class='p-5'></div>
  <div class='m-5 '>
  <h1 class=' text-white text-2xl flex '>
  <FiEdit  class='mt-1 '/>Blogs
  </h1>
  
  </div>
  <div class='leading-6'>
  <h1  class="text-2xl p-4 hover:text-[#1D9BF9] cursor-pointer text-left text-white ">
    🚀How To Start With React JS In 2023
  </h1>
  <p class='text-gray-400 text-lg flex pl-5'>
  May 07 , 2023 
  </p>
  </div>
  </div>
  </div>
  
  );
}

export default App;
