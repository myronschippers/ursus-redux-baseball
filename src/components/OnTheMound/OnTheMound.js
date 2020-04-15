import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnTheMound extends Component {
  render() {
    return (
      <h2>On the Mound: {this.props.store.currentPlayers.currentPitcher}</h2>
    );
  }
}

const mapStoreToProps = (reduxStore) => ({
  store: reduxStore,
});
export default connect(mapStoreToProps)(OnTheMound);