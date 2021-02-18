import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Avatar = styled.div`
    background: #F2F2F2;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    width: 34px;
    height: 34px;
    border-radius: 17px;
    overflow: hidden;
`;

const Name = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 138.3%;
    margin-left: 2px;
    width: 74px;
    text-align: right;
`

export default () => (
    <Wrapper>
        <Avatar />
        <Name>User Name</Name>
    </Wrapper>
)