import axios from 'axios'

const AXIOS_AUTH_INSTANCE = axios.create({
    // baseURL: 'https://vue-axios-2e0d7.firebaseio.com'
    baseURL: 'https://identitytoolkit.googleapis.com/v1/'
})

// AXIOS_AUTH_INSTANCE.defaults.headers.common['SOMETHING'] = 'something'

export default AXIOS_AUTH_INSTANCE