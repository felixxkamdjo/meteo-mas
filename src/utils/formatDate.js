export const getFormattedDateTime = () => {
    const now = new Date();

    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayName = daysOfWeek[now.getDay()];
    const monthName = months[now.getMonth()];
    const dayNumber = now.getDate();
    // const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 devient 12

    const time = `${hours}:${minutes} ${ampm}`;

    const fullDate = `${dayName}, ${monthName} ${dayNumber}`;
    
    return { fullDate, time };
};
