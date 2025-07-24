import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer";

const CourtDebt: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='services-block-body' className={'mt-[100px]'}>
                <div className="p-6 max-w-6xl mx-auto space-y-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t("courtDebt_title")}
                    </h2>

                    <p className="text-gray-700">
                        <strong>{t("courtDebt_introStrong")}</strong> {t("courtDebt_intro")}
                    </p>

                    <p className="text-gray-700">
                        {t("courtDebt_stepsTitle")}
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("courtDebt_step1")}</li>
                            <li>{t("courtDebt_step2")}</li>
                            <li>{t("courtDebt_step3")}</li>
                        </ul>
                    </div>

                    <p className="text-gray-700">
                        {t("courtDebt_deadlineTitle")}
                    </p>

                    <p className="text-gray-700">
                        {t("courtDebt_deadlineText")}
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default CourtDebt;
