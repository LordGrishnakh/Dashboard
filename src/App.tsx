import React from 'react';

import Container from '@material-ui/core/Container';

import { Header } from './components/Header/Header';
import { SearchContainer } from './containers/Search/Search';
import EditContainer from './containers/EditContainer/Edit';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl" className="ContainerMain">
        <SearchContainer />
        <EditContainer />
      </Container>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    selected: state.selected,
    selectedUser: state.user
  };
};

export default App;
