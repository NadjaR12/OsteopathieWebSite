import React from 'react'
import { Trans, useTranslation } from 'react-i18next';


export default function AboutOsteo() {
    const { t } = useTranslation();
   
    return (
        <section id="about-osteo">
            <div>
                <h1>{t('AboutOsteo.title')}</h1>
                <h2>{t('AboutOsteo.subtitle')}</h2>
            </div>
            <div><Trans t={ t }>AboutOsteo.text</Trans></div>
            <div>
                <p>{t('AboutOsteo.text2')}</p>
            <div>
                <div>
                    <img src="" alt="viszerale-osteopathie-img"/>
                    <h2>{t('AboutOsteo.categories.title1')}</h2>
                    <div>
                        <h3>{t('AboutOsteo.categories.description1')}</h3>
                        <h3>{t('AboutOsteo.categories.applied')}</h3>
                        <p>{t('AboutOsteo.categories.text1')}</p>
                    </div>
                </div>
                <div>
                        <img src="" alt="kraniosakrale-osteopathie"/>
                        <h2>{t('AboutOsteo.categories.title2')}</h2>
                        <div>
                            <h3>{t('AboutOsteo.categories.description2')}</h3>
                            <h3>{t('AboutOsteo.categories.applied')}</h3>
                            <p>{t('AboutOsteo.categories.text1')}</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="parietale-osteopathie"/>
                        <h2>{t('AboutOsteo.categories.title3')}</h2>
                        <div>
                            <h3>{t('AboutOsteo.categories.description3')}</h3>
                            <h3>{t('AboutOsteo.categories.applied')}</h3>
                            <p>{t('AboutOsteo.categories.text1')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}
