import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ArrowDown from '../../images/arrow-down.png'
import ArrowUp from '../../images/arrow-up.png' 

import './styles.scss';

export default function Card({title, description,text, className}) {
    const { t } = useTranslation();

    const [showText, setShowText] = useState(false)

    return (
    <div id='card' className={className}>
        <h2>{t(title)}</h2>
        <div className='arrow-down' onClick={() => {setShowText(!showText)}}>
            <img src={showText? ArrowUp : ArrowDown} alt='clickable  arrow pointing down'/>
        </div>
        {showText&& 
        <div className='hoverfield'>
            <p>{t(description)}</p>
            <h3>{t('AboutOsteo.categories.applied')}</h3>
            <p>{t(text)}</p>
        </div>}
    </div>
  )
}
