var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');
var App = require('./components/App')
// Component is needed for following 3 things -
// 1) State
// 2) Lifecycle event
// 3) Event


ReactDom.render(
  <App name="Santosh"/>,
  document.getElementById('app')
)
