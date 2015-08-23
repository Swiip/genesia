import React, { Component, PropTypes } from 'react';

export class Location extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  static points = [
    [2, 0],
    [4, 1],
    [4, 3],
    [2, 4],
    [0, 3],
    [0, 1]
  ];

  render() {
    const location = this.props.location;
    const [x, y] = [location.get('x'), location.get('y')];
    const points = Location.points.map(point => [
      point[0] * 20 + x * 80 + y % 2 * 40,
      point[1] * 20 + y * 60
    ]);

    return (
      <polygon points={points}/>
    );
  }
}
