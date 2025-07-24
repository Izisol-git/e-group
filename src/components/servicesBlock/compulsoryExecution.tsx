import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer";

const CompulsoryExecution: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <>
            <section id='services-block-body' className={'mt-[100px]'}>
                <div className="p-6 max-w-6xl mx-auto space-y-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t("execution_title")}
                    </h2>

                    <p className="text-gray-700">
                        <strong>{t("execution_docLabel")}</strong> {t("execution_docText")}
                    </p>

                    <p className="font-semibold">
                        {t("execution_monitoringTitle")}
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("execution_point1")}</li>
                            <li>{t("execution_point2")}</li>
                            <li>{t("execution_point3")}</li>
                        </ul>

                        <p className="font-semibold mt-4">{t("execution_coopTitle")}</p>

                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("execution_coop1")}</li>
                            <li>{t("execution_coop2")}</li>
                            <li>{t("execution_coop3")}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default CompulsoryExecution;
