import './EmailSection.css'

const EmailSection = () =>
{
   return (
      <>
        <footer>
         <div className='top'>
            <div className='abt' >
               <p>
                  My website is a work in progress...
               </p>
            </div>
            <div className="contact">
                <p>Contact Me:</p>
                <ul>
                    <li>Email: lorenz.jdr@gmail.com</li>
                    <li><a href="https://www.linkedin.com/in/lorenz-de-robles/">LinkedIn</a></li>
                </ul>
            </div>
         </div>
            <div className='bot'>
                <p>&copy;2024- Lorenz De Robles</p>
            </div>
        </footer> 
      </>
   );
}

export default EmailSection;