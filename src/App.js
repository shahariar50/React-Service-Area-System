import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AreaList from "./pages/AreaList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={AreaList} />
      </Switch>
    </div>
  );
}

export default App;
