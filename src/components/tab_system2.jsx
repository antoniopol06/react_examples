'use restrict';

var React = require('react');

var Tabs = require('./tabs.jsx');

var tabs2 = [
  { name: 'Tab1', description: 'esto es tab1' },
  { name: 'Tab2', description: 'esto es tab2' },
  { name: 'Tab3', description: 'esto es tab3' },
];

var TabSystem2 = React.createClass({

  getInitialState () {
    return {
      currentTab: 0
    }
  },

  handleClick (currentTab) {
    this.setState({ currentTab })
  },

  render () {
    return (
      <div>
        <h1>TAB SYSTEM 2</h1>
        <Tabs tabs = {tabs2} currentTab = {this.state.currentTab} handleClick = {this.handleClick}/>
        <hr />
      </div>
    )
  }
});

module.exports = TabSystem2;