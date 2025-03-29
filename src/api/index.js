import axios from "axios";

export const API = {
  getClients: () => axios.get('https://younodar.pythonanywhere.com/clients/clients/'),
  getExpenses: () => axios.get('https://younodar.pythonanywhere.com/clients/expenses/'),
  getDailyExpenses: () => axios.get('https://younodar.pythonanywhere.com/clients/expenses/stats/daily/'),
  getWorkers: () => axios.get('https://younodar.pythonanywhere.com/clients/workers/'),
  getDailyClients: () => axios.get('https://younodar.pythonanywhere.com/clients/today/')
}
