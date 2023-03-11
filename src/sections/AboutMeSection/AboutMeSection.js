import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import LandingPageImage from '../../images/susa.png'

import './styles.scss';

export default function AboutSusaSection() {
  const { t } = useTranslation();

  return (
    <section id="about-me">
      <div className='cv'>
          <img src={LandingPageImage} alt="susa-img" className='cv-img'/>
          <div className='cv-list'>
              <h4>{t('AboutMe.list.title1')}<h5>{t('AboutMe.list.subtitle1')}</h5></h4>
              <h4>{t('AboutMe.list.title2')}<h5>{t('AboutMe.list.subtitle2')}</h5></h4>
              <h4>{t('AboutMe.list.title3')}<h5>{t('AboutMe.list.subtitle3')}</h5></h4>
              <h4>{t('AboutMe.list.title4')}<h5>{t('AboutMe.list.subtitle4')}</h5></h4>
          </div>
      </div>
        <p className='about-me-text'><Trans t={ t }>AboutMe.text</Trans></p>
    </section>
  )
}
