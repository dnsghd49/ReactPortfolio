import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/about";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import idkyet from "./pages/idkyet";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="only">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={Main} />
          <Route exact path="/idkyet" component={idkyet} />
          <Route exact path="/about" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
