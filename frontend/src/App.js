import { Route, Switch } from "react-router-dom";
import "./App.css";
import React, { Suspense } from "react";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...</div>}>
        <switch>
          <Route exact path="/" component={MainPage}></Route>
        </switch>
      </Suspense>
    </div>
  );
}

export default App;
