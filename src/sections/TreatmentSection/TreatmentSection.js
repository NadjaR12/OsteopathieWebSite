import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import './styles.scss';

export default function TreatmentSection() {
  const { t } = useTranslation();

  return (
    <section id="treatment">
        <h1>{t('Treatment.title')}</h1>
        <div className='treatment-info'>
            <p><Trans t={ t }>Treatment.info.duration1</Trans></p>
            <p><Trans t={ t }>Treatment.info.duration2</Trans></p>
            <p><strong>{t('Treatment.info.important')}</strong></p>
        </div>
        <div>
          <Trans t={ t }>Treatment.text</Trans>
        </div>
    </section>
  )
}
