import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Home() {

  return (
    <div className="min-h-screen bg-white">
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-6xl font-bold mb-2">Lorenz De Robles</h1>
        <p className="text-gray-600 mt-4">Learning...</p>
      </header>
      
      <main>
        <div>
          <p className="text-lg mb-2">
            Welcome! This page is where you'll learn about me. 
          </p>
          <ul className="list-disc pl-5">
            <li className="mb-1">
            I grew up in the <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-red-600 to-yellow-400 hover:from-red-600 hover:via-blue-600 hover:to-yellow-400 transition-all duration-500 animate-pulse">Philippines</span> and can speak Tagalog. 
            </li>
            <li className="mb-1">
            My hobbies include lifting, playing video games, and reading Manga.
            </li>
            <li className="mb-1">
            I love cats and capybaras <span className="inline-block animate-bounce text-pink-500 font-bold">!!!!</span>
            </li>
          </ul>
          <p className="text-lg mb-2">
            I also love studying! I'm building/learning about:
          </p>
          <ul className="list-disc pl-5">
            <li className="mb-1">
            Operating Systems and Parallel Programming
            </li>
            <li className="mb-1">
              Simple projects in Network Programming
                <span className="line-through text-xs ml-1">that sometimes work LOL</span>
            </li>
            <li className="mb-1">
            Python & recently have been learning Rust  🤠
            </li>
          </ul>
            <p className="text-lg mb-2">
            Right now, I'm a current student at Texas State University
            . During my time:
            </p>
          <ul className='list-disc pl-5'>
            <li className="mb-1">
            I was a <span className='underline'>Software Engineer Intern</span> at Walmart Global Tech. 🛒 
            </li>
            <li className="mb-1">
            I did Computer Vision research to help those that are visually impaired. 
            </li>
            <li className="mb-1">
            Built a community at .EXE as President for ~2 years. 
            </li>
          </ul>
          <hr className="mt-8 mb-6 border-gray-300" />
          <p className="text-lg mb-2">
            That's a little bit about me. Feel free to send me a message. Have a great rest of your day !
          </p>
        </div>
      </main>
      <hr className="mt-8 mb-6 border-gray-300" />
      
      <footer className="text-gray-500 text-sm">
        <div className="flex items-center">
          <a href="https://github.com/lorenzjdr" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-800 mr-2">
            <FontAwesomeIcon icon={faGithub} /> 
          </a>
          <span className="mx-1">|</span>
            <a href="https://linkedin.com/in/lorenzjdr/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-800 mx-2">
            <FontAwesomeIcon icon={faLinkedin} /> 
            </a>
            <span className="mx-1">|</span>
            <a href="mailto:lorenzjdr@gmail.com" className="text-xl hover:text-gray-800 mx-2">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Home;