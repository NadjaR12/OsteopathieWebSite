import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

export default function TreatmentSection() {
  const { t } = useTranslation();

  return (
    <section id="treatment">
        <h1>{t('Treatment.title')}</h1>
        <div>
            <p>{t('Treatment.info.duration1')}</p>
            <p>{t('Treatment.info.duration2')}</p>
        </div>
        <p>{t('Treatment.info.important')}</p>
        <div>
          <Trans t={ t }>Treatment.text</Trans>
        </div>
    </section>
  )
}
