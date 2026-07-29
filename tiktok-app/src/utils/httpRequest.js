import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || process.env.REACT_APP_BASE_URL || 'https://tiktok.fullstack.edu.vn/api/',
});

// path: 'users/search' 
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
}

export default httpRequest;