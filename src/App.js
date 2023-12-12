import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
