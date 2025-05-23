
export default function PastPerformance() {

    return (
        <div className="bg-slate-900 rounded-xl shadow-2xl p-4">
            <h1 className="font-bold  text-xl">Past Persormance</h1>
            <div className="flex flex-row gap-5 mt-4">
                <span className="font-bold text-2xl">2024</span>
                <span>Good performance, met targets.</span>
            </div>
            <div className="flex flex-row gap-5 mt-4">
                <span className="font-bold text-2xl">2023</span>
                <span>Average performance, met some targets.</span>
            </div>
            <div className="flex flex-row gap-5 mt-4">
                <span className="font-bold text-2xl">2022</span>
                <span>Poor performance, did not meet targets.</span>
            </div>
        </div>
    )
}