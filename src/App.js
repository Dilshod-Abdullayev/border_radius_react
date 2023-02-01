import React from "react";
import Main from './components/Main'
import { ProviderButton } from "./components/Navbar/Middle/Context/ButtonContext";
const App = () => {
  return <div>
    <ProviderButton>
    <Main/>
    </ProviderButton>
  </div>;
};

export default App;
