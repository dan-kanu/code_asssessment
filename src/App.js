import logo from "./images/site_logo.svg";

import "./App.css";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import MidSection from "./components/mid-section/mid-section";
import BottomSection from "./components/bottom-section/bottom-section";

function App() {
  return (
    <div className="App">
      <Hero />
      <MidSection/>
      <BottomSection/>
      <Footer />
    </div>
  );
}

export default App;
