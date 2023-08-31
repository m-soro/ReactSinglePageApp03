import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "/src/pages/Home";
import Projects from "/src/pages/Projects";
import About from "/src/pages/About";
import Resume from "/src/pages/Resume";
import Contact from "/src/pages/Contact";
import Project from "/src/pages/Project";

export default function Header() {
  return (
    <HashRouter>
      <div className="Header">
        <nav>
          <ul>
            <li className="NameText">
              <NavLink to="/" end>
                mark_
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <details role="list" dir="rtl">
                <summary aria-haspopup="listbox" role="link">
                  Menu
                </summary>
                <ul role="listbox">
                  <li>
                    <NavLink to="/projects">Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/resume">Resume</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact strict path="/" element={<Home />} />
          <Route exact strict path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route exact strict path="/about" element={<About />} />
          <Route exact strict path="/resume" element={<Resume />} />
          <Route exact strict path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
