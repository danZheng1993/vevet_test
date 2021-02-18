import { useEffect } from 'react';
import styled from 'styled-components';

import { setListings, useAppDispatch, useAppState } from '../../context/appContext';

import ListItem from './ListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 100%;
    padding-bottom: 40px;
    box-sizing: border-box;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 5px;
    border-bottom: 1px solid #F2F2F2;
`;

const VetCount = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 138.3%;
    color: #000843;
`;

const Location = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 138.3%;
    color: #4F4F4F;
    margin-left: 8px;
`;

const ListWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 0px;
`;

export default () => {
    const { listings, query } = useAppState();
    const dispatch = useAppDispatch();
    useEffect(() => {
        fetchData();
    }, [query]);
    const fetchData = async () => {
        try {
            const result = await fetch('https://api.vetvet.co/api/v1/practices')
                .then(res => res.json());
            dispatch(setListings(result.practices));
        } catch (err) {
            dispatch(setListings([]));
        }
    };
    return (
        <Wrapper>
            <Header>
                <VetCount>{listings?.length ?? 'No'} Vets</VetCount>
                <Location>New York, NY, USA</Location>
            </Header>
            {listings?.length > 0 && (
                <ListWrapper>
                    {listings.map(listing => <ListItem item={listing} key={`listing_${listing.id}`} />)}
                </ListWrapper>
            )}
        </Wrapper>
    )
}