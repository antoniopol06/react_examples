'use strict';

import React from 'react';

class Item extends React.Component {
  propTypes: {
    val: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        {this.props.val}
      </div>
    )
  }
};

//sustituye getdefaultprops
Item.defaultProps = {val: 'default'};

export default Item;
