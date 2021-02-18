import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
`;

const VetImage = styled.img`
    
`;

const VetField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-family: Roboto;
    font-style: normal;
    font-size: 14px;
    line-height: 138.3%;
    color: #4F4F4F;
    margin-bottom: 10px;
`;
const VetFieldLabel = styled.div`
    font-weight: bold;
    margin-right: 4px;
`;
const VetFieldValue = styled.div`
    font-weight: 400;
`;

export default ({ item }) => (
    <Wrapper>
        {item.rating && (
            <VetField>
                <VetFieldLabel>Rating:</VetFieldLabel>
                <VetFieldValue>{item.rating}</VetFieldValue>
            </VetField>
        )}
        {item.phoneNumbers?.length > 0 && (
            <VetField>
                <VetFieldLabel>Phone number:</VetFieldLabel>
                <VetFieldValue>{item.phoneNumbers[0]}</VetFieldValue>
            </VetField>
        )}
        {item.paymentOptions?.length > 0 && (
            <VetField>
                <VetFieldLabel>Accepting Payments:</VetFieldLabel>
                <VetFieldValue>{item.paymentOptions.join(', ')}</VetFieldValue>
            </VetField>
        )}
        {item.images?.length > 0 && <VetImage src={item.images[0]} />}
    </Wrapper>
)
