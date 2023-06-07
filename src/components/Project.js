import "./Project.css";
import { Container } from "react-bootstrap";
import Projectlist from './Projectlist';
import {FcNext} from "react-icons/fc";

function Project() {
  return (
    <div className="parentdiv11">
      <Container className="div111">
        
        <div>
            <h1 class="text-2xl  text-left text-white mr-3">
            Some projects that I’ve built
            </h1>
        </div>
        <div class='text-white'>
        <Projectlist
          title="College Space"
          description="The docs and projects provider platform"
          logo="hello"
          link="https://github.com/NinadVyas/Collage-Space"
        />
         <Projectlist
          title="Quiz Web"
          description="A Web App in which user can take quiz and see result instantly"
          logo="/assets/projects/firstisrael.jpg"
          link="https://github.com/NinadVyas/quizweb"
        />
        <a
          href="https://github.com/NinadVyas"
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex items-center mt-2 px-2 py-1.5 text-sm font-medium rounded-md transition-colors 
          duration-200 hover:bg-link/10 focus-visible:bg-link/10 text-blue-400"
        >
          View more on GitHub
        <FcNext class=' fill-blue-600'/>
         </a>
      </div>
      </Container>
    </div>
  );
}

export default Project
