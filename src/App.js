import Sidebar from "./components/Sidebar";
import UserForm from "./components/UserForm";
import Dashboard from "./components/Dashboard";
import "./App.css"
import React from "react";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Dashboard/>
      <UserForm />
    </div>
  );
}

export default App;
