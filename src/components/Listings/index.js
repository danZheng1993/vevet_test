import styled from 'styled-components';

import Filter from './Filter';
import ItemList from './ItemList';

const Wrapper  = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
    flex: 2;
    flex-direction: column;
    background-color: white;
    padding: 23px 20px;
    overflow: hidden;
`;

export default () => (
    <Wrapper>
        <Filter />
        <ItemList />
    </Wrapper>
);
