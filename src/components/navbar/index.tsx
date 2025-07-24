import React, {useState} from "react";
import ContactModal from "../contactModal";
import LanguageSwitcher from "../languageSwitcher";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface NavItem {
    label: string;
    id?: string;
    onClick?: () => void;
}



const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const navItems: NavItem[] = [
        { label: t("home"), id: "home" },
        { label: t("about"), id: "about" },
        { label: t("consultation"), id: "consultation" },
        { label: t("services"), id: "services" },
        { label: t("testimonials"), id: "testimonials" },
        {
            label: t("contact"),
            id: "services-block-footer",
            onClick: () => setModalOpen(true)
        },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between  items-center h-16">
                    {/*  logo  */}
                    <div onClick={()=> navigate('/')} className="flex items-center space-x-3 cursor-pointer">
                        <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded">
                            <span className="text-white font-bold">E</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-red-600">E-GROUP</h1>
                            <p className="text-sm font-medium text-gray-600">LEGAL TECHNOLOGY</p>
                        </div>
                    </div>

                    {/*  navbar items  */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) =>
                            (
                                <button
                                    key={item.label}
                                    onClick={()=> {
                                        navigate('/');
                                        const el = document.getElementById(`${item.id}`);
                                        if (el) {
                                            el.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-gray-700 hover:text-red-600 font-medium transition"
                                    type="button"
                                >
                                    <a href={`#${item.id}`}>{t(item.label)}</a>

                                </button>
                            )
                        )}
                        <LanguageSwitcher/>
                    </nav>

                    {/*  navbar items mobile*/}
                    <div className="lg:hidden flex items-center space-x-2">
                        <LanguageSwitcher/>
                        <button
                            className="text-gray-700 hover:text-red-600 focus:outline-none"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            type="button"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className=" block lg:hidden border-t border-gray-200 py-3 m">
                        {navItems.map((item) =>
                                <button
                                    key={item.label}
                                    onClick={() => {
                                        navigate('/', {state: {scrollToId: item.id}});
                                        setMobileMenuOpen(!mobileMenuOpen)
                                        const el = document.getElementById(`${item.id}`);
                                        if (el) {
                                            el.scrollIntoView({behavior: 'smooth'});
                                        }
                                    }}
                                    className="text-gray-700 hover:!text-red-600 font-medium transition block mt-3 "
                                    type="button"
                                >
                                    {t(item.label)}
                                </button>
                        )}
                    </div>
                )}
            </div>

            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)}/>
        </header>
    );
};

export default Navbar;
