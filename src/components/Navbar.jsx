import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/over">Over</Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>  
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="nav-link" to="/shop">Alle producten</Link>  
                    </li>
                    <li>
                        <Link className="nav-link" to="/specifiekproduct">Speicifek product</Link>  
                    </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Auteurs
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="nav-link" to="/auteurs">Alle auteurs</Link>  
                    </li>
                    <li>
                        <Link className="nav-link" to="/specifiekauteur">Speicifek Auteur</Link>  
                    </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dashboard
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>  
                    </li>
                    {/* <li>
                        <Link className="nav-link" to="/adminpanel">Admin panel</Link>  
                    </li>
                    <li>
                        <Link className="nav-link" to="/schrijverspanel">Schrijvers panel</Link>  
                    </li>
                    <li>
                        <Link className="nav-link" to="/klantenpanel">Klanten panel</Link>  
                    </li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login dropdown
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="nav-link" to="/login">Login</Link>  
                    </li>
                    <li>
                        <Link className="nav-link" to="/register">Register</Link>  
                    </li>
                    <li>
                        <Link className="nav-link" to="/wachtwoordvergeten">WW Vergeten</Link>  
                    </li>
                    <li>
                        <Link className="nav-link" to="/wachtwoordreset">WW Reset</Link>  
                    </li>
                    <li>
                        <Link className="nav-link" to="/emailverificatie">Email verificatie</Link>  
                    </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;