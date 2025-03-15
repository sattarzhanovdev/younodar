import React from 'react'
import c from './mainReport.module.scss'
import { Icons } from '../../assets/icons'

const ExpensesReport = () => {
  return (
    <div className={c.reports}>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.date} alt="date" />
          <h3>Итого наименований</h3>
        </div>
        <div className={c.down}>
          <h1>250 наименований</h1>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.expenses} alt="expenses" />
          <h3>Израсходовано за сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>5 наименований</h1>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.document} alt="document" />
          <h3>Добавлено сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>57 наименований</h1>
        </div>
      </div>
    </div>
  )
}

export default ExpensesReport
