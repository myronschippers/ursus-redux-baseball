import React, { Component } from 'react';
import { connect } from 'react-redux';

class BehindThePlate extends Component {
  render() {
    return (
      <h2>Behind the Plate: {this.props.store.currentPlayers.currentCatcher}</h2>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
  store: reduxStore,
});
export default connect(mapStoreToProps)(BehindThePlate);