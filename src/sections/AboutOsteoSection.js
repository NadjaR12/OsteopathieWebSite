import React from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';


const AboutOsteo = () => (
   
        <section id="about-osteo">
            <div>
                <h1><Trans>AboutOsteo.title</Trans></h1>
                <h2><Trans>AboutOsteo.subtitle</Trans></h2>
            </div>
            <div><Trans>AboutOsteo.text</Trans></div>
            <div>
                <p><Trans>AboutOsteo.text2</Trans></p>
            <div>
                <div>
                    <img src="" alt="viszerale-osteopathie-img"/>
                    <h2><Trans>AboutOsteo.categories.title1</Trans></h2>
                    <div>
                        <h3><Trans>AboutOsteo.categories.description1</Trans></h3>
                        <h3><Trans>AboutOsteo.categories.applied</Trans></h3>
                        <p><Trans>AboutOsteo.categories.text1</Trans></p>
                    </div>
                </div>
                <div>
                        <img src="" alt="kraniosakrale-osteopathie"/>
                        <h2><Trans>AboutOsteo.categories.title2</Trans></h2>
                        <div>
                            <h3><Trans>AboutOsteo.categories.description2</Trans></h3>
                            <h3><Trans>AboutOsteo.categories.applied</Trans></h3>
                            <p><Trans>AboutOsteo.categories.text2</Trans></p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="parietale-osteopathie"/>
                        <h2><Trans>AboutOsteo.categories.title3</Trans></h2>
                        <div>
                            <h3><Trans>AboutOsteo.categories.description3</Trans></h3>
                            <h3><Trans>AboutOsteo.categories.applied</Trans></h3>
                            <p><Trans>AboutOsteo.categories.text3</Trans></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);

export default withTranslation() (AboutOsteo);
