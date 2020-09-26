import axios from 'axios';

const fetchHistory = (userId, action = '', page = 1) => axios.get(`/api/history/u/${userId}?page=${page}&action=${action}`).then(({data}) => data);

export default {
  fetchHistory
}