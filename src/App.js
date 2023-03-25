import "./App.css";

import { Brand, CTA, Navbar } from "./components";
import {
  Header,
  Footer,
  Features,
  WhatGPT3,
  Blog,
  Possibilty,
} from "./containers";
function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
