import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

export default function TreatmentSection() {
  const { t } = useTranslation();

  return (
    <section id="treatment">
        <h1>{t('Treatment.title')}</h1>
        <div>
            <p><Trans t={ t }>Treatment.info.duration1</Trans></p>
            <p><Trans t={ t }>Treatment.info.duration2</Trans></p>
        </div>
        <p><strong>{t('Treatment.info.important')}</strong></p>
        <div>
          <Trans t={ t }>Treatment.text</Trans>
        </div>
    </section>
  )
}
