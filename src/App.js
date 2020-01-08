import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import SubmitStory from "./components/SubmitStory";
import AdminPortal from "./components/AdminPortal";
import Story from "./components/Story";
import Footer from "./components/Footer";
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/submit-story" component={SubmitStory} />
      <PrivateRoute path="/admin" component={AdminPortal} />
      <Route path="/story/:id" component={Story} />
      <Footer />
    </div>
  );
};

export default App;
