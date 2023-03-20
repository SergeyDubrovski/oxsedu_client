import axios from "axios";
let AUTH_TOKEN;

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/user/registration'
})
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default class RegLogServise {

    static async regUser({ email, password, role }) {
        const result = await instance.post('', { email, password, role });
        return result.data
    }
}