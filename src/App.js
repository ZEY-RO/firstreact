import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import MediaCard from "./components/card";
import HorizontalCards from "./components/HorizontalCards";
import IceCream from "./iceflav";

function App() {
  return (
    <div className="maincon" style={{ backgroundColor: "#d8c4b798" }}>
      <div style={{ backgroundColor: "rgb(252, 230, 233)" }}>
        <TopBar />
        <MainContent />
        <HorizontalCards IceCream={IceCream}/>
      </div>
    </div>
    /*  <Router>
      <div>
        <topBar />
        {/* <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/" exact component={} />
            <Redirect to="/not-found" />
          </Switch>
        </div> }
      </div>
    </Router> */
  );
}

export default App;
