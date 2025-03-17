// let moment = require('moment');

import moment from 'moment';
import axios from 'axios'

console.log('mano pvz');

console.log(moment().format())

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    console.log(response.data)
    console.log(JSON.stringify(response.data, null,2))
}).catch(error => console.log(error));