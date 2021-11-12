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
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import DashBoard from "./Components/Dashboard/Dashboard/Dashboard";
// import AddAProduct from "./Components/Dashboard/AddAProduct/AddAProduct";
// import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";
// import ManageAllOrders from "./Components/Dashboard/ManageAllOrders/ManageAllOrders";
// import ManageProducts from "./Components/Dashboard/ManageProducts/ManageProducts";
// import AddAReview from "./Components/Dashboard/AddAReview/AddAReview";
// import Pay from "./Components/Dashboard/Pay/Pay";
// import CreateAdmin from "./Components/Dashboard/CreateAdmin/CreateAdmin";

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
            {/* <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/makeadmin">
              <CreateAdmin></CreateAdmin>
            </Route>
            <Route path="/manageproducts">
              <ManageProducts></ManageProducts>
            </Route>
            <Route path="/addaproduct">
              <AddAProduct></AddAProduct>
            </Route>
            <Route path="/addareview">
              <AddAReview></AddAReview>
            </Route>
            <Route path="/pay">
              <Pay></Pay>
            </Route> */}
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
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
