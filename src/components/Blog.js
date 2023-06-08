import { Container} from "react-bootstrap";
import Lottie,{LottieRefCurrentProps} from "lottie-react";
import "./Blog.css";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutubeSquare,

} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { FcNext } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import Mail from "./assets/mail1.json";
import { useRef } from "react";

function Blog() {
  const mailref = useRef<LottieRefCurrentProps>(null)
  return (
    <div className="parentdiv">
      <Container className="div1">
        <div class="imgdiv">
          <img
            alt=""
            src="https://media.licdn.com/dms/image/D5603AQEUnnUZdBILTw/profile-displayphoto-shrink_800_800/0/1678530059186?e=2147483647&v=beta&t=Ue88nJSLY_rcMhw13P1VRYPln_7qmgRM2dCFwlmWrcU"
            className="image"
          />
        </div>
        <p className="hpdiv">
          <div className="hpdiv1">
            <h1 class="text-2xl  text-left text-white mr-3">Hey I'm Ninad.</h1>

            <p class="text-2xl text-left text-gray-400 ">
              I'm a passionate software engineer.
            </p>
          </div>
          <div className="div2">
            <a
              href="https://www.linkedin.com/in/ninad-vyas-b767491a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sapn class=" text-gray-400 text-lg flex hover:text-blue-500 cursor-pointer ">
                <FaLinkedin class="mt-1 fill-blue-500 mr-1" />
                Linkedin
              </sapn>
            </a>

            <a
              href="https://youtube.com/@ninadvyas07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sapn class=" text-gray-400 text-lg flex hover:text-red-500 cursor-pointer ">
                <FaYoutubeSquare class="mt-1 fill-red-500 mr-1" />
                Youtube
              </sapn>
            </a>

            <a
              href="https://twitter.com/NinadVyas87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sapn class=" text-gray-400 text-lg flex hover:text-[#1D9BF9] cursor-pointer  ">
                <FaTwitter class="mt-1 fill-[#1D9BF9] mr-1" />
                Twitter
              </sapn>
            </a>

            <a
              href="https://github.com/NinadVyas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sapn class=" text-gray-400 text-lg flex hover:text-white cursor-pointer ">
                <FaGithub class="mt-1 fill-white mr-1" />
                Github
              </sapn>
            </a>
          </div>
        </p>
        <div class="p-5"></div>
        <div className="navstyletop">
          <h1 class=" text-white text-2xl flex font-semibold">
            <FcNext class="mt-1 " />
            <NavLink to="About" class="">
              About
            </NavLink>
          </h1>
          <h1 class=" text-white text-2xl flex font-semibold">
            <FcNext class="mt-1 " />
            <NavLink to="Viewblog" class="hover:text-[#1d8bf9]">
              Blogs
            </NavLink>
          </h1>
          <h1 class=" text-white text-2xl flex font-semibold">
            <FcNext class="mt-1 " />
            <NavLink to="Project" class="hover:text-[#1d8bf9]">
              Projects
            </NavLink>
          </h1>
        </div>
        <div class="flex ml-3 mt-5">          
        <a href="mailto:ninadvyas07@gmail.com">
          <div class='flex'>
          <Lottie onComplete={() => {
             mailref.current?.goToAndPlay(48,true)
          }} lottieRef={mailref} loop={false} class=" w-10" animationData={Mail} />
          <h1 class=" flex text-2xl text-blue-500 hover:underline mt-2">
            {" "}
            Let's Connect! 
          </h1>
          </div>
          </a>
        </div>
       
        <div className="navstyle">
          <h1 class=" text-white text-2xl flex">
            <FcNext class="mt-1" /><FcNext class="mt-1" />

            Recent Posts!
          </h1>
           
        </div>
        <div class="leading-6">
          <h1 class="text-2xl p-4 text-left text-white ">
            <a
              href="https://dev.to/ninadvyas/the-top-programming-tools-for-2023-boost-your-development-efficiency-cni"
              class=" hover:text-[#1D9BF9] cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Best Development Tools In 2023 🚀{" "}
            </a>
          </h1>
          <p class="text-gray-400 text-lg flex pl-5">Jun 07 , 2023</p>
          <a
            href="https://dev.to/ninadvyas/firebase-google-auth-firestore-in-react-js-10j"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h1 class="text-2xl p-4 hover:text-[#1D9BF9] cursor-pointer text-left text-white ">
              Firebase Google Auth & Firestore In React JS 🚀
            </h1>
          </a>
          <p class="text-gray-400 text-lg flex pl-5">Jun 05 , 2023</p>
          <a
            href="https://dev.to/ninadvyas/nextjs-134new-features-and-performance-boosts-with-17n0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h1 class="text-2xl p-4 hover:text-[#1D9BF9] cursor-pointer text-left text-white ">
              Next.js 13.4:New Features and Performance Boosts 🚀
            </h1>
          </a>
          <p class="text-gray-400 text-lg flex pl-5">May 31 , 2023</p>

          <NavLink
            to="Viewblog"
            rel="noopener noreferrer"
            className="
          inline-flex items-center mt-7 px-2 py-1.5 ml-2.5 text-lg h-5 rounded-md hover:bg-[#2f4a69] text-[#4385d7]"
          >
            View more Posts
            <FiChevronRight class=" text-[#4385d7]" />
          </NavLink>
          <div class="flex ml-5 mt-10">
            <a href="#/">
              <sapn class=" text-gray-300 text-lg flex hover:text-blue-500 cursor-pointer ">
                @NinadVyas
              </sapn>
            </a>
            <div className="btmbar">
              <a href="https://www.linkedin.com/in/ninad-vyas-b767491a3/">
                <FaLinkedin class="mt-0.5 fill-gray-300 mr-1 hover:fill-blue-500" />
              </a>
              <a href="https://youtube.com/@ninadvyas07">
                <FaYoutubeSquare class="mt-0.5 fill-gray-300 mr-1 hover:fill-red-500" />
              </a>
              <a href="https://twitter.com/NinadVyas87">
                <FaTwitter class="mt-0.5 fill-gray-300 mr-1 hover:fill-[#1D9BF9]" />
              </a>
              <a href="https://github.com/NinadVyas">
                <FaGithub class="mt-0.5 fill-gray-300 mr-1 hover:fill-white" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
