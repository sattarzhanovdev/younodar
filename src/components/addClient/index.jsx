import React from 'react'
import c from './add.module.scss'
import { Icons } from '../../assets/icons'

const AddClient = ({setActive}) => {
  return (
    <div className={c.add}>
      <div className={c.client}>
        <h2>Добавление клиента</h2>
        <form>
          <div>
            <span>Имя клиента</span>
            <input
              type="text"
              placeholder='Введите имя клиента'
            />
          </div>
          <div>
            <span>Номер телефона</span>
            <input
              type="text"
              placeholder='Введите номер телефона'
            />
          </div>
          <div>
            <span>Дата приема</span>
            <input
              type="text"
              placeholder='Введите дату приема'
            />
          </div>
        </form>
      </div>
      <div className={c.client}>
        <h2>Добавление услуг</h2>
        <form>
          <div>
            <span>Наименование услуг</span>
            <input
              type="text"
              placeholder='Введите наименование услуги'
            />
          </div>
          <div>
            <span>Назначенный</span>
            <input
              type="text"
              placeholder='Введите назначенного'
            />
          </div>
          <div>
            <span>Стоимость услуг</span>
            <input
              type="text"
              placeholder='Введите стоимость'
            />
          </div>
        </form>
        <button>
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
              <label>
                <input type="radio" name="option" />
                <p>Кумушай</p>
                <div className={c.times}>
                  <span>11:00 - Кавитанция</span>
                  <span>13:00 - Перевязка</span>
                </div>
              </label>
              <label>
                <input type="radio" name="option" />
                <p>Кумушай</p>
                <div className={c.times}>
                  <span>11:00 - Кавитанция</span>
                  <span>13:00 - Перевязка</span>
                </div>
              </label>
            </div>
          </form>
          <h3>Выбор кабинета:</h3>
          <form>
            <div>
              <label>
                <input type="radio" name="option" />
                <p>Кабинет 1</p>
                <div className={c.times}>
                  <span>11:00 - Кавитанция</span>
                  <span className={c.adding}>
                    <img src={Icons.addGray} alt="" />
                    Добавить
                  </span>
                </div>
              </label>
            </div>
          </form>
        </div>

      </div>
      <div className={c.res}>
        <div className={c.left}>
          <h1>К оплате: 76 000 сом</h1>
          <form>
            <div>
              <input type="radio" id="Mkassa" name="payment" />
              <label htmlFor="Mkassa">Mkassa</label>
            </div>
            <div>
              <input type="radio" id="full" name="payment" />
              <label htmlFor="full">Оплата полностью</label>
            </div>
            <div>
              <input type="radio" id="credit" name="payment" />
              <label htmlFor="credit">В кредит</label>
            </div>
          </form>
        </div>
        <div className={c.right}>
          <button onClick={() => setActive(false)}>
            Отменить
          </button>
          <button>
            <img src={Icons.addGreen} alt="add" />
            Добавить клиента
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddClient
