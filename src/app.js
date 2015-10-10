'use strict';

import React from 'react';

import List from './components/list';

import TabSystem from './components/tab_system';

import TabSystem2 from './components/tab_system2';

var items = ['uno', 2, 'dos'];

var tabs = [
  { name: 'Tab1', description: 'esto es tab1' },
  { name: 'Tab2', description: 'esto es tab2' },
  { name: 'Tab3', description: 'esto es tab3' },
];

class App extends React.Component {
  render () {
    return (
      <div>
        Prueba
        <List items={ items }/>
        <TabSystem tabs={ tabs }/>
        <TabSystem2 />
      </div>
    )
  }
};

export default App;