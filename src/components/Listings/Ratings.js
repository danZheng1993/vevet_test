import styled from 'styled-components';

const RatingsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 6px;
`;

const Star = styled.img`
    width: 9.1px;
    height: 8.69px;
`;

const RatingsNumber = styled.span`
    margin-left: 3px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 138.3%;
`;

export default ({ rating }) => (
    <RatingsWrapper>
        <Star src="/assets/star.png" />
        <RatingsNumber>{rating}</RatingsNumber>
    </RatingsWrapper>
);