const DayForecastCard = ({ time, temp, icon, description }) => {
  return (
        <>    
            <div className="p-3 rounded-xl flex flex-col items-center w-[90px] bg-[var(--secondary-color)]">
                <p className="text-xs">{time}</p>
                <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                    className="w-12 h-12"
                />
                <p className="font-bold">{temp}°C</p>
                <p className="text-xs">{description}</p>
            </div>
        </>
    );
};

export default DayForecastCard;