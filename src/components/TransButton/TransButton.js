import React from 'react'
import { useTranslation } from 'react-i18next'

import './styles.scss'

export default function TransButton() {
    const { i18n } = useTranslation();

    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
        e.preventDefault();
      }

  return (
    <div className="language-switch">
        <button id="de-btn" onClick={changeLanguage} value='de'>DE</button>
        <h4>|</h4>
        <button id="en-btn" onClick={changeLanguage} value='en'>EN</button>
    </div>
  )
}
