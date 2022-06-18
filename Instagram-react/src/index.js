import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import Messanger from './components/Messanger';
import Explore from './components/Explore';
import Saved from './components/Saved';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/direct" element={<Messanger />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/saved" element={<Saved/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
