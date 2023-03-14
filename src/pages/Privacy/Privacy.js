import React from 'react'
import { useTranslation, Trans } from 'react-i18next';

import './styles.scss';

export default function Privacy() {
  const { t } = useTranslation();

  return (
      <div id='privacy'>
          <h1>{t('Privacy.title')}</h1>
          <ol>
            <li><Trans t={ t }>Privacy.term1</Trans></li>
            <li><Trans t={ t }>Privacy.term2</Trans></li>
            <li><Trans i18nKey='Privacy.term3'>
                <ul>
                  <li>{t('Privacy.term3.list1')}</li>
                  <li>{t('Privacy.term3.list2')}</li>
                  <li>{t('Privacy.term3.list3')}</li>
                  <li>{t('Privacy.term3.list4')}</li>
                  <li>{t('Privacy.term3.list5')}</li>
                  <li>{t('Privacy.term3.list6')}</li>
                </ul>
            </Trans>
            </li>
            <li><Trans i18nKey='Privacy.term4'>
                <ul>
                  <li>{t('Privacy.term4.list1')}</li>
                  <li>{t('Privacy.term4.list2')}</li>
                  <li>{t('Privacy.term4.list3')}</li>
                </ul>
            </Trans>
            </li>
            <li><Trans i18nKey='Privacy.term5'>
                <ul>
                  <li>{t('Privacy.term5.list1')}</li>
                  <li>{t('Privacy.term5.list2')}</li>
                </ul>
            </Trans>
            </li>
            <li><Trans i18nKey='Privacy.term6'>
                <ul>
                  <li>{t('Privacy.term6.list1')}</li>
                  <li>{t('Privacy.term6.list2')}</li>
                  <li>{t('Privacy.term6.list3')}</li>
                  <li>{t('Privacy.term6.list4')}</li>
                  <li>{t('Privacy.term6.list5')}</li>
                </ul>
            </Trans>
            </li>            <li><Trans t={ t }>Privacy.term7</Trans></li>
            <li><Trans t={ t }>Privacy.term8</Trans></li>
            <li><Trans t={ t }>Privacy.term9</Trans></li>
            <li><Trans t={ t }>Privacy.term10</Trans></li>
          </ol>
      </div>
  )
  }