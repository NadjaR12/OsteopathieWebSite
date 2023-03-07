import React from 'react'
import { useTranslation } from 'react-i18next';

import CTA from '../CTA/CTA';

import './styles.scss';

export default function NavBar() {
    const { t } = useTranslation();
  return (
    <nav className='NavBar'>
        <div className='NavBar_header'>
            <img src="" alt="logo"/>
            <CTA message={'CTA.Termin'}/>
        </div>
        <div className='NavBar_navigation'>
            <h5>{t('NavBar.Osteopathie')}</h5>
            <h5>{t('NavBar.Behandlung')}</h5>
            <h5>{t('NavBar.Kosten')}</h5>
            <h5>{t('NavBar.ÜberMich')}</h5>
        </div>
    </nav>
  )
}
