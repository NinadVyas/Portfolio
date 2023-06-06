import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon";
import {FaCode} from "react-icons/fa";

const Projectlist = ({
  title,
  titleFormatted = title,
  description,
  link,
  logo,
}) => {
  return (
    <>
      <a
        class=" bg-transparent group flex items-center px-10 py-3 my-2 rounded-xl text-current 
         border border-gray-2 transition-colors duration-200  hover:bg-gray-900 focus-visible:bg-gray-2"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCode
          class="rounded-lg w-6"
          src={logo}
          alt={`${title} Logo`}
          width={28}
          height={28}
        />
        <div class="flex-1 pl-4">
          <span class="text-sm font-medium flex items-center">
            {titleFormatted}

            <ArrowUpRightIcon
              class="opacity-0 group-hover:opacity-100 w-3 h-3 ml-1 transition-opacity duration-200"
              strokeWidth={2}
              focusable="false"
            />
          </span>
          <p class="text-sm text-gray-9">{description}</p>
        </div>
      </a>
    </>
  );
};

export default Projectlist;
