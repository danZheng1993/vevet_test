import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 68px;
    border-bottom: 1px solid #F2F2F2;
    padding: 12px 32px;
`;

const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const VetTitle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 138.3%;
    color: #000843;
`;

const VetLocation = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 138.3%;
    color: #4F4F4F;
`;

const Closebutton = styled.span`
    background-image: url(/assets/close.png);
    background-size: contain;
    width: 18px;
    height: 18px;
`;

export default ({ item, onClose }) => (
    <Wrapper>
        <TextWrapper>
            <VetTitle>{item.name}</VetTitle>
            {item.address && <VetLocation>{item.address}</VetLocation>}
        </TextWrapper>
        <Closebutton onClick={onClose} />
    </Wrapper>
)