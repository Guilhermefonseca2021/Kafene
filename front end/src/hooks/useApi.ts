import axios from 'axios';
 
const api = axios.create({
    baseURL: 'https://localhost3333'
})

export const useApi = () => ({
    validateToken:  async (token: string) => {
        const response = await api.post('/contact', { token });
        return response.data;
    },
    signin: async(email: string, password: string) => {
        return {
            user: { id: 3, name: 'guilherme', email: 'gsbloogs194@gmail.com' },
            token: 'u23u237r27f.f434f3f.434f3' 
        };
        const response = await api.post('/signin', { email, password });
        // return response.data   
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
});