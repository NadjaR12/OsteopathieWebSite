import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import './styles.scss';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer">
        <div className='infobox'>
            <div>
                <h4><Trans t={ t }>Info.adresse</Trans></h4>
                <h4>{t('Info.email')}</h4>
                <h4>{t('Info.mobil')}</h4>
            </div>
        </div>
        <div className='disclaimer'>
            <a href="/impressum"><h4>{t('Footer.impressum')}</h4></a>
            <h4>|</h4>
            <a href="/datenschutz"><h4>{t('Footer.datenschutz')}</h4></a>            
        </div>
    </footer>
  )
}
