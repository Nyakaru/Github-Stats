import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

 
import Bookmark from "./bookmark" 
import { OperationsTable } from "./columns";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <OperationsTable  />
          </Route>
          <Route exact path="/bookmark">
          <Bookmark  />
          </Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
