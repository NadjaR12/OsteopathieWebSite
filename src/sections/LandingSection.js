import React from 'react'
import { useTranslation } from 'react-i18next'

import CTA from '../components/CTA/CTA';
import TransButton from '../components/TransButton/TransButton';

export default function LandingSection() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <section id="landing">
        <TransButton />
        <h1>{t('Landing.Greeting')}</h1>
        <img src="" alt="susa-img"/>
        <h2>{t('Landing.Header.Osteopathie')}</h2>
        <h2>{t('Landing.Header.Name')}</h2>
        <h3>{t('Landing.Header.Location')}</h3>
        <CTA message={'CTA.Termin'}/>
    </section>
  )
}
