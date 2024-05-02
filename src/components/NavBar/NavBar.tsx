import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar()
{
   return (
   <>
   <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
         <a className="navbar-brand">Lorenz De Robles</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
              <Link className="nav-link active" to="/website/blog">Blog</Link>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/lorenzjdr">GitHub</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href= "https://www.linkedin.com/in/lorenz-de-robles/" >LinkedIn</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
   </> 
   );  
}

export default NavBar;