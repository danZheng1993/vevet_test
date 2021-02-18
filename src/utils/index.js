import moment from 'moment';

const getHourMin = (str) => ({
    hour: parseInt(str.slice(0, 2)),
    min: parseInt(str.slice(2)),
});

const convertHourMin = (time) => time.hour * 60 + time.min;
const convertToHourMin = (time) => ({
    hour: Math.floor(time / 60),
    min: time % 60,
});

const crawlTime = (open, close) => {
    const timeSlots = [];
    const startPoint = convertHourMin(open);
    const closePoint = convertHourMin(close);
    let lastSlot = startPoint;
    timeSlots.push(convertToHourMin(lastSlot));
    while (lastSlot < closePoint - 30) {
        timeSlots.push(convertToHourMin(lastSlot + 30));
        lastSlot += 30;
    }
    return timeSlots;
}

export const convertHourMinToString = (time) => `${`${time.hour}`.padStart(2, '0')}:${`${time.min}`.padStart(2, '0')}`;

export const isSameSlot = (timeA, timeB) => timeA.hour === timeB.hour && timeA.min === timeB.min;

export const getDateSchedule = (openingHours, curDate = moment()) => {
    const displayText = curDate.format('ddd, MMM D');
    const curWeekday = curDate.format('dddd').toLowerCase();
    const availableHours = openingHours[curWeekday];
    if (availableHours?.open && availableHours?.close) {
        const openTime = getHourMin(availableHours.open);
        const closeTime = getHourMin(availableHours.close);
        return {
            displayText,
            slots: crawlTime(openTime, closeTime),
        }
    }
    return {
        displayText,
        slots: [],
    }
}

export const getDateFromId = (scheduleId) => {
    if (scheduleId) {
        const parts = scheduleId.split('_');
        return `${parts[parts.length - 2]}_${parts[parts.length - 1]}`;
    }
    return moment().format('MM_DD');
}