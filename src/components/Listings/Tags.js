import styled from 'styled-components';

const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 5px;
`;

const TagItem = styled.span`
    height: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 138.3%;
    color: #4F4F4F;
    border-right: 1px solid #4F4F4F;
    align-item: center;
    justify-content: center;
    text-align: center;
    padding: 0px 2px;
    cursor: pointer;
    &:last-child {
        border-right: none;
    }
`;

const CapitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default ({ tags }) => (
    <TagWrapper>
        {tags.map(tag => {
            const parts = tag.split(' ');
            const tagString = parts.map(part => CapitalizeFirst(part)).join(' ');
            return <TagItem key={`tag_${tag.toLowerCase()}`}>{tagString}</TagItem>
        })}
    </TagWrapper>
);