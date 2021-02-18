import moment from 'moment';

export const getItemScheduleByDate = (schedules, itemId, curDate = moment()) => {
    const curScheduleId = `${itemId}_${curDate.format('MM_DD')}`;
    return schedules[curScheduleId];
};

export const getItemSchedule = (schedules, itemId) => {
    const scheduleIds = Object.keys(schedules);
    const scheduleId = scheduleIds.find(scheduleId => scheduleId && schedules[scheduleId]?.itemId === itemId);
    return schedules[scheduleId];
}
