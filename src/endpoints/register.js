import axios from 'axios'

export default async function register(payload) {
    const response = await axios.post('/api/register', payload)

    return response;
}