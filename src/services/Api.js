import axios from 'axios';

class Api {
    constructor() {
    }

    get(endpoint, params) {
        return axios.get(endpoint, params);
    }

    post(endpoint, params = {}) {
        return axios.post(endpoint, params);
    }

}

export default Api;