import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

import "./App.css";

import Grid from "../Grid/Grid";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Grid />
    </div>
  );
}
