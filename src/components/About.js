import "./About.css";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutubeSquare,
} from "react-icons/fa";
function About() {
  return (
    <div className="parentdiv">
      <div className="div1">
        <div class="p-10"></div>
        <div>
          <h1 class="text-4xl  text-left text-white mr-3">Hey I'm Ninad👋</h1>
          <p class="text-xl text-left text-gray-400 mt-5">
            I derive immense satisfaction from bridging gaps and making
            connections using cutting-edge technology.
          </p>
          <p class="text-xl text-left text-gray-400 mt-5">
          I am driven about creating
            innovative and user-friendly websites. With a strong foundation in
            HTML, CSS, and JavaScript, I continually expand my skills to stay
            up-to-date with the latest industry trends. I thrive on challenges
            and seek opportunities to apply my knowledge in real-world projects,
            aiming to make a positive impact through my web development
            endeavors.
          </p>
          <p class="text-xl text-left text-gray-400 mt-5">
          If you want to get in touch, I'm most responsive over <a class='text-blue-600' href="mailto:ninadvyas07@gmail.com">Email</a> and I tend to be pretty active on <a class='text-blue-600' href='https://twitter.com/NinadVyas87'>Twitter</a> as well.
          </p>
        </div>

        <div class="p-5"></div>
      </div>
    </div>
  );
}

export default About;
