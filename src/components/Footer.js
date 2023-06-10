import React, { PureComponent } from 'react'
import {
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaYoutubeSquare,
  } from "react-icons/fa";
export class Footer extends PureComponent {
  render() {
    return (
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
    )
  }
}

export default Footer
