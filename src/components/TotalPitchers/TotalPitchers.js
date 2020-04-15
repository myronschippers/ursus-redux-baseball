import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalPitchers extends Component {
  render() {
    return (
      <div>Total Pitchers: {this.props.store.pitchersList.length}</div>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
  store: reduxStore,
});
export default connect(mapStoreToProps)(TotalPitchers);