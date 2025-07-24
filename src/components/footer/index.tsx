import React from "react";
import {useTranslation} from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();
  return (

      <section id={'services-block-footer'} className={'mt-[100px] '}>
          <div className="flex flex-col md:flex-row gap-10 p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Chap matn qismi */}
              <div className="md:w-1/2 space-y-4">
                  <h5 className="text-red-700 uppercase font-semibold">{t('contactUsSection')}</h5>
                  <h2 className="text-3xl font-bold">{t('serviceNotFound')}</h2>
                  <p className="text-gray-600">{t('contactUsDesc_uz')}</p>
                  <div className="bg-gray-100 border-l-4 border-red-500 p-4 text-gray-800 rounded">
                      {t('contactMessage')}
                  </div>
              </div>

              {/* O'ng forma qismi */}
              <form className="md:w-1/2 space-y-4 bg-white p-6 rounded shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <label className="block text-sm font-medium">{t('name')}</label>
                          <input
                              type="text"
                              name="name"
                              placeholder={t('nameKey')}
                              className="w-full border border-red-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                              required
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium">{t('phone')}</label>
                          <input
                              type="tel"
                              name="phone"
                              placeholder="8 91 234 56 78"
                              className="w-full border border-red-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                              required
                          />
                      </div>
                  </div>

                  <div>
                      <label className="block text-sm font-medium">{t('email')}</label>
                      <input
                          type="email"
                          name="email"
                          placeholder={t('email')}
                          className="w-full border border-red-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                          required
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium">{t('message')}</label>
                      <textarea
                          name="message"
                          placeholder={t('messageKey')}
                          rows={4}
                          className="w-full border border-red-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                          required
                      />
                  </div>

                  {/*<div className="flex items-start gap-2">*/}
                  {/*    <input*/}
                  {/*        type="checkbox"*/}
                  {/*        name="agree"*/}
                  {/*        className="mt-1 cursor-pointer"*/}
                  {/*    />*/}
                  {/*    <label className="text-sm">*/}
                  {/*        {t('privacyConsent')}*/}
                  {/*    </label>*/}
                  {/*</div>*/}

                  <button
                      type="submit"
                      className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
                  >
                      {t('submit')}
                  </button>
              </form>

          </div>

          <footer className="w-full py-4 bg-white text-center text-lg text-gray-700 border-t">
              © 2025 Copyright. All Rights Reserved.
          </footer>

      </section>

  );
};

export default Footer;
