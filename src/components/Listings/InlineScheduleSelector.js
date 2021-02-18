import { useCallback } from 'react';
import styled from 'styled-components';

import { convertHourMinToString, getDateSchedule, isSameSlot } from '../../utils';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const Date = styled.span`
    width: 80px;
    height: 35px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    line-height: 138.3%;
    display: flex;
    align-items: center;
    color: #EE8529;
`;

export const EmptySlot = styled.div`
    width: 28px;
    height: 0px;
    border: 2px solid #828282;
    margin: 0px 36px;
`;

export const TimeSlot = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px 3px;
    width: 89.43px;
    height: 35px;
    background: #FFFFFF;
    border: 1px solid #000843;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 138.3%;
    /* or 18px */

    display: flex;
    align-items: center;
    text-align: center;

    color: #000843;
    cursor: pointer;
    &.selected, &:hover {
        background: #000843;
        color: white;
    }
`;

export default ({ schedule, selected = [], onSelect, onMore }) => {
    const { displayText, slots } = getDateSchedule(schedule);
    const slotComponents = [];
    const handleSelection = useCallback((curSlot, isSelected) => {
        if (isSelected) {
            onSelect(selected.filter(slot => !isSameSlot(curSlot, slot)));
        } else {
            onSelect([...selected, curSlot]);
        }
    }, [selected]);
    for (let i = 0; i < 4; i += 1) {
        if (slots[i]) {
            const isSelected = !!selected.find(slot => isSameSlot(slots[i], slot));
            slotComponents.push(
                <TimeSlot
                    className={isSelected ? 'selected' : 'normal'}
                    onClick={() => handleSelection(slots[i], isSelected)}
                    key={`slot_${i}`}
                >
                    {convertHourMinToString(slots[i])}
                </TimeSlot>
            )
        } else slotComponents.push(<EmptySlot />);
    }
    return (
        <Wrapper>
            <Date>{displayText}</Date>
            {slotComponents}
            <TimeSlot onClick={onMore}>More</TimeSlot>
        </Wrapper>
    )
}