import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-6xl font-bold mb-2">Lorenz De Robles</h1>
        <p className="text-gray-600 mt-4"></p>
      </header>
      
      <main>
        <div>
          <p className="text-lg mb-2">
            Section
          </p>
          <ul className="list-disc pl-5">
            <li className="mb-1">
             Item 1 
            </li>
            <li className="mb-1">
             Item 2 
            </li>
            <li className="mb-1">
             Item 2 
            </li>
          </ul>
          <p className="text-lg mb-2">
            Text
          </p>
        </div>
      </main>
      <hr className="mt-8 mb-6 border-gray-300" />
      
      <footer className="text-gray-500 text-sm">
        <div className="flex items-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-800 mr-2">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <span className="mx-1">|</span>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-800 mx-2">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;