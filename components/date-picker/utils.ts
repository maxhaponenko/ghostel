export const firstWeekdayInMonth = (year: number, month: number) => {
    var date = new Date(year,month,1,12);
    let weekday = date.getDay();
    if (weekday === 0) weekday = 7
    return weekday
}
export const lastWeekdayInMonth = (year: number, month: number) => {
    var date = new Date(year, month + 1, 0, 12);
    let weekday = date.getDay();
    if (weekday === 0) weekday = 7
    return weekday
}
