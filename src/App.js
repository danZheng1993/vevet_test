import styled from 'styled-components';
import Modal from 'react-modal';

import './App.css';
import { AppStateProvider } from './context/appContext';
import Header from './components/Header';
import Listings from './components/Listings';
import Map from './components/Map';
import Scheduler from './components/Scheduler';

Modal.setAppElement('#root');

const AppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-top: 55px;
  flex: 1;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
`;

function App() {
  return (
    <AppStateProvider>
      <Header />
      <AppContainer>
        <Listings />
        <Map />
      </AppContainer>
      <Scheduler />
    </AppStateProvider>
  );
}

export default App;
