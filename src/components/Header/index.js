import styled from 'styled-components';
import UserAvatar from './UserAvatar';

const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 32px;
    width: 100%;
    height: 55px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(96, 95, 95, 0.08);
`;

const Logo = styled.img`
    width: 49px;
    height: 40px;
`;

export default () => {
    return (
        <Wrapper>
            <Logo src="/assets/logo.png" />
            <UserAvatar />
        </Wrapper>
    )
}