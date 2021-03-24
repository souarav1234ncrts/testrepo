import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import View from "./components/View";
import Update from "./components/Update";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" componenet={View} />
        {/* <PrivateRoutes exact path="/view" component={View} /> */}
        <Route exact path="/create" component={Create} />
        <Route exact path="/view" component={View} />
        <Route exact path="/update" component={Update} />
      </Switch>
    </Router>
  );
}

export default App;
