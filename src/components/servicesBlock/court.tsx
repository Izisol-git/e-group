import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer";

const Court: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <>
            <section id='services-block-body' className='mt-[100px]'>
                <div className="p-6 max-w-6xl mx-auto space-y-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t("court_title")}
                    </h2>

                    <p className="text-black-500">
                        <strong>{t("court_intro_strong")}</strong> {t("court_intro_text")}
                    </p>

                    <p className="text-black-500">
                        {t("court_methods")}
                    </p>

                    <p className="text-black-500">
                        <strong>{t("court_goal_strong")}</strong> {t("court_goal_text")}
                    </p>

                    <p className="text-black-500">
                        {t("court_result_positive")}
                        <br />
                        {t("court_result_negative")}
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <p className="font-semibold mt-4">{t("court_objective_title")}</p>

                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("court_point1")}</li>
                            <li>{t("court_point2")}</li>
                            <li>{t("court_point3")}</li>
                            <li>{t("court_point4")}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Court;
