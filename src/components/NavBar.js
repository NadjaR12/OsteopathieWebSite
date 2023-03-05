import React from 'react'
import {useTranslation} from 'react-i18next';

export default function NavBar() {
    const { t } = useTranslation();
  return (
    <nav id="navbar">
        <div>
            <img src="" alt="logo"/>
            <button>{t('CTA.Termin')}</button>
        </div>
        <div>
            <h4>{t('NavBar.Osteopathie')}</h4>
            <h4>{t('NavBar.Behandlung')}</h4>
            <h4>{t('NavBar.Kosten')}</h4>
            <h4>{t('NavBar.ÜberMich')}</h4>
        </div>
    </nav>
  )
}
