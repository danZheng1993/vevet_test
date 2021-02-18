import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { useAppDispatch, useAppState, updateSchedule, deleteSchedule, showScheduler, setCurrentVet } from '../../context/appContext';
import InlineScheduleSelector from './InlineScheduleSelector';

import Ratings from './Ratings';
import Tags from './Tags';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start; 
    padding-top: 15px;
    padding-bottom: 19px;
    border-bottom: 1px solid #F2F2F2;
`;

const VetImage = styled.img`
    width: 169px;
    height: 150px;
    background: #F2F2F2;
    border-radius: 5px;
`;

const VetDetailsContainer = styled.div`
    margin-left: 22px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const VetDetailHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const VetName = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 138.3%;
    color: #000843;
`;

const VetDetailCTA = styled.span`
    width: 91px;
    height: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 138.3%;
    /* or 18px */

    display: flex;
    align-items: center;
    text-align: center;

    /* Blue 2 */

    color: #2D9CDB;
    cursor: pointer;
`;

const HSpliter = styled.div`
    width: 28px;
    height: 0px;
    border-bottom: 1px solid #E0E0E0;
    margin-top: 16px;
    margin-bottom: 11px;
`;

export default ({ item }) => {
    const dispatch = useAppDispatch();
    const { schedules } = useAppState();
    const [selected, setSelected] = useState([]);
    const curScheduleId = useMemo(() => {
        const dtStr = moment().format('MM_DD');
        return `${item.id}_${dtStr}`
    }, [item]);
    useEffect(() => {
        if(schedules[curScheduleId]) {
            setSelected(schedules[curScheduleId].slots);
        } else {
            setSelected([]);
        }
    }, [schedules, item, curScheduleId]);
    const handleSelect = useCallback((sel) => {
        if (sel.length === 0) {
            dispatch(deleteSchedule(curScheduleId));
        } else {
            dispatch(updateSchedule({ id: curScheduleId, itemId: item.id, slots: sel }));
        }
    }, [item, curScheduleId]);
    const handleDetail = useCallback(() => {
        dispatch(setCurrentVet(item));
        dispatch(showScheduler());
    }, [item]);
    return (
        <Wrapper>
            <VetImage src={item.images[0] ?? ''} />
            <VetDetailsContainer>
                <VetDetailHeader>
                    <VetName>{item.name}</VetName>
                    <VetDetailCTA onClick={handleDetail}>See Details</VetDetailCTA>
                </VetDetailHeader>
                <Ratings rating={item.rating} />
                {item?.tags?.length > 0 && (
                    <Tags tags={item.tags} />
                )}
                <HSpliter />
                <InlineScheduleSelector
                    schedule={item.openingHours}
                    selected={selected}
                    onSelect={handleSelect}
                    onMore={handleDetail}
                />
            </VetDetailsContainer>
        </Wrapper>
    )
}