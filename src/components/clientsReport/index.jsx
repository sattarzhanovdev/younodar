import React from 'react'
import c from './mainReport.module.scss'
import { Icons } from '../../assets/icons'

const ClientsReport = () => {
  return (
    <div className={c.reports}>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.date} alt="date" />
          <h3>Итого клиентов за сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>13 клиентов</h1>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.expenses} alt="expenses" />
          <h3>Расходы за сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>25000</h1>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.document} alt="document" />
          <h3>Клиентов в записи на эту неделю</h3>
        </div>
        <div className={c.down}>
          <h1>665 клиентов</h1>
        </div>
      </div>
    </div>
  )
}

export default ClientsReport
