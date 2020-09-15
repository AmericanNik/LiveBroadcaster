import React from 'react';
import { Route, Router } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import createBrowserHistory from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={createBrowserHistory}>
        <div className=''>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/delete/:id' exact component={StreamDelete} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/shows' exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
