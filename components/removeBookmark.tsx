

export default function RemovebookmarkButton({onClick,bookmark}:{onClick?: () => void,bookmark?: boolean}) {


    const click = ()=>{
        
        if(onClick) onClick();
    }

    return (
        <button onClick={click}  className=" flex hover:bg-slate-100 hover:text-slate-700 transition-all cursor-pointer text-white font-bold py-2 px-4 rounded-3xl">
           Remove
        </button>
    );

}