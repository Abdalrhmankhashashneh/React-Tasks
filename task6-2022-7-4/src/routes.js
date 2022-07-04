import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createContext } from "react";

export const context = createContext();
export default class AppRoutes extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        abood: "abood",
    }
    setAbood = () => {
        this.setState({
            abood: "abood khashashhenha",
        })
    }

    render() {
        return (
            <Router>
                <nav>
                    <h1>NAMsite</h1>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav><context.Provider value={{ state: this.state, setAbood: this.setAbood }}>
                    <Routes>

                        <Route path="/" element={<h1>App it's work </h1>} />

                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes></context.Provider>
            </Router >
        );

    }
}