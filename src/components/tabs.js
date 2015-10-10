'use restrict';

import React from 'react';

import Tab from './tab';

class Tabs extends React.Component {
  

  renderTabs () {
    return this.props.tabs.map((tab, index) => {
      var classname = index === this.props.currentTab ? 'active' : null;
      var clickHandler = this.props.handleClick.bind(null, index);
      return (
        <Tab key={tab.name} 
        handleClick={clickHandler} 
        index={index} 
        className={classname} 
        name={tab.name}/>
      )
    })
  }

  render () {
    return (
      <div>
        {this.renderTabs()}
      </div>
    )
  }
};

Tabs.defaultProps = {className: null};

export default Tabs;