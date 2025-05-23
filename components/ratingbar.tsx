
export default function Ratingbar({rating}:{rating:number}) {


    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => {
                return (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill={index < rating ? "#FFD700" : "#E0E0E0"}
                    >
                        <path d="M12 .587l3.668 7.431 8.2 1.188-5.917 5.765L19.4 24 12 20.896 4.6 24l1.449-9.029L0 9.206l8.2-1.188z"/>
                    </svg>
                );
            })}
        </div>
    );
}