import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About";
import { Project} from "./Components/Project";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="Victor" search={false} />
        <Routes>
          <Route exact path="/Web-Portf/Main" element={<Main/>}/>
          <Route exact path="/Web-Portf/About" element={<About/>}/>
          <Route exact path="/Web-Portf/Project" element={<Project/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
