import { Line } from 'react-chartjs-2'
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

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// dummy data for chart
const exampleData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Actual Consumption',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Predicted Consumption',
        data: [70, 62, 75, 85, 58],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  }



const Chart = ({ data= exampleData }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Energy Consumption Forecast'
      },
      legend: {
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Energy Consumption (kWh)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      }
    }
  }

  return <Line data={data} options={options} />
}

export default Chart