import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import Projectlist from './Projectlist';

const Page = () => {
  return (
    <div className="max-w-2xl	mx-auto pt-12 md:pt-32 px-8 pb-8">
      <h1 className="text-3xl mb-4 tracking-tight text-white">Some projects that I’ve built</h1>
      <div>
         <Projectlist
          title="RoomRealm"
          description="A chat room where everybody can talk about anything!"
          logo="/assets/projects/rr.png"
          link="https://github.com/NinadVyas/Roomrealm"
        />
        <Projectlist
          title="College Space"
          description="A platform that provides docs and projects to learn"
          logo="/assets/projects/doc.png"
          link="https://github.com/NinadVyas/Collage-Space"
        />
         <Projectlist
          title="Quiz Web"
          description="A Web App in which user can take quiz and see result instantly"
          logo="/assets/projects/quiz.png"
          link="https://github.com/NinadVyas/quizweb"
        />
        <a
          href="https://github.com/NinadVyas"
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex items-center mt-2 px-2 py-1.5 text-sm font-medium rounded-md 
          transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10 text-blue-500"
        >
          View more on GitHub
          <ChevronRightIcon className="inline w-4 h-4 ml-1" strokeWidth={2} />
        </a>
      </div>
      <h1 className="text-3xl mb-4 mt-7 tracking-tight text-white">Skills</h1>
      <div className="flex flex-wrap">
        {[
          'JavaScript',
          'React.js',
          'Next.js',
          'Bootstarp',
          'HTML',
          'CSS',
          'PHP',
          'Python',
          'JAVA',
          'Android',
          'React Native',
          'Git',
          'UI Design',
          'Figma',
          'Canva'
        ].map((skill) => (
          <div key={skill} className="px-4 py-2 rounded-lg text-sm font-semibold border text-white border-gray-3 mr-2 mb-2">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
