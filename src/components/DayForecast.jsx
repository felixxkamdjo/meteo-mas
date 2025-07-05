

const DayForecast = () => {
    return (
        <>
            <div className="flex flex-col justify-between rounded-2xl bg-[var(--primary-color)] w-1/4 h-35 items-center px-3 py-2">
                <h5 className="flex flex-col rounded-2xl font-light">Now</h5>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div className="flex flex-col">25</div>
            </div>
        </>
    );
};

export default DayForecast;