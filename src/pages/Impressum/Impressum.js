import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import './styles.scss';

export default function Impressum() {
    const { t } = useTranslation();

    return (
        <div id='impressum'>
            <h1>{t('Impressum.title')}</h1>
            <p>{t('Impressum.law')}</p>
            <Trans t={ t }>Impressum.text</Trans>
        </div>
    )
}
