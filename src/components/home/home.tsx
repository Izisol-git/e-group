import React   from "react";

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
                <section id="home" className={'scroll-mt-[50px] ld:scroll-mt-[0]'}><Hero /></section>
                <section id="about" className={'scroll-mt-[50px] ld:scroll-mt-[0]'}><Visitors /></section>
                <section id="consultation" className={'scroll-mt-[50px] ld:scroll-mt-[0]'}><Consultation /></section>
                <section id="services" className={'scroll-mt-[50px] ld:scroll-mt-[0]'}><Services /></section>
                <section id="testimonials" className={'scroll-mt-[50px] ld:scroll-mt-[0]'}><SuccessStories /></section>
                <div><WhyChooseUs /></div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
