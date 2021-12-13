import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';


const App = () => {

  return (
    <div className="page-wrapper">
      {/*Could add a header and router for different pages. Only MainPage for now.*/}
      <MainPage />
    </div>
  );
}

export default App;
