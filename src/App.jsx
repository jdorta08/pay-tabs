import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StatusCards from "./components/StatusCards";

function App() {
  const [taskStatus, setTaskStatus] = useState();
  return (
    <div className="h-screen flex -md:flex-col">
      <Navbar />
      <StatusCards />
    </div>
  );
}

export default App;
