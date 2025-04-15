import React from 'react'
import c from './appointments.module.scss'

const Cabinets = () => {
  return (
    <div className={c.appointments}>
      <div className={c.header}>
        <h1>
          Нагрузка кабинетов
        </h1>
        <span>
          14 марта
        </span>
      </div>

      <div className={c.workers}>
        <div className={c.worker}>
          <p>Кабинет 1</p>
          <div className={c.times}>
            <span>
              12:00 - Кавитанция
            </span>
            <span>
              12:00 - Кавитанция
            </span>
            <span>
              12:00 - Кавитанция
            </span>
          </div>
        </div>

        <div className={c.worker}>
          <p>Кабинет 2</p>
          <div className={c.times}>
            <span>
              12:00 - Кавитанция
            </span>
            <span>
              12:00 - Кавитанция
            </span>
            <span>
              12:00 - Кавитанция
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cabinets