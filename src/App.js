//import logo from './logo.svg';
import './App.css';
import Main from "./pages/main.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          {/* <Navigation /> */}
          <Switch>
            <Route exact path="/"
              component={Main} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
