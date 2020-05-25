import React from 'react';
import { connect } from 'react-redux'

import { err } from '../../actions';

import ErrorIndicator from '../error-indicator';

class ErrorBoundry extends React.Component {

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.props.err();
  }

  render() {
    if (this.props.hasError) {
      return <ErrorIndicator />
    }
    return this.props.children
  }
}

const mapStateToProps = (state) => {
  return {
    hasError: state.hasError
  }
}

export default connect(mapStateToProps, { err })(ErrorBoundry);

