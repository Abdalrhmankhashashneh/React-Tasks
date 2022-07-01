import Home from './pages/Home';
import About from './pages/About';
import MoveList from './pages/MoveList';
import Movie from './pages/Movie';
import { NavLink, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  return (

    <Router>
      <>
        <nav>
          <h1>Nada kh</h1>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/moves">Moves</NavLink>
            </li>
          </ul>
        </nav>
      </>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/moves" element={<MoveList />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </div >
    </Router>
  );
}