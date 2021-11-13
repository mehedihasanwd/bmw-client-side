import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../../../Hooks/useAuth";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

// Import Pages
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import CreateAdmin from "../CreateAdmin/CreateAdmin";
import AddAProduct from "../AddAProduct/AddAProduct";
import AddAReview from "../AddAReview/AddAReview";

const drawerWidth = 200;

function DashBoard(props) {
  const { logOut, admin } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="min-vh-100 container py-3">
      <Toolbar />
      <Box className="text-start">
        <Link to="/home">
          <button className="btn-danger border-0 me-3 rounded-1 mb-4">
            Home
          </button>
        </Link>
      </Box>
      <Divider />

      <Box className="text-start mt-2">
        {admin ? (
          <Box>
            <Box>
              <Link to={`${url}/manageproducts`}>
                <button className="btn-danger border-0 me-3 rounded-1 mt-3 mb-1">
                  Manage Cars
                </button>
              </Link>
            </Box>
            <Box>
              <Link to={`${url}/manageallorders`}>
                <button className="btn-danger border-0 me-3 rounded-1 my-1">
                  Manage All Orders
                </button>
              </Link>
            </Box>
            <Box>
              <Link to={`${url}/addacar`}>
                <button className="btn-danger border-0 me-3 rounded-1 my-1">
                  Add A Car
                </button>
              </Link>
            </Box>
            <Box>
              <Link to={`${url}/createadmin`}>
                <button className="btn-danger border-0 me-3 rounded-1 my-1">
                  Make Admin
                </button>
              </Link>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box>
              <Link to={`${url}/myorders`}>
                <button className="btn-danger border-0 me-3 rounded-1 my-1">
                  My Orders
                </button>
              </Link>
            </Box>
            <Box>
              <Link to={`${url}/addareview`}>
                <button className="btn-danger border-0 me-3 rounded-1 my-1">
                  Add A Review
                </button>
              </Link>
            </Box>
            <Box>
              <Link to={`${url}/pay`}>
                <button className="btn-danger border-0 me-3 rounded-1 my-1">
                  Pay
                </button>
              </Link>
            </Box>
          </Box>
        )}

        <Box>
          <button
            onClick={logOut}
            className="btn-danger border-0 me-3 rounded-1 my-1"
          >
            LogOut
          </button>
        </Box>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="min-vh-100">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {admin ? <Box>Admin Dashboard</Box> : <Box>User Dashboard</Box>}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Routing Start Here */}
        <Switch>
          <Route exact path={`${path}/createadmin`}>
            <CreateAdmin></CreateAdmin>
          </Route>
          <Route exact path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route exact path={`${path}/manageallorders`}>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route exact path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/addacar`}>
            <AddAProduct></AddAProduct>
          </Route>
          <Route path={`${path}/addareview`}>
            <AddAReview></AddAReview>
          </Route>
          <Route exact path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;

// export default DashBoard;
