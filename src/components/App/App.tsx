import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import king from "../../assets/white/king.png";
import { Board } from "../Board";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Board />
    </div>
  );
};
