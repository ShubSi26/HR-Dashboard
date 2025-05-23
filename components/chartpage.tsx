'use client';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('./chart'), { ssr: false });

export default function ChartWrapper({ data, labels }: { data: number[], labels: string[] }) {
  return <Chart data={data} labels={labels}/>;
}
