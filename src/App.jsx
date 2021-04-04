import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Scoreboard from './flights/components/Scoreboard.jsx';
import Search from './flights/components/Search.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <BrowserRouter>
          <Search />
          <Scoreboard />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
