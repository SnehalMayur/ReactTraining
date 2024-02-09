import React from "react";

import Navigationbar from "./components/Navigationbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navigationbar />

      <Home />

      <Footer />
    </div>
  );
};

export default App;