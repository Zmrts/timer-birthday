import React from "react";
import "./index.css";
import { Timer } from "./components/Timer";

import { Links } from "./layouts/Links";


window.addEventListener('load', () => {
  const wrapper = document.querySelector('.wrapper');
  wrapper.style.opacity = '1';
})

function App() {
  return (
    <div className="wrapper">
      <Timer />
      <Links />
    </div>
  );
}

export default App;
