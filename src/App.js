import logo from "./logo.svg";
import "./App.css";
import {Header} from "./Components/Header";
import {Main} from "./Components/Main";
import {Footer} from "./Components/Footer";

function App() {
  return (
    <>
      <Header title="Victor" search={false}/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
