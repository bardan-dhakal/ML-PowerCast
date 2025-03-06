import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

export const fetchForecastData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast`)
        return response.data
    }

    catch (error) {
        console.error('Error fetching forecase:', error)
        throw error
    }
}