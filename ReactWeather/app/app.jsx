var React       =   require('react');
var ReactDOM    =   require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router histroy={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <IndexRoute component={Weather} />
      <Route path="/examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
