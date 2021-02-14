export const kievUTCOffset = () => {
    const KIEV_UTC_OFFSET = 120
    if (isDaylightSavingTime()) {
        return KIEV_UTC_OFFSET + 60
    } else {
        return KIEV_UTC_OFFSET
    }
}

export const isDaylightSavingTime = () => {
    const MARCH_INDEX = 2
    const OCTOBER_INDEX = 9
    const DSTStart = lastSundayInMonth(new Date().getFullYear(), MARCH_INDEX)
    const DSTEnd = lastSundayInMonth(new Date().getFullYear(), OCTOBER_INDEX)
    const now = new Date().getTime()
    
    if (now > DSTStart && now < DSTEnd) {
        return true
    } else {
        return false
    }
}

const lastSundayInMonth = (year: number, month: number): number  => {
    var date = new Date(year,month,1,12);
    let weekday = date.getDay();
    let dayDiff = weekday === 0 ? 7 : weekday;
    let lastSunday = date.setDate(date.getDate() - dayDiff);
    return lastSunday
}

