'use strict';

import React from 'react';

import Item from './item';

class List extends React.Component {
  render () {
    var items = this.props.items.map((item) => {
      return <Item key={item} val={item} />;
    });

    return (
      <div>
        <h1>LIST</h1>
        Esto es una prueba
        {items}
        <hr/>
      </div>
    )
  }
};

export default List;
