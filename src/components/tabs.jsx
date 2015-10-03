'use restrict';

var React = require('react');

var Tab = require('./tab.jsx');

var Tabs = React.createClass({

  getDefaultProps () {
    return {
      className: null
    }
  },

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
  },

  render () {
    return (
      <div>
        {this.renderTabs()}
      </div>
    )
  }
});

module.exports = Tabs;