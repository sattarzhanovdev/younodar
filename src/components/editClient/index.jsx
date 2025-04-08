import React, { Component } from 'react'
import c from './add.module.scss'
import { Icons } from '../../assets/icons'
import { InputMask } from '@react-input/mask';
import { API } from '../../api';
import { Components } from '..';

const EditClient = ({setActive}) => {
  const [count, setCount] = React.useState(1)
  const [workers, setWorkers] = React.useState(null)
  const [countSells, setCountSell] = React.useState(1)
  const [ active, setActiveState ] = React.useState(false)
  const [ type, setType ] = React.useState('')
  const [ data, setData ] = React.useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    services: [],
    product: [],
    master: [],
    cabinet: {
      name: '',
      time: ''
    },
    payment: ''
  })

  React.useEffect(() => {
    API.getWorkers()
      .then(res => setWorkers(res.data))
  }, [])

  React.useEffect(() => {
    setData(prev => ({
      ...prev,
      services: Array.from({ length: count }, (_, i) => prev.services[i] || {
        name: '',
        assigned: '',
        price: ''
      })
    }));
  }, [count]);

  React.useEffect(() => {
    setData(prev => ({
      ...prev,
      product: Array.from({ length: countSells }, (_, i) => prev.product[i] || {
        name: '',
        price: '',
        amount: ''
      })
    }));
  }, [countSells]);


  const updateArrayField = (arrayKey, index, field, value) => {
    setData(prev => {
      const updatedArray = [...prev[arrayKey]];
      updatedArray[index] = {
        ...updatedArray[index],
        [field]: value
      };
      return { ...prev, [arrayKey]: updatedArray };
    });
  };

  const handleAddClient = () => {
    const dataRes = {
      ...data,
      master: { data: timeData, time: data.time },
      cabinet: { data: cabinetData, time: data.date},
      appointment_date: data.date,
      time: data.time
    }


    API.postClient(dataRes)
      .then(res => {
        alert('Клиент успешно добавлен')
        setActive(false)
      })
  }

  const timeData = JSON.parse(localStorage.getItem('time'))
  const cabinetData = JSON.parse(localStorage.getItem('cabinetData'))

  React.useEffect(() => {
    if (!timeData) {
      localStorage.setItem('time', JSON.stringify([]))
    }
    if (!cabinetData) {
      localStorage.setItem('cabinetData', JSON.stringify([]))
    }
  }, [])
  return (
    <div className={c.add}>
      <div className={c.client}>
        <h2>Клиент:
          <form>
            <div>
              <input type="radio" id="payed" />
              <label htmlFor="payed">Оплачено</label>
            </div>
            <div>
              <input type="radio" id="rent" />
              <label htmlFor="rent">Бронь</label>
            </div>
            <div>
              <input type="radio" id="canceled" />
              <label htmlFor="canceled">Отмена</label>
            </div>
            <div>
              <input type="radio" id="transfer" />
              <label htmlFor="transfer">Перенос</label>
            </div>
          </form>
        </h2>
        <form>
          <div>
            <span>Имя клиента</span>
            <input
              type="text"
              placeholder='Введите имя клиента'
              value={data.name}
              onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <span>Номер телефона</span>
            <InputMask
              mask="+996 (___) __-__-__"
              placeholder="Введите номер телефона"
              replacement={{ _: /\d/ }}
              value={data.phone}
              onChange={e => setData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <div>
            <span>Дата приема</span>
            <InputMask
              mask="__.__.__"
              placeholder="Дата посещения клиента"
              replacement={{ _: /\d/ }}
              value={data.date}
              onChange={e => setData(prev => ({ ...prev, date: e.target.value }))}
            />
          </div>
          <div>
            <span>Время приема</span>
            <InputMask
              mask="__:__"
              placeholder="Время посещения клиента"
              replacement={{ _: /\d/ }}
              value={data.time}
              onChange={e => setData(prev => ({ ...prev, time: e.target.value }))}
            />
          </div>
        </form>
      </div>
      <div className={c.servicesAdd} >
        <h2>Добавление услуг</h2>
        <form>
        {
          data.services.map((service, index) => (
          <div key={index} className={c.values}>
            <div>
              <span>Наименование услуги</span>
              <input
                type="text"
                placeholder="Введите наименование услуги"
                value={service.name}
                onChange={e => updateArrayField('services', index, 'name', e.target.value)}
              />
            </div>
            <div>
              <span>Назначенный</span>
              <input
                type="text"
                placeholder="Введите назначенного"
                value={service.assigned}
                onChange={e => updateArrayField('services', index, 'assigned', e.target.value)}
                />
            </div>
            <div>
              <span>Стоимость услуг</span>
              <input
                type="number"
                placeholder="Введите стоимость"
                value={service.price}
                onChange={e => updateArrayField('services', index, 'price', e.target.value)}
                />
            </div>
          </div>
          ))
        }
        </form>
        <button onClick={() => setCount(count + 1)}>
          <img src={Icons.plus} alt="plus" />
          Добавить услугу
        </button>
      </div>
      <div className={c.client}>
        <h2>Распределение клиента</h2>

        <div className={c.services}>
          <h3>Выбор мастера:</h3>
          <form>
            <div>
              {
                workers?.map(item => (
                  <label onClick={() => setData(prev => ({
                    ...prev,
                    master: {
                      ...prev.master,
                      name: item.name,
                      time: '22:00'
                    }
                  }))} key={item.id}>
                    <input type="radio" name="option" />
                    <p>{item.name}</p>
                    <div className={c.times}>
                      {
                        timeData?.length > 0 ?
                        timeData?.map((time, id) => (
                          <span key={id}>{time.time} - {time.name}</span>
                        ))
                        :
                        null
                      }
                      <span className={c.adding} onClick={() => {
                        setActiveState(true)
                        localStorage.setItem('master', JSON.stringify(item.name))
                        setType('time')
                      }}>
                        <img src={Icons.addGray} alt="" />
                        Введите назначенное время
                      </span>
                    </div>
                  </label>
                ))
              }
            </div>
          </form>
          <h3>Выбор кабинета:</h3>
          <form>
            <div>
              <label onClick={() => setData(prev => ({
                ...prev,
                cabinet: {
                  ...prev.cabinet,
                  name: 'Кабинет 1',
                  time: '22:00'
                }
              }))}>
                <input type="radio" name="option" />
                <p>Кабинет 1</p>
                <div className={c.times}>
                  {
                    cabinetData?.length > 0 ?
                    cabinetData?.map((time, id) => (
                      <span key={id}>{time.time} - {time.name}</span>
                    ))
                    :
                    null
                  }
                  <span className={c.adding} onClick={() => {
                      setActiveState(true)
                      localStorage.setItem('cabinet', JSON.stringify('Кабинет 1'))
                      setType('cabinet')
                    }}>
                    <img src={Icons.addGray} alt="" />
                    Введите назначенное время
                  </span>
                </div>
              </label>
            </div>
          </form>
        </div>

      </div>
      <div className={c.servicesAdd}>
        <h2>Добавление продаж</h2>
        <form>
          {
            data.product.map((prod, index) => (
            <div key={index} className={c.values}>
              <div>
                <span>Наименование продукта</span>
                <input
                  type="text"
                  placeholder="Введите наименование продукта"
                  value={prod.name}
                  onChange={e => updateArrayField('product', index, 'name', e.target.value)}
                  />
              </div>
              <div>
                <span>Стоимость услуги</span>
                <input
                  type="text"
                  placeholder="Введите стоимость"
                  value={prod.assigned}
                  onChange={e => updateArrayField('product', index, 'price', e.target.value)}
                  />
              </div>
              <div>
                <span>Количество</span>
                <input
                  type="number"
                  placeholder="Введите количество"
                  value={prod.amount}
                  onChange={e => updateArrayField('product', index, 'amount', e.target.value)}
                />
              </div>
            </div>
            ))
          }
        </form>
        <button onClick={() => setCountSell(countSells + 1)}>
          <img src={Icons.plus} alt="plus" />
          Добавление продаж
        </button>
      </div>
      <div className={c.res}>
        <div className={c.left}>
          <h1>К оплате: {data.services.reduce((a,b) => a+=Number(b.price), 0) + data.product.reduce((a,b) => (a+=Number(b.price))*b.amount, 0) } сом</h1>
          <form>
            <div>
              <input
                type="radio"
                id="Mkassa"
                name="payment"
                value="Mkassa"
                checked={data.payment === 'Mkassa'}
                onChange={e => setData(prev => ({ ...prev, payment: e.target.value }))}
              />
              <label htmlFor="Mkassa">Mkassa</label>
            </div>
            <div>
              <input
                type="radio"
                id="full"
                name="payment"
                value="full"
                checked={data.payment === 'full'}
                onChange={e => setData(prev => ({ ...prev, payment: e.target.value }))}
              />
              <label htmlFor="full">Оплата полностью</label>
            </div>
            <div>
              <input
                type="radio"
                id="credit"
                name="payment"
                value="credit"
                checked={data.payment === 'credit'}
                onChange={e => setData(prev => ({ ...prev, payment: e.target.value }))}
              />
              <label htmlFor="credit">В кредит</label>
            </div>
          </form>

        </div>
        <div className={c.right}>
          <button onClick={() => setActive(false)}>
            Отменить
          </button>
          <button onClick={() => handleAddClient()}>
            <img src={Icons.addGreen} alt="add" />
            Добавить клиента
          </button>
        </div>
      </div>

      {
        active ?
        <Components.AddTime type={type} setActive={setActiveState} />
        :
        null
      }
    </div>
  )
}

export default EditClient
