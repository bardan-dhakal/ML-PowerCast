import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const fetchEnergyData = async () => {
    try {
        const response = await axios.get(`${API_URL}/energy-data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching energy data:', error);
        throw error;
    }
};

export const postForecastData = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/forecast`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting forecast data:', error);
        throw error;
    }
};