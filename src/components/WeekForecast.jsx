

const WeekForecast = () => {
    return (
        <>
            <div className="flex flex-row justify-between rounded-2xl w-full h-18 items-center px-3 py-2">
                <div className="flex flex-col">
                    <h4 className="flex font-normal">Tomorrow</h4>
                    <h6 className="font-extralight">12 June</h6>
                </div>
                <div className="flex flex-col">25</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </>
    );
};

export default WeekForecast;