import React from 'react'
import c from './workers.module.scss'
import { periods } from '../../utils'
import { Icons } from '../../assets/icons'
import { API } from '../../api'

const ClientsTable = () => {
  const [ month, setMonth ] = React.useState()
  const [ clients, setClients ] = React.useState(null)
  const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  React.useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString('ru', { month: 'long' })
    setMonth(month.slice(0, 1).toUpperCase() + month.slice(1))

    API.getClients()
      .then(res => {
        console.log(res.data)
        setClients(res.data)
      })
  }, [])

  const getWeeksInMonth = (year, month) => {
    let weeks = [];
    let startDate = new Date(year, month, 1);
    let endDate = new Date(year, month + 1, 0); // Последний день месяца

    let currentWeek = [];
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      currentWeek.push(new Date(day));

      // Если воскресенье или последний день месяца – закрываем неделю
      if (day.getDay() === 0 || day.getDate() === endDate.getDate()) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    }

    return weeks;
  };

  const [selectedWeek, setSelectedWeek] = React.useState(1);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const weeks = getWeeksInMonth(currentYear, currentMonth);

  const filteredClients = React.useMemo(() => {
    if (!clients) return [];

    // Если выбрана 5-я неделя (условно "Весь месяц"), показываем всех клиентов за выбранный месяц
    if (selectedWeek === 5) {
      return clients.filter(client => client.appointment_month - 1 === currentMonth);
    }

    if (!weeks[selectedWeek]) return clients; // Если нет данных о неделях, показываем всех клиентов

    const [start, end] = [weeks[selectedWeek][0], weeks[selectedWeek].slice(-1)[0]];

    return clients.filter(client => {
      if (!client.appointment_day || !client.appointment_month) return false;

      const clientDate = new Date(currentYear, client.appointment_month - 1, client.appointment_day);

      return clientDate >= start && clientDate <= end;
    });
  }, [clients, selectedWeek]);

  return (
    <div className={c.workers}>
      <div className={c.title}>
        <div className={c.left}>
          <button>
            + Добавить
          </button>

          <div className={c.search}>
            <img src={Icons.search} alt="search" />
            <input
              type="text"
              placeholder='Найти клиентов'
            />
          </div>
        </div>
        <div className={c.right}>
          <div className={c.date}>
            <span>
              {month}
            </span>
            <button>
              Выбрать месяц
            </button>
          </div>
          <span className={c.line}></span>
          <div className={c.periods}>
            {
              periods.map(item => (
                <button key={item.id} className={selectedWeek === item.id ? c.active : ''} onClick={() => setSelectedWeek(item.id)}>
                  {item.title}
                </button>
              ))
            }
          </div>
        </div>
      </div>
      <div className={c.table}>
        <table>
          <thead>
            <tr>
              <th>
                <img src={Icons.edit} alt="edit" />
              </th>
              <th>Время</th>
              <th>Ф.И.О клиента</th>
              <th>Телефон</th>
              <th className={c.services}>Процедуры</th>
              <th>Сотрудник</th>
              <th>Прайс по итогу</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredClients && filteredClients.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={Icons.edit} alt="edit" />
                  </td>
                  <td>
                    <div className={c.date}>
                      {item.appointment_day} {months[item.appointment_month - 1]}
                    </div>
                    <div className={c.date}>
                      {item.appointment_time.slice(0, 5)}
                    </div>
                  </td>
                  <td>{item.full_name}</td>
                  <td>{item.phone_number}</td>
                  <td className={c.services}>
                    {item?.services.map(value => (
                      <div key={value.id} className={c.service}>
                        {value.name}
                      </div>
                    ))}
                  </td>
                  <td>
                    <div className={c.worker}>
                      {item.worker.name}
                    </div>
                  </td>
                  <td>{Array.isArray(item?.services)
                  ? item.services.reduce((sum, obj) => sum + Number(obj.price), 0)
                  : 0}
                </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClientsTable
