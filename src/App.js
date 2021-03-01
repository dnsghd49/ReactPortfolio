//import logo from './logo.svg';
import './App.css';
import Main from "./pages/main.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/index.js";
//import Button from 'react-bootstrap/Button';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/"
              component={Main} />
            <Route exact path="/main" component={Main} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
