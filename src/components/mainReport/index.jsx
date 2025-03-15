import React from 'react'
import c from './mainReport.module.scss'
import { Icons } from '../../assets/icons'

const MainReport = () => {
  return (
    <div className={c.reports}>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.date} alt="date" />
          <h3>Итого оборота за месяц</h3>
        </div>
        <div className={c.down}>
          <h1>5600.00$</h1>
          <button>Посмотреть</button>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.expenses} alt="expenses" />
          <h3>Расходы за месяц</h3>
        </div>
        <div className={c.down}>
          <h1>250.00$</h1>
          <button>Посмотреть</button>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.document} alt="document" />
          <h3>Клиентов за месяц</h3>
        </div>
        <div className={c.down}>
          <h1>250.00$</h1>
          <button>Посмотреть</button>
        </div>
      </div>
    </div>
  )
}

export default MainReport
