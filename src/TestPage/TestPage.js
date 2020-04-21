import React, { Component } from 'react';
import { connect } from "react-redux";
import { testActions } from "../_actions/test.action";
import PropTypes from "prop-types";
import logo from '../logo.svg';
import '../App.css';

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textConnectRedux: ''
    };
  }

  componentDidMount() {
    this.props.getConnectRedux();
  }

  render() {
    console.log(this.props.textConnectRedux);
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
        </div>
      </div>

    );
  }
}


TestPage.propTypes = {
  getConnectRedux: PropTypes.func,
  textConnectRedux: PropTypes.string,
};

const mapStateToProps = (state) => ({
  textConnectRedux: state.test.connectRedux,
});

const actionCreators = {
  getConnectRedux: testActions.connectRedux,
};

export default connect(mapStateToProps, actionCreators)(TestPage);