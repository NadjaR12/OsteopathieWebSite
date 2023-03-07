import React from 'react'
import { useTranslation } from 'react-i18next';

import './styles.scss';

export default function CTA({message}) {
    const { t } = useTranslation();

  return (
    <button className='CTA_btn'>{t(message)}</button>
  )
}
