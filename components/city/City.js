import React, { Component, PropTypes } from 'react';
import { Map as ImmutableMap } from 'immutable';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

const style = {
  section: {
    height: '100%'
  },
  svg: {
    width: '100%',
    height: '100%'
  }
}

@connect(
  (state, props) => {
    if (ImmutableMap.isMap(state.map)) {
      const location = state.map.get('locations').find(location => {
        return parseInt(props.routeParams.x) === location.get('x') &&
          parseInt(props.routeParams.y) === location.get('y');
      });
      if (ImmutableMap.isMap(location)) {
        return { city: location.get('city') };
      }
    }
    return { city: ImmutableMap({ name: '' }) };
  },
  { pushState }
)
export class City extends Component {
  static propTypes = {
    city: PropTypes.instanceOf(ImmutableMap).isRequired
  }

  render() {
    return (
      <section style={style.section} className='main'>
        city {this.props.city.get('name')}
      </section>
    );
  }
}
