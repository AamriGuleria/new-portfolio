import MainImg from "./components/MainImg";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import ProjectPage from "./routes/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/project' element={<ProjectPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
