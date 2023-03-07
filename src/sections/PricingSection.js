import React from 'react'

import { Trans, useTranslation } from 'react-i18next'

export default function PricingSection() {
  const { t } = useTranslation();

  return (
    <section id="pricing">
        <h1>Kosten</h1>
        <div><Trans t={ t }>Pricing.text</Trans></div>
        <div>
            <h2>Kostenerstattung:</h2>
            <p>
            <Trans i18nKey='Pricing.text2'>
              <a href='https://www.osteokompass.de/patienteninfo-krankenkassen--'></a>
            </Trans>
            </p>
            <img src="" alt="Verband freier Osteopathen Logo"/>
        </div>
    </section>
  )
}
