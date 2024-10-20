import './EmailSection.css'

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
                    <li><a href="http://www.linkedin.com/in/lorenzjdr">LinkedIn</a></li>
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