import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Purchase from "./Components/Purchase/Purchase";
import Register from "./Components/Login/Register/Register";
import Login from "./Components/Login/Login/Login";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import Header from "./Components/Shared/Header";
import Cars from "./Components/Cars/Cars";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import DashBoard from "./Components/Dashboard/Dashboard/Dashboard";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/cars">
              <Cars></Cars>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute exact path="/car/:id">
              <Header></Header>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
