import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div className=''>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/shows' exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;