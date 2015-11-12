'use strict'

var React = require('react')
var Header = require('./widgets/header')
var Footer = require('./widgets/header')

module.exports = React.createClass({
  render: function () {
    var child = this.props.children

    return (
      <div className="shell">
        <Header />
        {child}
        <Footer />
      </div>
    )
  }
})