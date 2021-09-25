import React from 'react'
import style from './welcome.module.scss'
import { useTranslation } from 'react-i18next'

export function Welcome(){
  const { t, i18n } = useTranslation();

  function ptbr(){
    i18n.changeLanguage('pt_BR')
  }

  function en(){
    i18n.changeLanguage('en')
  }

  return (
    <div data-testid="welcome" className={style.welcome}>
      <h1 data-testid="title" className={style.title}> CN Next starter </h1>
      <p data-testid="description" className={style.description}> { t('description') } </p>
      <span data-testid="version"> { process.env.NEXT_PUBLIC_VERSION } </span>

      <br />

      <div className={style.buttons}>
        <button className={style.button} onClick={ptbr}> pt_BR </button>
        <button className={style.button} onClick={en}> en </button>
      </div>
    </div>
  )
}
