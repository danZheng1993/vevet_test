import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import AppointmentDetails from './AppointmentDetails';
import Scheduler from './Scheduler';
import ModalHeader from './ModalHeader';
import VetDescription from './VetDescription';

import { deleteSchedule, hideScheduler, showScheduler, updateSchedule, useAppDispatch, useAppState } from '../../context/appContext';
import { getItemSchedule } from '../../context/selector';

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '669px',
        height: '647px',
        padding: 0,
    }
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    flex: 1;
    padding: 30px 45px;
    overflow-y: scroll;
`;

export default () => {
    const { isShowingScheduler, schedules, currentVet } = useAppState();
    const dispatch = useAppDispatch();
    const itemId = currentVet?.id;
    const itemSchedule = getItemSchedule(schedules, itemId);
    const [editSchedule, setEditSchedule] = useState(false);
    useEffect(() => {
        if (!itemSchedule) {
            setEditSchedule(true);
        }
    }, [itemSchedule]);
    const handleEditSchedule = () => setEditSchedule(true);
    const handleChange = useCallback((schedule) => {
        if (schedule.id === itemSchedule?.id) {
            dispatch(updateSchedule(schedule));
        } else {
            dispatch(deleteSchedule(itemSchedule?.id));
            dispatch(updateSchedule(schedule));
        }
        setEditSchedule(false);
    }, [itemSchedule]);
    const handleClose = () => dispatch(hideScheduler());
    return (
        <Modal
          isOpen={isShowingScheduler}
          onRequestClose={handleClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <Wrapper>
                <ModalHeader item={currentVet} onClose={handleClose} />
                <Content>
                    {(!editSchedule && itemSchedule) ? (
                        <AppointmentDetails scheduleId={itemSchedule?.id} onRequestChange={handleEditSchedule}/>
                    ) : (
                        <Scheduler item={currentVet} schedule={itemSchedule} onChange={handleChange} />
                    )}
                    <VetDescription item={currentVet} />
                </Content>
            </Wrapper>
        </Modal>
    )
}