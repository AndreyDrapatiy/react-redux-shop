import axios from 'axios'

export default axios.create({
    baseURL: 'https://ownproject-eb44c.firebaseio.com/'
});

