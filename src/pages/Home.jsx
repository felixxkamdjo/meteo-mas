import DayForecast from "../components/DayForecast";
import Event from "../components/event";
import Header from "../components/Header"
import WeatherCard from "../components/WeatherCard";
import WeatherTopCard from "../components/WeatherTopCard";
import WeekForecast from "../components/WeekForecast";


const Home = () => {
    return (
        <>
            <div className="flex flex-row items-center p-4 w-full h-full gap-6">
                <div className="flex flex-col gap-3 w-3/4">
                    <Header />
                    <WeatherTopCard />
                    <div className="flex flex-row w-full justify-between gap-2">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex flex-row justify-between gap-3 w-full">
                                <div className="col-1 w-full"><WeatherCard /></div>
                                <div className="col-1 w-full"><WeatherCard /></div>
                            </div>
                            <div className="flex flex-row justify-between gap-3 w-full">
                                <div className="col-1 w-full"><WeatherCard /></div>
                                <div className="col-1 w-full"><WeatherCard /></div>
                            </div>
                        </div>
                        <div><Event /></div>
                    </div>
                </div>
                <div className="w-1 h-screen bg-gray-700"></div>
                <div className="flex flex-col justify-between w-1/4 h-full gap-6">
                    <div className="flex flex-row w-full justify-around items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="font-light">This Week</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">Today</h1>
                        <div className="flex flex-row w-full justify-between gap-2">
                            <DayForecast />
                            <DayForecast />
                            <DayForecast />
                            <DayForecast />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">07 Days Forecast</h1>
                        <div className="flex flex-col w-full justify-between gap-2">
                            <WeekForecast />
                            <WeekForecast />
                            <WeekForecast />
                            <WeekForecast />
                            <WeekForecast />
                            <WeekForecast />
                            <WeekForecast />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;