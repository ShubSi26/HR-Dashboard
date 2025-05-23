
export default function viewButton({onClick}:{onClick?: () => void}) {
    return (
        <button onClick={onClick} className="sm:bg-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-all cursor-pointer text-white font-bold sm:py-2 sm:px-4 rounded-3xl">
            View
        </button>
    );

}