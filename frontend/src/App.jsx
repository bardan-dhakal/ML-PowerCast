import { useState, useEffect } from 'react'

import axios from 'axios'

import './App.css'
import Chart from './components/Chart'
import USMap from './components/USMap'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function App() {
  const [forecastData, setForecastData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/forecast')
        setForecastData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const chartData = {
    labels: forecastData?.timestamps || [],
    datasets: [
      {
        label: 'Actual Consumption',
        data: forecastData?.actual || [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Predicted Consumption',
        data: forecastData?.predicted || [],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  }

  return (
    <div className="App">
      <h1>Energy Consumption Forecast</h1>
      <USMap />
    </div>
  )
}

export default App