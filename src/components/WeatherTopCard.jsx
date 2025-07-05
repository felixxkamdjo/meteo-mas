

const WeatherTopCard = () => {
    return (
        <>
            <div className="flex flex-row p-[10px] rounded-xl bg-[var(--primary-color)] w-full h-[389px] px-3 py-4"> {/* first div*/}
                <div className="flex flex-col w-1/2 h-full justify-between px-2 py-3"> {/* second level - vertical*/}
                    <div className="flex flex-row justify-between p-3 h-1/5 w-full"> {/* third level */}
                        <div className="text-[var(--navy-blue)] flex flex-row justify-between w-auto h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <div className="">Duala, <span className="text-xs">CMR</span></div>
                        </div>
                        <div className="text-[var(--navy-blue)] opacity-50">Today, 02:32 PM</div>
                    </div>
                    <div className="flex flex-col h-auto gap-4">
                        <div className="text-7xl">28 C</div>
                        <div className="">Mostly clear</div>
                    </div>
                    <div className="flex flex-row justify-around">
                        <div className="text-[var(--navy-blue)] flex flex-row justify-between w-auto gap-1 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            720hpa
                        </div>
                        <div className="text-[var(--navy-blue)] flex flex-row justify-between w-auto gap-1 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            32%
                        </div>
                        <div className="text-[var(--navy-blue)] flex flex-row justify-between w-auto gap-1 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            12Km/h
                        </div>
                    </div>
                </div>
                <div className="w-1/2 px-2 py-4">
                    <div className="bg-gray-100 h-full w-full rounded-3xl"></div>
                </div> {/*second level - vertical*/}
            </div>
        </>
    )
}

export default WeatherTopCard;