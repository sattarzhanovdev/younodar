import React from 'react'
import c from './mainReport.module.scss'
import { Icons } from '../../assets/icons'
import { API } from '../../api'

const FinancesReport = () => {
  const [ expense, setExpense ] = React.useState(0)

  React.useEffect(() => {
    API.getDailyExpenses()
      .then(res => setExpense(res.data))
  }, [])

  return (
    <div className={c.reports}>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.date} alt="date" />
          <h3>Итого закупа за сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>15 наименований</h1>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.expenses} alt="expenses" />
          <h3>Расходы за сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>{expense?.spent_today}</h1>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.document} alt="document" />
          <h3>Расходов за месяц</h3>
        </div>
        <div className={c.down}>
          <h1>450 000 сом</h1>
        </div>
      </div>
    </div>
  )
}

export default FinancesReport
