import React from 'react'

import './styles.scss'

export default function TransButton() {
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
      }

  return (
    <div id="language-switch">
        <button id="de-btn" onClick={changeLanguage} value='de'>DE</button>
        <button id="en-btn" onClick={changeLanguage} value='en'>EN</button>
    </div>
  )
}
