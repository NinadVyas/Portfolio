import { NavLink } from "react-router-dom";
import "./About.css";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
function About() {
  return (
    <div className="parentdiv1">
      <Container className="div11">
        <Navbar />
        <div className="abt">
          <h1 class="text-4xl font-bold  text-left text-white mr-3">Hey I'm Ninad👋</h1>
          <p class="text-xl text-left text-gray-400 mt-5">
            I am pursing Bachelor's Degree in Computer Engineering, where I’m
            receiving solid foundation in major areas of the field, including
            App Development, Web Development, Manage Databse , Machine Learning
            and more.
          </p>
          <p class="text-xl text-left text-gray-400 mt-5">
            I am familiar with various software development tools and
            technologies as well as experience in database managment. I have a
            strong command in Web Development and it's tools, I continually
            expand my skills to stay up-to-date with the latest industry trends.
            I like develope apps as well and also I love to designing the UI &
            other stuff. If you ever want to bounce ideas off of me or even just
            have a chat about my favorite anime🥷🏻, please feel free to reach
            out.
          </p>
          <p class="text-xl text-left text-gray-400 mt-5">
            If you want to get in touch, I'm most responsive over{" "}
            <a
              class="text-blue-600 hover:underline"
              href="mailto:ninadvyas07@gmail.com"
            >
              Email
            </a>{" "}
            and I tend to be pretty active on{" "}
            <a
              class="text-blue-600 hover:underline"
              href="https://twitter.com/NinadVyas87"
            >
              Twitter
            </a>{" "}
            as well.
          </p>
          <p class="text-xl text-left text-gray-400 mt-5">
            In my meantime I Play {" "}
            <a
              class="text-blue-600 hover:underline"
              href="https://www.chess.com/member/ninadv_07"
            >
              Chess
            </a>{" "}
            & Like to capture some amazing{" "}
            <a
              class="text-blue-600 hover:underline"
              href="https://framesbyme.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frames
            </a>{" "}
            of life.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
