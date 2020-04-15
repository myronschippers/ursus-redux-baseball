import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalCatchers extends Component {
  render() {
    return (
      <div>Total Catchers: {this.props.store.catchersList.length}</div>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
  store: reduxStore,
});
export default connect(mapStoreToProps)(TotalCatchers);