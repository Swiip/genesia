import React, { Component, PropTypes } from 'react';
import { Map as ImmutableMap } from 'immutable';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { getAllLocations, changeViewBox } from '../../actions/MapActions';
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

  componentDidMount() {
    this.element = document.querySelector('svg');

    const updateViewBoxSize = () => {
      const rect = this.element.getBoundingClientRect();
      const viewBox = this.props.map.get('viewBox').toJS();
      viewBox[2] = rect.width;
      viewBox[3] = rect.height;
      this.props.changeViewBox(viewBox);
    };

    window.addEventListener('resize', updateViewBoxSize);
    updateViewBoxSize();
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

  wheel(event) {
    const viewBox = this.props.map.get('viewBox').toJS();
    const proportion = 1 + event.deltaY / 100;
    const { top, left, width, height } = this.element.getBoundingClientRect();
    const { clientX, clientY } = event;
    const [ posX, posY ] = [
      (clientX - left) * viewBox[2] / width,
      (clientY - top) * viewBox[3] / height
    ];
    const [ moveX, moveY ] = [ posX - posX * proportion, posY - posY * proportion ];

    viewBox[0] += moveX;
    viewBox[1] += moveY;
    viewBox[2] *= proportion;
    viewBox[3] *= proportion;

    this.props.changeViewBox(viewBox);
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
