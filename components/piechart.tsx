'use client';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

export default function PieChart({ data,labels }: { data: number[], labels: string[] }) {
 const dataa = {
  labels: labels,
  datasets: [
    {
      label: 'Votes',
      data: data,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 1,
    },
  ],
};
  return (
    <div className="w-full max-w-md mx-auto">
      <Pie data={dataa} options={options} />
    </div>
  );
}
