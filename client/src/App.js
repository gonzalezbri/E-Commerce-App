import React, { Fragment, useEffect } from 'react';
import './App.css'; // Import the CSS file

import InputItem from './components/InputItem';
import ListItems from './components/ListItems';
import Banner from './components/banner'; // Import the Banner component

function App() {
  useEffect(() => {
    document.title = 'Dark Alley Deals';
  }, []);

  return (
    <div className='appContainer'>
      <Fragment>
        <Banner /> {/* Add the Banner component */}
      </Fragment>

      <Fragment>
        <InputItem />
        <ListItems />
      </Fragment>
    </div>
  );
}

export default App;
