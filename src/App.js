import "./App.css";
import ProvideAuth from "./Context/ProvideAuth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import PageNotFound from "./Pages/PageNotFound_404/PageNotFound";
import Appointment from "./Pages/AppoinmentPage/Appointment";
import Login from "./Pages/LoginPage/Login";
import Consultants from "./Pages/ConsultantsPage/AllConsultants";
import Register from "./Pages/RegisterPage/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import TreatmentDetails from "./Components/TreatmentDetails/TreatmentDetails";
import AboutUs from "./Pages/AboutUs/AboutUs";


function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Consultants></Consultants>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/treatment_details/:name/:treatmentid">
            <TreatmentDetails></TreatmentDetails>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
