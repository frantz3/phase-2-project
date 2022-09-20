import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.css";
import List from "./components/ListOfExercises";
import { useEffect, useState } from "react";
import MovementForm from "./components/MovementForm";
import Home from "./components/Home";

function App() {
  const [list, setList] = useState([]);
 

    useEffect(() => {
      fetch(`http://localhost:4000/workouts`)
        .then((r) => r.json())
        .then((data) => setList(data));
    }, []);
  

  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/workout/new" render={() => <Form setList={setList} />} />
        <Route exact path="/exercises" render={() => <List list={list}/>} />
        <Route exact path="/" render={() => <Home />}>
          
        </Route>
        <Route path="/exercises/:id/edit" component={() => <MovementForm setList={setList} />} />
      </Switch>
    </Router>
  );
}

export default App;
