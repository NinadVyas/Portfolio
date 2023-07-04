import { Container } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import "./Viewblog.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Viewblog() {
  return (
    <div className="parentdiv22">
      <Container className="div122">
        <Navbar />
        <div class="m-5 flex gap-32">
          <h1 class=" text-white text-4xl flex font-extrabold">
            <FiEdit class=" " />
            Blogs
          </h1>
        </div>
        <div class="leading-62">
          <div class="">
            <h1 class="text-xl p-4 text-left text-white ">
              <a
                href="https://dev.to/ninadvyas/key-points-from-5-am-club-3fj4"
                class=" hover:text-[#1D9BF9] cursor-pointer"
              >
                Key Points From "5 A.M Club"
              </a>
            </h1>
            <p class="text-gray-400 text-md flex pl-5">Jun 15 , 2023</p>
          </div>
          <h1 class="text-xl p-4 text-left text-white ">
            <a
              href="https://dev.to/ninadvyas/the-top-programming-tools-for-2023-boost-your-development-efficiency-cni"
              class=" hover:text-[#1D9BF9] cursor-pointer"
            >
              The Best Development Tools In 2023 🚀
            </a>
          </h1>
          <p class="text-gray-400 text-md flex pl-5">Jun 07 , 2023</p>
          <h1 class="text-xl p-4  text-left text-white ">
            <a
              href="https://dev.to/ninadvyas/firebase-google-auth-firestore-in-react-js-10j"
              class="hover:text-[#1D9BF9] cursor-pointer"
            >
              Firebase Google Auth & Firestore In React JS 🚀
            </a>
          </h1>

          <p class="text-gray-400 text-md flex pl-5">Jun 05 , 2023</p>
          <h1 class="text-xl p-4 text-left text-white ">
            <a
              href="https://dev.to/ninadvyas/nextjs-134new-features-and-performance-boosts-with-17n0"
              class="hover:text-[#1D9BF9] cursor-pointer "
            >
              Next.js 13.4:New Features and Performance Boosts🚀
            </a>
          </h1>

          <p class="text-gray-400 text-md flex pl-5">May 31 , 2023</p>
          <h1 class="text-xl p-4  text-left text-white ">
            <a
              href="https://dev.to/ninadvyas/exploring-react-routes-4oke"
              class="hover:text-[#1D9BF9] cursor-pointer"
            >
              Exploring React Routes 2023 🚀
            </a>
          </h1>

          <p class="text-gray-400 text-md flex pl-5">May 22 , 2023</p>
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default Viewblog;
