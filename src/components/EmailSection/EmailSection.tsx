import './EmailSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const EmailSection = () =>
{
   return (
      <>
         <div className='top'>
            <div className='abt' >
               <p>
                  Hi! I hope you're having a great day so far.<br></br> 
                  I'm trying to update this when I can. 
               </p>
            </div>
            <div className="contact">
                <p>Contact Me:</p>
                <ul>
                    <li>Email: lorenz.jdr@gmail.com</li>
                        <a href="http://www.linkedin.com/in/lorenzjdr" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="4x" />
                        </a>
                        <a href="http://www.github.com/lorenzjdr" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="4x" /> 
                        </a>
                </ul>
            </div>
         </div>
            <div className='bot'>
                <p>&copy;2024- Lorenz De Robles</p>
            </div>
      </>
   );
}

export default EmailSection;