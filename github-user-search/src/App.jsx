import React from "react";
import './App.css';
import Search from './components/Search';

const App  = () => {
  return (
    <div style = {{padding: '2rem'}}>
      <h1>Github User Search</h1>
      <Search />
      {/* Components <UserCard /> will go here*/}
    </div>
  );
};

export default App
