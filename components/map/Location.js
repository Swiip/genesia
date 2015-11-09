import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { City } from './City';
import { WHITE, TURQUOISE } from '../../constants/Colors';

const Styles = {
  polygon: {
    fill: WHITE,
    stroke: TURQUOISE,
    strokeWidth: 5,
    strokeLinejoin: 'round'
  }
}

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
  ]

  city() {
    const city = this.props.location.get('city');
    if (_.isObject(city)) {
      return (<City location={this.props.location}/>);
    } else {
      return null;
    }
  }

  render() {
    const location = this.props.location;
    const [x, y] = [location.get('x'), location.get('y')];
    const [posX, posY] = [x * 80 + y % 2 * 40, y * 60];
    const points = Location.points.map(point => [
      point[0] * 20 + Styles.polygon.strokeWidth,
      point[1] * 20 + Styles.polygon.strokeWidth
    ]);

    return (
      <svg x={posX} y={posY}>
        <polygon style={Styles.polygon} points={points} />
        {this.city()}
      </svg>
    );

  }
}
