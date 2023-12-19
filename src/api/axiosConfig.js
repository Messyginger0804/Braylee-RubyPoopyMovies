import 'dotenv/config'
import axios from 'axios';

// require('dotenv').config();

// import * as dotenv from 'dotenv'


// dotenv.config()

// console.log(process.env)

// const API = process.env.PORT
const API = 'https://movies-api-mbgf.onrender.com'


export default axios.create({
    baseURL: API,
    headers: { "ngrok-skip-browser-warning": "true" }
});

// http://localhost:8080/api/v1/movies