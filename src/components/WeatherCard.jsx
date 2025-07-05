import wind from '../assets/wind.png'

const WeatherCard = () => {
    return (
        <>
            <div className="py-6 px-3 justify-between rounded-xl flex flex-col h-[226px] w-full bg-[var(--secondary-color)]">
                <h3 className="font-bold text-2xl mb-4">Wind Status</h3>
                <h4>7.78km/h</h4>
                <div className="flex justify-around items-center italic">
                    Normal
                    <img src={wind} alt="wind-img" height={64} width={64} />
                </div>
            </div>
        </>
    )
};

export default WeatherCard;