import axios from "axios";

export const API = {
  getClients: () => axios.get('/clients/clients/'),
  postClient: (data) => axios.post('/clients/clients/', data),
  getExpenses: () => axios.get('/clients/expenses/'),
  postExpenses: (data) => axios.post('/clients/expenses/', data),
  postStock: (data) => axios.post('/clients/stock/', data),
  getDailyExpenses: () => axios.get('/clients/expenses/stats/daily/'),
  getWorkers: () => axios.get('/clients/workers/'),
  getDailyClients: () => axios.get('/clients/today/'),
  getStocks: () => axios.get('/clients/stock/'),
  getMonthlyData: () => axios.get('/clients/stats/monthly/'),
}
