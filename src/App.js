import React from "react";
import { Menu } from "./components/Menu";
import { Dashboard } from "./pages/Dashboard";
import './App.css';
import { GlobalStyle } from "./styles/global"

export function App() {
  return (
    <div className="container">
      <Menu />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}

export default App;
