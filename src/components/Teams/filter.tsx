const filters = [
    { label: "All", value: "all" },
    { label: "Core Team", value: "core team" },
    { label: "Leadership", value: "leadership" },
];

export function Filter({ selected, setSelected }: {
    selected: string;
    setSelected: (value: string) => void;
}) {
    return (
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 flex-wrap">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => setSelected(filter.value)}
                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full font-medium border transition cursor-pointer text-sm sm:text-base
              ${selected === filter.value
                            ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-white border-blue-600 dark:border-blue-500"
                            : "bg-transparent text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
            `}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}