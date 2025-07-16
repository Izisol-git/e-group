import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Visitors from "./components/visitors";
import Consultation from "./components/consultation";
import Services from "./components/services";
import SuccessStories from "./components/stories";
import WhyChooseUs from "./components/chooseUs";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><Visitors /></section>
        <section id="consultation"><Consultation /></section>
        <section id="services"><Services /></section>
        <section id="testimonials"><SuccessStories /></section>
        <div><WhyChooseUs /></div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
