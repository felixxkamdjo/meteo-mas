const WeatherCard = ({ title, value, unit, image, description }) => {
    return (
        <div className="py-6 px-3 justify-between rounded-xl flex flex-col h-[226px] w-full bg-[var(--secondary-color)]">
            <h3 className="font-bold text-2xl mb-4">{title}</h3>
            <h3 className="text-2xl font-bold">{value}{unit}</h3>
            <div className="flex justify-around items-center italic">
                {description}
                <img src={image} alt={title} height={64} width={64} />
            </div>
        </div>
    );
};

export default WeatherCard;
