'use strict';

import React from 'react';

class Tab extends React.Component {

  render () {

    return (
      <span className={this.props.className} onClick={this.props.handleClick}>
        {this.props.name}
      </span>
    )
  }

};

export default Tab;