import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import SubmitStory from "./components/SubmitStory";
import AdminPortal from "./components/AdminPortal";
import Story from "./components/Story";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/submit-story" component={SubmitStory} />
      <Route path="/admin" component={AdminPortal} />
      {/* This will be a private route! */}
      <Route path="/story/:id" component={Story} />
      <Footer />
    </>
  );
};

export default App;
