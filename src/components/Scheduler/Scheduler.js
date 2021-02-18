import { useEffect, useCallback, useMemo, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import ScheduleList from './ScheduleList';

const Wrapper = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SchedulerContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 16px;
`;

const PrevButton = styled.span`
    background-image: url(/assets/prev.png);
    width: 11px;
    height: 19px;
    margin-right: 20px;
    background-size: contain;
`;

const NextButton = styled.span`
    background-image: url(/assets/next.png);
    width: 11px;
    height: 19px;
    margin-left: 20px;
    background-size: contain;
`;

const SaveCTA = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 138.3%;
    text-decoration-line: underline;
    color: #000843;
`;

const getDateFromScheduleId = (scheduleId) => {
    const parts = scheduleId.split('_');
    const MM = parts[parts.length - 2];
    const DD = parts[parts.length - 1];
    return moment(`${MM}_${DD}`, 'MM_DD');
}

export default ({ item, schedule: defaultSchedule, onChange }) => {
    const [schedule, setSchedule] = useState(defaultSchedule);
    const [showStartDate, setShowStartDate] = useState(moment());
    useEffect(() => {
        if (defaultSchedule) {
            setSchedule(defaultSchedule);
            setShowStartDate(getDateFromScheduleId(defaultSchedule.id));
        }
    }, [defaultSchedule]);
    const handleSave = useCallback(() => {
        onChange(schedule);
    }, [onChange, schedule]);
    const handlePrev = useCallback(() => {
        setShowStartDate(moment(showStartDate).subtract(3, 'days'));
    }, [showStartDate]);
    const handleNext  = useCallback(() => {
        setShowStartDate(moment(showStartDate).add(3, 'days'));
    }, [showStartDate]);
    const secondDate = useMemo(() => {
        return moment(showStartDate).add(1, 'day');
    }, [showStartDate]);
    const lastDate = useMemo(() => {
        return moment(showStartDate).add(2, 'day');
    }, [showStartDate]);
    const handleChange = (val) => setSchedule(val);
    return (
        <Wrapper>
            <SchedulerContainer>
                <PrevButton onClick={handlePrev} />
                <ScheduleList item={item} schedule={schedule} date={showStartDate} onChange={handleChange} />
                <ScheduleList item={item} schedule={schedule} date={secondDate} onChange={handleChange} />
                <ScheduleList item={item} schedule={schedule} date={lastDate} onChange={handleChange} />
                <NextButton onClick={handleNext} />
            </SchedulerContainer>
            <SaveCTA onClick={handleSave}>Save</SaveCTA>
        </Wrapper>
    );
};
