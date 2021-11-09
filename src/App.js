import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Footer from "./Components/Shared/Footer";
import Purchase from "./Components/Purchase/Purchase";
import Register from "./Components/Login/Register/Register";
import Login from "./Components/Login/Login/Login";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import Header from "./Components/Shared/Header";
import Cars from "./Components/Cars/Cars";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
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
            <Route path="/purchase">
              <Purchase></Purchase>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
