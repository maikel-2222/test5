  import './App.css'
  import Navbar from './components/Navbar'

  // Main website imports
  import Home from './main/pages/Home'
  import Over from './main/pages/Over'
  import Contact from './main/pages/Contact'
  // einde Main website imports

  // Shop imports
  import Shop from './Shop/pages/Shop'
  import SpecifiekProduct from './Shop/pages/specifiekProduct'
  // einde Shop imports

  // Auteurs imports
  import Auteurs from './auteurs/pages/Auteurs'
  import SpecifiekeAuteur from './auteurs/pages/specifiekeAuteur'
  // einde Shop imports

  // Dashboard imports
  import Dashboard from './dashboard/pages/dashboard'
  // import AdminPanel from './dashboard/pages/adminPanel'
  // import SchrijversPanel from './dashboard/pages/schrijversPanel'
  // import KlantenPanel from './dashboard/pages/klantenPanel'
  // einde Dashboard imports

  // Authentication imports
  import Login from './Authentication/pages/Login'
  import Register from './Authentication/pages/Register'
  import PasswordForget from './Authentication/pages/passwordForget'
  import PasswordReset from './Authentication/pages/passwordReset'
  import EmailVerification from './Authentication/pages/emailVerification'
  // einde Authentication imports

  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

  function App() {
    return (
      <>
        <Router>
          <Navbar /> 
          <div className="content">
            <Routes>
              {/* Main website */}
              <Route 
                exact path="/" 
                element={ <Home/> }>
              </Route>
              <Route 
                exact path="/over" 
                element={ <Over/> }>
              </Route>
              <Route 
                exact path="/contact" 
                element={ <Contact/> }>
              </Route>
              {/* einde Main website */}

              {/* Shop */}
              <Route 
                exact path="/shop" 
                element={ <Shop/> }>
              </Route>
              <Route 
                exact path="/specifiekproduct" 
                element={ <SpecifiekProduct/> }>
              </Route>
              {/* einde Shop */}

              {/* Auteurs */}
              <Route 
                exact path="/auteurs" 
                element={ <Auteurs/> }>
              </Route>
              <Route 
                exact path="/specifiekauteur" 
                element={ <SpecifiekeAuteur/> }>
              </Route>
              {/* einde Shop */}

              {/* Dashboard */}
              <Route 
                exact path="/dashboard" 
                element={ <Dashboard/> }>
              </Route>
              {/* <Route 
                exact path="/adminpanel" 
                element={ <AdminPanel/> }>
              </Route>
              <Route 
                exact path="/schrijverspanel" 
                element={ <SchrijversPanel/> }>
              </Route>
              <Route 
                exact path="/klantenpanel" 
                element={ <KlantenPanel/> }>
              </Route> */}
              {/* Einde dashboard */}
              
              {/* Authentication */}
              <Route 
                exact path="/login" 
                element={ <Login/> }>
              </Route>
              <Route 
                exact path="/register" 
                element={ <Register/> }>
              </Route>
              <Route 
                exact path="/wachtwoordvergeten" 
                element={ <PasswordForget/> }>
              </Route>
              <Route 
                exact path="/wachtwoordreset" 
                element={ <PasswordReset/> }>
              </Route>
              <Route 
                exact path="/emailverificatie" 
                element={ <EmailVerification/> }>
              </Route>
              {/* Einde authentication */}
            </Routes>
          </div>
        </Router>
      </>
    );
  }

export default App
