import React, { useState } from "react";
import ContactModal from "../contactModal";
import LanguageSwitcher from "../languageSwitcher";

interface NavItem {
    label: string;
    href?: string;
    onClick?: () => void;
}

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const navItems: NavItem[] = [
        { label: "Home", href: "home" },
        { label: "About", href: "about" },
        { label: "Consultation", href: "consultation" },
        { label: "Services", href: "services" },
        { label: "Testimonials", href: "testimonials" },
        {
            label: "Contact",
            onClick: () => setModalOpen(true),
        },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded">
                            <span className="text-white font-bold">E</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-red-600">E-GROUP</h1>
                            <p className="text-sm font-medium text-gray-600">LEGAL TECHNOLOGY</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) =>
                            item.onClick ? (
                                <button
                                    key={item.label}
                                    onClick={item.onClick}
                                    className="text-gray-700 hover:text-red-600 font-medium transition"
                                    type="button"
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <a
                                    key={item.label}
                                    href={`#${item.href}`}
                                    className="text-gray-700 hover:text-red-600 font-medium transition"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                        <LanguageSwitcher />
                    </nav>

                    <div className="md:hidden flex items-center space-x-2">
                        <LanguageSwitcher />
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
                    <div className="md:hidden border-t border-gray-200 py-3">
                        {navItems.map((item) =>
                            item.onClick ? (
                                <button
                                    key={item.label}
                                    onClick={item.onClick}
                                    className={`block px-4 py-2 text-gray-700 hover:text-red-600 font-medium w-full text-left ${item.label === "Contact" ? "bg-red-700 text-white" : ""
                                        }`}
                                    type="button"
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <a
                                    key={item.label}
                                    href={`#${item.href}`}
                                    className={`block px-4 py-2 text-gray-700 hover:text-red-600 font-medium w-full text-left ${item.label === "Contact" ? "bg-red-700 text-white" : ""
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                    </div>
                )}
            </div>

            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </header>
    );
};

export default Navbar;
