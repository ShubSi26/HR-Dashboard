'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartClient({ data,labels }: { data: number[], labels: string[] }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Votes',
        data,
        backgroundColor: ['#f87171', '#60a5fa', '#facc15', '#34d399'],
      },
    ],
  };

  return <Bar data={chartData} options={{ responsive: true }} />;
}
