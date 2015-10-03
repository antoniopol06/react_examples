'use strict';

var React = require('react');

var Item = require('./item.jsx');

var List = React.createClass({

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
});

module.exports = List;