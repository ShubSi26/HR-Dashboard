
export default function Pagination({
    page,
    setPage,
    totalPages,
}: {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}) {
    return (
        <div className="flex items-center justify-center sm:justify-end sm:w-2/3 w-full mt-4">
            <span className="text-sm text-gray-500">
                Page {page} of {totalPages}
            </span>

            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index + 1)}
                        className={`${
                            page === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                        } mx-1 px-3 py-1 rounded-full`}
                    >
                        {index + 1}
                    </button>
                ))}

            </div>
        </div>
    );
}    