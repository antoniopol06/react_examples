'use restrict';

var React = require('react');

var Tab = React.createClass({

  render () {

    return (
      <span className={this.props.className} onClick={this.props.handleClick}>
        {this.props.name}
      </span>
    )
  }

});

module.exports = Tab;