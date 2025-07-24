import React  from "react";

import Hero from "../hero";
import Visitors from "../visitors";
import Consultation from "../consultation";
import Services from "../services";
import SuccessStories from "../stories";
import WhyChooseUs from "../chooseUs";
import Footer from "../footer";


const Home: React.FC = () => {



    return (
        <div className="font-sans">

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

export default Home;
