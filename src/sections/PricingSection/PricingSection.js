import React from 'react'

import OsteoLogo from '../../images/osteo-verband-logo.png'
import { Trans, useTranslation } from 'react-i18next'

import './styles.scss';

export default function PricingSection() {
  const { t } = useTranslation();

  return (
    <section id="pricing">
        <h1>{t('Pricing.title')}</h1>
        <div className='pricing-info'>
          <Trans t={ t }>Pricing.costs</Trans>
          <Trans t={ t }>Pricing.billing</Trans>
          <p className='pricing-cancelation'><Trans t={ t }>Pricing.cancelation</Trans></p>
        </div>
        <div>
            <h2>{t('Pricing.subtitle')}</h2>
            <p>
            <Trans i18nKey='Pricing.text2'>
              <a href='https://www.osteokompass.de/patienteninfo-krankenkassen--'></a>
            </Trans>
            </p>
            <img src={OsteoLogo} alt="Verband freier Osteopathen Logo"/>
        </div>
    </section>
  )
}
