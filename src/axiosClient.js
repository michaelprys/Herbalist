import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
});
