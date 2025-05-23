import ChartClient from "@/components/chartpage";
import PieChart from "@/components/piepage";
export const dynamic  = 'force-static';

export default function HomePage() {
  const staticData = [3.5 , 4.2, 2.8, 3.9, 4.5]; 
  const labels = ['HR','IT','Finance','Marketing', 'Sales'];
  const staticData2 = [10, 20, 30, 40, 50];

  return (
    <div className="w-full h-full flex flex-col sm:flex-row gap-10 items-center justify-center">
      <div className="sm:w-1/2 w-full sm:p-0 p-2">
        <h1>Department-wise average ratings</h1>
        <ChartClient data={staticData} labels={labels}/>
      </div>
      <div className="">
        <h1 className="text-center"> Bookmark trends</h1>
        <PieChart data={staticData2} labels={labels}/>
      </div>
      
    </div>
  );
}
