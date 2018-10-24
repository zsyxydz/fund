import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
// import FundDiagnose from './components/FundDiagnose'
import FundDiagnosis from './components/FundDiagnose/FundDiagnosis'
import IntelligentMatch from './components/IntelligentMatch'
import FundContrast from './components/FundPk'
import Home from './components/Home'


class Index extends Component {
  render() {

    return (
     <div>Home</div>
    );
  }

}

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route exact path="/detail/:id" component={FundDiagnosis} />
      <Route exact path="/match/:id" component={IntelligentMatch} />
      <Route exact path="/contrast/:id" component={FundContrast} />
      <Route exact path="/home" component={Home} />
      {/* <Route exact path="/diagnose/100032" component={FundDiagnose} /> */}
    </div>
  </Router>, document.getElementById('app'))