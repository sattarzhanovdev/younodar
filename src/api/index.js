import axios from "axios";

export const API = {
  getClients: () => axios.get('https://younodar.pythonanywhere.com/clients/clients/'),
  postClient: (data) => axios.post('https://younodar.pythonanywhere.com/clients/clients/', data),
  getExpenses: () => axios.get('https://younodar.pythonanywhere.com/clients/expenses/'),
  postExpenses: (data) => axios.post('https://younodar.pythonanywhere.com/clients/expenses/', data),
  postStock: (data) => axios.post('https://younodar.pythonanywhere.com/clients/stock/', data),
  getDailyExpenses: () => axios.get('https://younodar.pythonanywhere.com/clients/expenses/stats/daily/'),
  getWorkers: () => axios.get('https://younodar.pythonanywhere.com/clients/workers/'),
  getDailyClients: () => axios.get('https://younodar.pythonanywhere.com/clients/today/'),
  getStocks: () => axios.get('https://younodar.pythonanywhere.com/clients/stock/'),
}
