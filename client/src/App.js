import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

 
import { BookmarksTable } from "./bookmark" 
import { OperationsTable } from "./home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <OperationsTable  />
          </Route>
          <Route exact path="/bookmark">
          <BookmarksTable  />
          </Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
