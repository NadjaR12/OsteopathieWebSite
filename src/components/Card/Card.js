import React from 'react'
import { useTranslation } from 'react-i18next';

import './styles.scss';

export default function Card({img, alt, title, description,text}) {
    const { t } = useTranslation();

    return (
    <div>
    <img src={img} alt={alt}/>
    <h2>{t(title)}</h2>
    <div>
        <h3>{t(description)}</h3>
        <h3>{t('AboutOsteo.categories.applied')}</h3>
        <p>{t(text)}</p>
    </div>
</div>
  )
}
