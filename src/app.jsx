'use strict';

var React = require('react');

var List = require('./components/list.jsx');
var TabSystem = require('./components/tab_system.jsx');
var TabSystem2 = require('./components/tab_system2.jsx');


var items = ['cuatro', 'tres', 'dos'];

var tabs = [
  { name: 'Tab1', description: 'esto es tab1' },
  { name: 'Tab2', description: 'esto es tab2' },
  { name: 'Tab3', description: 'esto es tab3' },
];

var App = React.createClass({
  render () {
    return (
      <div>
        <List items={ items }/>
        <TabSystem tabs={ tabs }/>
        <TabSystem2 />
      </div>
    )
  }
});

module.exports = App;