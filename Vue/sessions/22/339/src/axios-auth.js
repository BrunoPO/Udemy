//this is a local instance of axios
// this allows you specify a axios intance to an a especific situation.
// this will merge with the global axios

import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
    // baseURL: 'https://vuejs-http-ce381.firebaseio.com'
});

// instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;