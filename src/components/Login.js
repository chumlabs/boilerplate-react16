import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

export const Login = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__login-box">
      <h1 className="box-layout__login-title">Boilerplate</h1>
      <p>for React Apps | Chum Labs</p>
      <button onClick={startLogin} className="button">
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(Login);
