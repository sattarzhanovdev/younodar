import axios from "axios";

export const API = {
  getClients: () => axios.get('https://younodar.pythonanywhere.com/clients/clients/'),
  getExpenses: () => axios.get('https://younodar.pythonanywhere.com/clients/expenses/')
}
