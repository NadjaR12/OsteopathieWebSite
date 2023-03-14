import React from 'react'
import { useTranslation } from 'react-i18next'
import LandingPageImage from '../../images/susa.png'

import CTA from '../../components/CTA/CTA';
import TransButton from '../../components/TransButton/TransButton';

import './styles.scss';

export default function LandingSection() {
  const { t } = useTranslation();

  return (
    <section id='landing'>
        {/* <TransButton /> */}
        <div className='landing_text'>
          <h1>{t('Landing.Greeting')}</h1>
          <img src={LandingPageImage} alt="susa-img"/>
          <h2>{t('Landing.Header.Osteopathie')}<br></br>{t('Landing.Header.Name')}</h2>
          <h3>{t('Landing.Header.Location')}</h3>
          <CTA message={'CTA.Termin'}/>
        </div>
    </section>
  )
}
