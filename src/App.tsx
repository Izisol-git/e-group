import React, {useEffect} from "react"; // <--- useEffect ni import qilishni unutmang
import AOS from "aos"
import 'aos/dist/aos.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/home.tsx";
import Navbar from "./components/navbar";
import Normative from "./components/servicesBlock/Normative.tsx";
import Court from "./components/servicesBlock/court.tsx";
import Mediation from "./components/servicesBlock/mediation.tsx";
import CourtDebt from "./components/servicesBlock/courtDebt.tsx";
import CompulsoryExecution from "./components/servicesBlock/compulsoryExecution.tsx";
import AssetRecovery from "./components/servicesBlock/assetRecovery.tsx";
import LegalService from "./components/servicesBlock/legalService.tsx";
import './i18n/i18n.ts';


const App: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        window.scrollTo(0, 0);
    }, []);






    return (
        <>

            <header>
                <nav>
                    <Navbar/>
                </nav>
            </header>

            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/normative-block" element={<Normative/>}/>
                <Route path="/court-block" element={<Court/>}/>
                <Route path="/mediation-block" element={<Mediation/>}/>
                <Route path="/court-debt-block" element={<CourtDebt/>}/>
                <Route path="/compulsory-execution-block" element={<CompulsoryExecution/>}/>
                <Route path="/asset-recovery-block" element={<AssetRecovery/>}/>
                <Route path="/legal-service-block" element={<LegalService/>}/>
            </Routes>
        </>

    );
};

export default App;
