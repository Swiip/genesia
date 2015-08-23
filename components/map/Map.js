import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { transitionTo } from 'redux-react-router';
import { getAllLocations } from '../../actions/MapActions';
import mui from 'material-ui';
import { Location } from './Location';

const ThemeManager = new mui.Styles.ThemeManager();

@connect(state => ({ map: state.map }))
export class Map extends Component {
  static propTypes = {
    map: PropTypes.instanceOf(List).isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  constructor(props) {
    super(props);

    const actions = { transitionTo, getAllLocations };
    const boundActions = bindActionCreators(actions, props.dispatch)
    _.extend(this, boundActions);
    this.getAllLocations();
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <section className='main'>
        <svg width="100%" height="100%"
          viewPort="0 0 1000 1000" version="1.1"
          xmlns="http://www.w3.org/2000/svg">

          {this.props.map.map((location, index) => (
            <Location key={index} location={location}/>
          ))}

        </svg>
      </section>
    );
  }
}
