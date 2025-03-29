import React from 'react'
import c from './mainReport.module.scss'
import { Icons } from '../../assets/icons'
import { API } from '../../api'

const ClientsReport = () => {
  const [dailyReport, setDailyReport] = React.useState({
    clients: 0,
    expenses: 0
  });

  React.useEffect(() => {
    API.getDailyClients()
      .then(res => {
        setDailyReport(prev => ({ ...prev, clients: res.data.clients_added_today }));
      });

    API.getDailyExpenses()
      .then(res => {
        setDailyReport(prev => ({ ...prev, expenses: res.data.spent_today }));
      });
  }, []);

  return (
    <div className={c.reports}>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.date} alt="date" />
          <h3>Итого клиентов за сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>{dailyReport.clients} клиентов</h1>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.expenses} alt="expenses" />
          <h3>Расходы за сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>{dailyReport?.expenses} сом</h1>
        </div>
      </div>
      <div className={c.card}>
        <div className={c.up}>
          <img src={Icons.document} alt="document" />
          <h3>Касса на сегодня</h3>
        </div>
        <div className={c.down}>
          <h1>0 сом</h1>
        </div>
      </div>
    </div>
  )
}

export default ClientsReport
