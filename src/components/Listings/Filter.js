import styled from 'styled-components';

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const OptionWrapper = styled.div`
    display: flex;
    flex: 1;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 42px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 138.3%;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: #000843;
        font-weight: bold;
        color: white;
    }
`;

const SortWrapper = styled.div`
    display: flex;
    width: 74px;
    margin-left: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

const SortIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const SortLabel = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 138.3%;
    text-align: right;
`;

export default () => (
    <FilterWrapper>
        <OptionWrapper>
            All Specialties
        </OptionWrapper>
        <OptionWrapper>
            Distance
        </OptionWrapper>
        <OptionWrapper>
            Filter3
        </OptionWrapper>
        <OptionWrapper>
            Filter4
        </OptionWrapper>
        <OptionWrapper>
            More Filters
        </OptionWrapper>
        <SortWrapper>
            <SortIcon src="/assets/sort.png" />
            <SortLabel>Sort By</SortLabel>
        </SortWrapper>
    </FilterWrapper>
)