import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
    const [language, setLanguage] = useState<"uz" | "ru">("uz");
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (lang: "uz" | "ru") => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            >
                {language.toUpperCase()}
                <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-24 origin-top-right bg-white border border-gray-200 rounded shadow-lg z-50 animate-fade-in">
                    <ul className="py-1">
                        <li>
                            <button
                                onClick={() => handleSelect("uz")}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-red-100 hover:text-red-600"
                            >
                                UZ
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSelect("ru")}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-red-100 hover:text-red-600"
                            >
                                RU
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
