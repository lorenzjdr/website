import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {

  return (
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
            I grew up in the Phillippines and can speak Tagalog. 
            </li>
            <li className="mb-1">
            My hobbies include lifting, playing video games, reading Manga, and playing the guitar.
            </li>
            <li className="mb-1">
            I love cats and capybaras !!!!
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
            Implementing simple projects in Network Programming 
            </li>
            <li className="mb-1">
            Python & Rust
            </li>
          </ul>
          <p className="text-lg mb-2">
            Right now, I'm a current student at Texas State University. During my time:
          </p>
          <ul className='list-disc pl-5'>
            <li className="mb-1">
            I was a Software Engineer Intern at Walmart Global Tech. 
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
            That's a little bit a bout me. If you'd like to chat shoot me an email at lorenz.jdr@gmail.com ! Have a great day.
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
        </div>
      </footer>
    </div>
  );
}

export default Home;