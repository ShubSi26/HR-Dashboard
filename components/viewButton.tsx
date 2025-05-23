
export default function viewButton({onClick}:{onClick?: () => void}) {
    return (
        <button onClick={onClick} className="bg-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-all cursor-pointer text-white font-bold py-2 px-4 rounded-3xl">
            View
        </button>
    );

}