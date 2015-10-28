import React, { Component, PropTypes } from 'react';
import { Map as ImmutableMap } from 'immutable';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { getAllLocations, changeViewBox } from '../../actions/MapActions';
import { Location } from './Location';

const style = {
  section: {
    height: '100%'
  }
}

@connect(
  state => ({ map: state.map }),
  { pushState, getAllLocations, changeViewBox }
)
export class Map extends Component {
  static propTypes = {
    map: PropTypes.instanceOf(ImmutableMap).isRequired,
    pushState: PropTypes.func,
    getAllLocations: PropTypes.func,
    changeViewBox: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.props.getAllLocations();
    this.state = { drag: false };
  }

  viewBox() {
    // console.log('view box', this.props.map.get('viewBox').join(' '));
    return this.props.map.get('viewBox').join(' ');
  }

  mouseDown(event) {
    this.setState({ drag: true, lastPosition: {
      x: event.clientX,
      y: event.clientY
    } });
  }

  mouseMove(event) {
    if (this.state.drag) {
      const diffX = this.state.lastPosition.x - event.clientX;
      const diffY = this.state.lastPosition.y - event.clientY;
      const viewBox = this.props.map.get('viewBox').toJS();
      viewBox[0] += diffX;
      viewBox[1] += diffY;
      this.props.changeViewBox(viewBox);
      this.setState({ drag: true, lastPosition: {
        x: event.clientX,
        y: event.clientY
      } });
    }
  }

  mouseOut(event) {
    let svgElement = event.relatedTarget;
    while (svgElement !== null && svgElement.tagName === 'svg') {
      svgElement = svgElement.parentNode;
    }
    if (svgElement === null) {
      this.setState({ drag: false });
    }
  }

  mouseUp() {
    this.setState({ drag: false });
  }

  render() {
    return (
      <section style={style.section} className='main'>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
          viewBox={this.viewBox()}
          onMouseDown={this.mouseDown.bind(this)}
          onMouseMove={this.mouseMove.bind(this)}
          onMouseUp={this.mouseUp.bind(this)}
          onMouseOut={this.mouseOut.bind(this)}>

          {this.props.map.get('locations').map((location, index) => (
            <Location key={index} location={location}/>
          ))}
        </svg>
      </section>
    );
  }
}
