import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import Card from '../../components/Card/Card';

import './styles.scss';

export default function AboutOsteo() {
    const { t } = useTranslation();
   
    return (
        <section id="about-osteo">
            <div>
                <h1>{t('AboutOsteo.title')}</h1>
                <h3>{t('AboutOsteo.subtitle')}</h3>
            </div>
            <div><Trans t={ t }>AboutOsteo.text</Trans></div>
                <div className='osteo-variants'>
                    <p>{t('AboutOsteo.text2')}</p>
                <div className='osteo-variants'>
                    <Card title={'AboutOsteo.categories.title1'} description={'AboutOsteo.categories.description1'} text={'AboutOsteo.categories.text1'}/>
                    <Card title={'AboutOsteo.categories.title2'} description={'AboutOsteo.categories.description2'} text={'AboutOsteo.categories.text2'}/>
                    <Card title={'AboutOsteo.categories.title3'} description={'AboutOsteo.categories.description3'} text={'AboutOsteo.categories.text3'}/>
                </div>
            </div>
        </section>
)}
