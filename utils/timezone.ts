export const UTCOffset = () => {
    const KIEV_UTC_OFFSET = 2
    if (isDaylightSavingTime()) {
        return KIEV_UTC_OFFSET + 1
    } else {
        return KIEV_UTC_OFFSET
    }
}

export const isDaylightSavingTime = () => {
    const MARCH_INDEX = 2
    const OCTOBER_INDEX = 9
    const DSTStart = lastSunday(new Date().getFullYear(), MARCH_INDEX)
    const DSTEnd = lastSunday(new Date().getFullYear(), OCTOBER_INDEX)
    const now = new Date().getTime()
    
    if (now > DSTStart && now < DSTEnd) {
        return true
    } else {
        return false
    }
}

const lastSunday = (year, month) => {
    var date = new Date(year,month,1,12);
    let weekday = date.getDay();
    let dayDiff = weekday === 0 ? 7 : weekday;
    let lastSunday = date.setDate(date.getDate() - dayDiff);
    return lastSunday
}