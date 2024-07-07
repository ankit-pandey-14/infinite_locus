const dayNames = [
    'Sunday',
    'Monday',
    'Tueday',
    'Wednessday',
    'Thrusday',
    'Friday',
    'Saturday',
];
export function formatDate (time, format) {
    const date = new Date(time);

    switch(format) {
        case 'day time':
            return `${dayNames?.[date.getDay()]} ${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes()}`;
        
        default:
            return
    }
}