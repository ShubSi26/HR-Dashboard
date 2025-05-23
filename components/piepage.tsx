'use client';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('./piechart'), { ssr: false });

export default function PieChart({ data, labels }: { data: number[], labels: string[] }) {
  return <Chart data={data} labels={labels}/>;
}
