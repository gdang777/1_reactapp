import React, { Component } from 'react';

class SingleSeries extends Component {
  render() {
    return (
      <div>
        <p> Single series - The show id will be {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default SingleSeries;
