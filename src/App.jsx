import React from 'react'
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Container/Main";
import Header from './components/Header/Header';
import Content from './components/Container/Content';
import CardList from './components/Card/CardList';
import ChartContainer from './components/Container/ChartContainer';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main>
        <Header />
        <Content>
          <ChartContainer />
        </Content>
      </Main>
    </div>
  );
};

export default App;