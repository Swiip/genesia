import React, { Component, PropTypes } from 'react';
import { Map as ImmutableMap } from 'immutable';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { getAllLocations, updateRectMap, panMap, zoomMap } from '../../actions/MapActions';
import { Location } from './Location';

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
  state => ({ map: state.map }),
  { pushState, getAllLocations, updateRectMap, panMap, zoomMap }
)
export class Map extends Component {
  static propTypes = {
    map: PropTypes.instanceOf(ImmutableMap).isRequired,
    pushState: PropTypes.func,
    getAllLocations: PropTypes.func,
    updateRectMap: PropTypes.func,
    panMap: PropTypes.func,
    zoomMap: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.props.getAllLocations();
    this.state = { drag: false };
  }

  componentDidMount() {
    this.element = document.querySelector('svg');

    const update = () => {
      this.props.updateRectMap(this.element.getBoundingClientRect());
    };

    window.addEventListener('resize', update);
    update();
  }

  viewBox() {
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
      const rect = this.element.getBoundingClientRect();
      const coords = {
        x: this.state.lastPosition.x - event.clientX,
        y: this.state.lastPosition.y - event.clientY
      };
      this.props.panMap(coords, rect);
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

  wheel(event) {
    const proportion = 1 + event.deltaY / 100;
    const rect = this.element.getBoundingClientRect();
    const coords = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    this.props.zoomMap(proportion, coords, rect);
  }

  render() {
    return (
      <section style={style.section} className='main'>
        <svg style={style.svg}
          viewBox={this.viewBox()}
          onMouseDown={this.mouseDown.bind(this)}
          onMouseMove={this.mouseMove.bind(this)}
          onMouseUp={this.mouseUp.bind(this)}
          onMouseOut={this.mouseOut.bind(this)}
          onWheel={this.wheel.bind(this)}>

          {this.props.map.get('locations').map((location, index) => (
            <Location key={index} location={location}/>
          ))}
        </svg>
      </section>
    );
  }
}
