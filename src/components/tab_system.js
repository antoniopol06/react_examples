'use strict';

import React from 'react';

class TabSystem extends React.Component {

  //Estados son para definir estados del componente
  constructor(props) {
    super(props);
    this.state = {currentTab: 0};
  }

  changeTab (currentTab) {
    // esto es lo mismo que poner this.setState({ currentTab: currentTab });
    this.setState({ currentTab });
  }

  renderTabs () {
    return this.props.tabs.map((tab, index) => {
      var clickHandler = this.changeTab.bind(this, index);
      return (
        <div className="tab" key={tab.name} onClick={clickHandler}>
          {tab.name}
        </div>
      );
    });
  }

  renderDescription () {
    var tab = this.props.tabs[this.state.currentTab];
    return (
      <div>
        {tab.description}
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1>TAB SYSTEM </h1>
        <div>
          { this.renderTabs() }
        </div>
        <div className="description">
          { this.renderDescription() }
        </div>
        <hr />
      </div>
    )
  }


};

export default TabSystem;
