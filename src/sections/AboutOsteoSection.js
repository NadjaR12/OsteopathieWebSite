import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

export default function AboutOsteo() {
    const { t } = useTranslation();


  return (
        <section id="about-osteo">
            <div>
                <h1>{t('AboutOsteo.title')}</h1>
                <h2>{t('AboutOsteo.subtitle')}</h2>
            </div>
            <div>{t('AboutOsteo.text')}</div>
            <div>
                <p>{t('AboutOsteo.text2')}</p>
            <div>
                <div>
                    <img src="" alt="viszerale-osteopathie"/>
                    <h2>Viszerale Osteopathie</h2>
                    <div>
                        <h3>Behandlung der inneren Organe, der Blut- und Lymphgefäße.</h3>
                        <h3>Kann unter anderem angewendet werden bei:</h3>
                        <p>Verdauungsbeschwerden, Störungen des Magen-Darm-Traktes oder anderer Bauchorgane, Narbenschmerzen, Menstruationsbeschwerden, Blasenbeschwerden, Müdigkeit, Lymph-Abfluss-Problematik</p>
                    </div>
                </div>
                <div>
                        <img src="" alt="kraniosakrale-osteopathie"/>
                        <h2>Kraniosakrale Osteopathie</h2>
                        <div>
                            <h3>Sanfte Behandlung feinster Bewegungen von Schädelknochen, Wirbelsäule und Kreuzbein, sowie des Nervensystems.</h3>
                            <h3>Kann unter anderem angewendet werden bei:</h3>
                            <p>chronischen Schmerzen (z.B. Fibromyalgie), Schlafstörungen, Schwindel, Tinnitus, Stress, Unfallfolgen, Zähneknirschen/ Kiefergelenksbeschwerden, Asthma, Schwangerschafts- und Menstruationsbeschwerden</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="parietale-osteopathie"/>
                        <h2>Parietale / Myofasziale Osteopathie</h2>
                        <div>
                            <h3>Behandlung der Gelenke, Knochen, Muskeln und der Bindegewebe – der Faszien, die den gesamten Körper und seine Organe umhüllen und verbinden.</h3>
                            <h3>Kann unter anderem angewendet werden bei:</h3>
                            <p>Muskelverspannungen, Gelenksschmerzen, Nacken- und Rückenschmerzen, Bewegungseinschränkungen, „Tennisarm“, Operations- und Unfallfolgen, Sportverletzungen, unterstützend bei Bandscheibenvorfall und Arthritis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
