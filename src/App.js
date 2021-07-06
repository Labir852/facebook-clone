import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
//import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
//import { useStateValue } from './components/StateProvider';
import Widgets from './components/Widgets/Widgets';


function App() {
  //const [{ user },dispatch] = useStateValue();
  return (
    // BEM naming convention
    <div className="app">
    
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
        <Feed/>
      <Widgets />
      </div>
    </div>
  );
}

export default App;
