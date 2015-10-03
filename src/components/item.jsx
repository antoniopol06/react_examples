'use strict'

var React = require('react');

var Item = React.createClass({
  propTypes: {
    val: React.PropTypes.string.isRequired
  },

  getDefaultProps () {
    return {
      val: 'default'
    };
  },

  render () {
    return (
      <div>
        {this.props.val}
      </div>
    )
  }
})

module.exports = Item;