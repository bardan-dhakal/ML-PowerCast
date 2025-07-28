
import USEnergyMap from './components/USEnergyMap.jsx';

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
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <USEnergyMap />
    </div>
  );
}

export default App;