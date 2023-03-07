import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

export default function AboutSusaSection() {
  const { t } = useTranslation();

  return (
    <section id="about-susa">
        <p><Trans t={ t }>AboutMe.text</Trans></p>
        <ul>
            <li><h4>{t('AboutMe.list.title1')}</h4><h6>{t('AboutMe.list.subtitle1')}</h6></li>
            <li><h4>{t('AboutMe.list.title2')}</h4><h6>{t('AboutMe.list.subtitle2')}</h6></li>
            <li><h4>{t('AboutMe.list.title3')}</h4><h6>{t('AboutMe.list.subtitle3')}</h6></li>
            <li><h4>{t('AboutMe.list.title4')}</h4><h6>{t('AboutMe.list.subtitle4')}</h6></li>
        </ul>
    </section>
  )
}
