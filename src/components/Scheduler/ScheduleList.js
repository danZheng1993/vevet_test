import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { TimeSlot, EmptySlot } from '../Listings/InlineScheduleSelector';
import { convertHourMinToString, getDateFromId, getDateSchedule, isSameSlot } from '../../utils';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 7px;
`;

const DateText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 138.3%;
    text-align: center;
    color: #000843;
`;

const TimeSlotWrapper = styled.div`
    height: 190px;
    overflow-y: scroll;
`;

export default ({ date, item, schedule, onChange }) => {
    const [selectedSlots, setSelectedSlots] = useState([]);
    useEffect(() => {
        const scheduleDate = schedule?.id ? getDateFromId(schedule?.id) : '';
        console.log({
            scheduleDate,
            dateString: date.format('MM_DD')
        });
        if (scheduleDate === date.format('MM_DD')) {
            setSelectedSlots(schedule.slots);
        } else {
            setSelectedSlots([]);
        }
    }, [schedule, date]);
    const handleChange = useCallback((slot) => {
        let newSlots = [];
        if (selectedSlots.find(selSlot => isSameSlot(selSlot, slot))) {
            newSlots = selectedSlots.filter((selSlot => !isSameSlot(selSlot, slot)));
        } else {
            newSlots = [...selectedSlots, slot];
        }
        onChange({
            ...schedule,
            id: `${item.id}_${date.format('MM_DD')}`,
            itemId: item.id,
            slots: newSlots,
        });
    }, [schedule, selectedSlots, date]);
    const { slots: timeSlots } = getDateSchedule(item.openingHours);
    return (
        <Wrapper>
            <DateText>
                {date.format('ddd, MMM. D')}
            </DateText>
            <TimeSlotWrapper>
                {timeSlots.map(slot => (
                    <TimeSlot
                        className={!!selectedSlots.find(selSlot => isSameSlot(selSlot, slot)) ? 'selected' : 'normal'}
                        style={{ marginTop: 10 }}
                        onClick={() => handleChange(slot)}
                    >
                        {convertHourMinToString(slot)}
                    </TimeSlot>
                ))}
            </TimeSlotWrapper>
        </Wrapper>
    )
};