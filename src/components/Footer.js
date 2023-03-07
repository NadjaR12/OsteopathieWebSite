import React from 'react'
import { useTranslation } from 'react-i18next'


export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer">
        <div>
            <a href=""><h4>{t('Footer.impressum')}</h4></a>
            <h4>|</h4>
            <a href=""><h4>{t('Footer.datenschutz')}</h4></a>            
        </div>
    </footer>
  )
}
