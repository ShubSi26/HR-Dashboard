
export default function AssignButton({onClick}:{onClick?: () => void}) {
    return (
        <button onClick={onClick} className="sm:bg-cyan-600 flex hover:bg-cyan-400 transition-all cursor-pointer text-white font-bold  sm:py-2 sm:px-4 rounded-3xl">
            <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
            <span>Assign to Project</span>
        </button>
    );
}