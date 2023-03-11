import React from 'react'
import { useTranslation } from 'react-i18next';

import './styles.scss';

export default function Card({title, description,text, className}) {
    const { t } = useTranslation();

    return (
    <div id='card' className={className}>
        <h2>{t(title)}</h2>
        <div className='hoverfield'>
            <p>{t(description)}</p>
            <h3>{t('AboutOsteo.categories.applied')}</h3>
            <p>{t(text)}</p>
        </div>
    </div>
  )
}
