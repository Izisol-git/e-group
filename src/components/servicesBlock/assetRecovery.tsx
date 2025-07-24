import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import Footer from "../footer";

const AssetRecovery: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='services-block-body' className={'mt-[100px]'}>
                <div className="p-6 max-w-6xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t('assetRecoveryTitle')}
                    </h2>
                    <p className="text-gray-700">
                        {t('assetRecoveryDesc')}
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <p className="font-semibold mt-4">
                            {t('mainGoalsTitle')}
                        </p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t('mainGoal1')}</li>
                            <li>{t('mainGoal2')}</li>
                            <li>{t('mainGoal3')}</li>
                        </ul>

                        <p className="font-semibold mt-4">
                            {t('stagesTitle')}
                        </p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li><strong>{t('stage1Title')}</strong> — {t('stage1Desc')}</li>
                            <li><strong>{t('stage2Title')}</strong> — {t('stage2Desc')}</li>
                            <li><strong>{t('stage3Title')}</strong> — {t('stage3Desc')}</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t('recognitionTitle')}
                    </h2>
                    <p className="text-gray-700">
                        <strong>{t('uzTerritory')}</strong> {t('uzTerritoryDesc')}
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <p className="font-semibold mt-4">{t('legalBasesTitle')}</p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t('legalBase1')}</li>
                            <li>{t('legalBase2')}</li>
                        </ul>

                        <p className="font-semibold mt-4">{t('recognitionConditionsTitle')}</p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t('condition1')}</li>
                            <li>{t('condition2')}</li>
                            <li>{t('condition3')}</li>
                            <li>{t('condition4')}</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-red-600 leading-snug">
                        {t('outsideUzbekistanTitle')}
                    </h2>
                    <p className="text-gray-700">
                        {t('outsideUzbekistanDesc')}
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <p className="font-semibold mt-4">{t('examplesTitle')}</p>
                        <ul data-aos="fade-right" className="list-disc list-inside space-y-2 marker:text-red-500">
                            <li>{t('example1')}</li>
                            <li>{t('example2')}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AssetRecovery;
