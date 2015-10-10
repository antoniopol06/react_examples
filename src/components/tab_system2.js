'use restrict';

import React from 'react';

import Tabs from './tabs';

var tabs2 = [
  { name: 'Tab1', description: 'esto es tab1' },
  { name: 'Tab2', description: 'esto es tab2' },
  { name: 'Tab3', description: 'esto es tab3' },
];

class TabSystem2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentTab: 0};
  }

  handleClick (currentTab) {
    this.setState({ currentTab })
  }

  render () {
    return (
      <div>
        <h1>TAB SYSTEM 2</h1>
        <Tabs tabs = {tabs2} currentTab = {this.state.currentTab} handleClick = {this.handleClick.bind(this)}/>
        <hr />
      </div>
    )
  }
};


export default TabSystem2;
