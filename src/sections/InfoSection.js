import React from 'react'

import { useTranslation } from 'react-i18next';

export default function InfoSection() {
    const { t } = useTranslation();

  return (
    <section id="info">
        <p>{t('Info.Title')}</p>
        <div>
            <img src="" alt="map"/>
            <div>
                <h4>{t('Info.Adresse')}</h4>
                <h4>{t('Info.Adresse')}</h4>
                <h4>{t('Info.Mobil')}</h4>
                <h4>{t('Info.Termine1')}</h4>
                <h4>{t('Info.Termine2')}</h4>
            </div>
         </div>
    </section>  
)
}
