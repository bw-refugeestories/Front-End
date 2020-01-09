import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Logout from './components/Logout';
import SubmitStory from "./components/SubmitStory";
import AdminPortal from "./components/AdminPortal";
import AdminAddUser from "./components/AdminAddUser";
import Story from "./components/Story";
import Footer from "./components/Footer";
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/submit-story" component={SubmitStory} />
      <PrivateRoute exact path="/admin" component={AdminPortal} />
      <PrivateRoute exact path="/admin/add-user" component={AdminAddUser} />
      <Route path="/story/:id" component={Story} />
      <Footer />
    </div>
  );
};

export default App;
