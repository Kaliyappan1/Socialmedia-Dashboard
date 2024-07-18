import axios from "axios";

const API_URL = 'https://localhost:8080/api';

export const getAllUsers = async () => {
    try{
        const res = await axios.get(`${API_URL}/Users`);
    }catch (err) {
        console.error('error:', err);
        throw err
    }
};
