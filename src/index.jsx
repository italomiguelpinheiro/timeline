import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.jsx";

function App() {

  return (
    <div className="App" >
      <Home />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);   