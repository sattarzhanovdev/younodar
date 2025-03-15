import React from 'react'
import c from './workers.module.scss'

const ExpensesTable = () => {
  const [ month, setMonth ] = React.useState()
  const [ period, setPeriod ] = React.useState(1)

  React.useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString('ru', { month: 'long' })
    setMonth(month.slice(0, 1).toUpperCase() + month.slice(1))
  }, [])

  return (
    <div className={c.workers}>
      <div className={c.table}>
        <table>
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Количество</th>
              <th>Добавлено за сегодня</th>
              <th>
                Израсходовано за сегодня
                <button>
                  + Добавить
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Филлер</td>
              <td>4</td>
              <td>5 единиц</td>
              <td>5 единиц</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExpensesTable
