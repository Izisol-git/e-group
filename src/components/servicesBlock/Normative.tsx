import React , {useEffect} from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer";


const Normative: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);


    return (
        <>
            <section id='services-block-body' className='mt-[100px]'>
                <div className="p-6 max-w-6xl mx-auto space-y-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t("normative_title")}
                    </h2>

                    <p className="text-gray-700">
                        {t("normative_intro")}
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <ul  className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>
                                <strong>{t("normative_point1_title")}</strong> {t("normative_point1_text")}
                            </li>
                            <li>
                                <strong>{t("normative_point2_title")}</strong> {t("normative_point2_text")}
                            </li>
                            <li>
                                <strong>{t("normative_point3_title")}</strong> {t("normative_point3_text")}
                            </li>
                            <li>
                                <strong>{t("normative_point4_title")}</strong> {t("normative_point4_text")}
                            </li>
                        </ul>

                        <p className="font-semibold mt-4">{t("normative_forms_title")}</p>

                        <ul  className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>
                                <strong>{t("normative_form1_title")}</strong> {t("normative_form1_text")}
                            </li>
                            <li>
                                <strong>{t("normative_form2_title")}</strong> {t("normative_form2_text")}
                            </li>
                            <li>
                                <strong>{t("normative_form3_title")}</strong> {t("normative_form3_text")}
                            </li>
                        </ul>

                        <p className="font-semibold mt-4">{t("normative_goal_title")}</p>

                        <ul  className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t("normative_goal1")}</li>
                            <li>{t("normative_goal2")}</li>
                            <li>{t("normative_goal3")}</li>
                        </ul>

                        <p className="font-semibold mt-4">{t("normative_doc_types_title")}</p>

                        <ul  className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>
                                <strong>{t("normative_doc1_title")}</strong> {t("normative_doc1_text")}
                            </li>
                            <li>
                                <strong>{t("normative_doc2_title")}</strong> {t("normative_doc2_text")}
                            </li>
                            <li>
                                <strong>{t("normative_doc3_title")}</strong> {t("normative_doc3_text")}
                            </li>
                            <li>
                                <strong>{t("normative_doc4_title")}</strong> {t("normative_doc4_text")}
                            </li>
                            <li>
                                <strong>{t("normative_doc5_title")}</strong> {t("normative_doc5_text")}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Normative;
