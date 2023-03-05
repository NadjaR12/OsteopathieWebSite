import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LandingSection() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <section id="landing">
        <div id="language-switch">
            <button id="de-btn" onClick={changeLanguage} value='de'>DE</button>
            <button id="en-btn" onClick={changeLanguage} value='en'>EN</button>
        </div>
        <h1>{t('Landing.Greeting')}</h1>
        <img src="" alt="susa-img"/>
        <h2>{t('Landing.Header.Osteopathie')}</h2>
        <h2>{t('Landing.Header.Name')}</h2>
        <h3>{t('Landing.Header.Location')}</h3>
        <button>{t('CTA.Termin')}</button>
    </section>
  )
}
