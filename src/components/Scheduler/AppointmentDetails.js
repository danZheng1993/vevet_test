import styled from 'styled-components';
import moment from 'moment';

import { useAppState } from '../../context/appContext';
import { getItemSchedule } from '../../context/selector';
import { convertHourMinToString, getDateFromId } from '../../utils';

const Wrapper = styled.div`

`;

const SectionTitle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 138.3%;
    color: #000843;
    margin-bottom: 12px;
`;

const DetailsField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-family: Roboto;
    font-style: normal;
    font-size: 14px;
    line-height: 138.3%;
    color: #4F4F4F;
`;
const FieldName = styled.span`
    font-weight: bold;
    margin-right: 4px;
`;
const FieldValue = styled.span`
    font-weight: 400;
`;
const ChangeCTA = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 138.3%;

    text-decoration-line: underline;

    color: #000843;
`

export default ({ scheduleId, onRequestChange }) => {
    const { schedules } = useAppState();
    const schedule = schedules[scheduleId];
    const curDate = moment(getDateFromId(scheduleId), 'MM_DD');
    const slotsString = schedule.slots.map(slot => convertHourMinToString(slot)).join(', ');
    return (
        <Wrapper>
            <SectionTitle>Appointment Details</SectionTitle>
            <DetailsField>
                <FieldName>Day:</FieldName><FieldValue>{curDate.format('dddd, MMMM D')}</FieldValue>
            </DetailsField>
            <DetailsField>
                <FieldName>Time(s):</FieldName><FieldValue>{slotsString}</FieldValue>
            </DetailsField>
            <ChangeCTA onClick={onRequestChange}>Change day and time</ChangeCTA>
        </Wrapper>
    )
}