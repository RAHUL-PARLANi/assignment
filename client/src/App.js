import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import EditCategory from "./components/EditCategory"
import Category from "./components/Category"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/edit2/:id" component={EditCategory} />
      <Route path="/Category" component={Category} />
    </BrowserRouter>
  );
}

export default App;
