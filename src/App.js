
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Router, RouterProvider, Routes } from 'react-router-dom';
import './App.css';

import Header from './componets/Header';
import Main from './componets/Main';


function App() {
  return (
    <div className="App container">
      <Header />
      <Main />
    </div>


  );
}

export default App;
