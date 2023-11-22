import logo from './logo.svg';
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Contact from './Contact';
import Location from './Location';
import About from './About';
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
        <Link to="/">Home</Link> 
        </li>
        <li>
        <Link to="/Contact">Contact</Link>
        </li>
        <li>
        <Link to="/Location">Location</Link>
        </li>
        </ul>
      </nav>
         <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Location" element={<Location />} />
          
         </Routes>

    </div>
  );
}

export default App;
