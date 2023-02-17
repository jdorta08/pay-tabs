import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StatusCards from "./components/StatusCards";

function App() {
  return (
    <div className="h-screen flex -md:flex-col">
      <Navbar />
      <StatusCards />
    </div>
  );
}

export default App;
