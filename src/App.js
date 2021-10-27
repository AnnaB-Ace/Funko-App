import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Listado from "./pages/Listado";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/listado">
          <Listado />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
