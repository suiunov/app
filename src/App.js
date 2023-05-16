import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";


import ContactPage from "./pages/ContactUs";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Restaurants from "./pages/Restaurants";
import Settings from "./pages/Settings";

import { Fragment } from "react";
import AdminRoute from "./PrivateRoute/AdminRoute";
import SignIn from "./authentication/SingIn";
import SignUp from "./authentication/SingUp";
import Breakfast from "./components/Breakfast";
import Footer from "./components/Footer";
import Lunchdinner from "./components/Lunchdinner";
import Navbar from "./components/Navbar";
import RecipeDetails from "./components/RecipeDetails";
import ContactFrom from "./components/dashboard/ContactFrom";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardMain from "./components/dashboard/Dashboard.main";
import MangeProduct from "./components/dashboard/MangeProduct";
import MangeRestaurants from "./components/dashboard/MangeRestaurants";
import LunchFoods from "./list/LunchFoods";
import RestaurantsFood from "./list/RestaurantsFood";

function App() {

  const location = useLocation()

  const dashboard =  location.pathname === "/dashboard"  
  const product =   location.pathname === "/dashboard/manage_products" 

  const contact =  location.pathname === "/dashboard/manage_contact"  
  const  restaurants = location.pathname === "/dashboard/manage_restaurants"

  let none = dashboard || product || contact || restaurants


  return (

    <Fragment>
     

      {
        !none && (
          <Navbar />
        )

      }
      <Routes>
        <Route path="dashboard" element={<AdminRoute> <Dashboard /> </AdminRoute>}>
          <Route path="" element={<DashboardMain />} />
          <Route path="manage_products" element={<MangeProduct />} />
          <Route path="manage_contact" element={<ContactFrom />} />
          <Route path="manage_restaurants" element={<MangeRestaurants />} />
        </Route>
      </Routes>

      {
        !none && (
          <div className="container main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/Restaurants" element={<Restaurants />} />
              <Route path="/Recipes" element={<Recipes />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/ContactUs" element={<ContactPage />} />
              <Route path="/breakfast" element={<Breakfast />} />
              <Route path="/lunchdinner" element={<Lunchdinner />} />
              <Route path="/recipe/breakfast/:id" element={<RestaurantsFood />} />
              <Route path="/recipe/lunchdinner/:id" element={<LunchFoods />} />
              <Route path="/recipe/details/:id" element={<RecipeDetails />} />
            </Routes>
          </div>
        )
      }


      {
        !none && (
          <Footer />
        )

      }
    </Fragment>
  );
}

export default App;
