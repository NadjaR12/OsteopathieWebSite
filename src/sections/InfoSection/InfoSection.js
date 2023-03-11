import React from 'react'
import Map from '../../images/map-praxis-rada.png'

import { Trans, useTranslation } from 'react-i18next';

import './styles.scss';

export default function InfoSection() {
    const { t } = useTranslation();

  return (
    <section id="info">
        <p>{t('Info.title')}</p>
        <div className='infobox'>
            <img src={Map} alt="map"/>
            <div>
                <h4><Trans t={ t }>Info.adresse</Trans></h4>
                <h4>{t('Info.email')}</h4>
                <h4>{t('Info.mobil')}</h4>
                <h4><Trans t={ t }>Info.termine</Trans></h4>
            </div>
         </div>
    </section>  
)
}
