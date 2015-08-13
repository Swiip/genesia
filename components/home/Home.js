import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { transitionTo } from 'redux-react-router';
import { addClick } from '../../actions/ClicksActions';

@connect(state => ({ clicks: state.clicks.get('clicks') }))
export class Home extends Component {
  static propTypes = {
    clicks: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    const actions = { transitionTo, addClick };
    const boundActions = bindActionCreators(actions, props.dispatch)
    _.extend(this, boundActions);
  }

  render() {
    return (
      <section className='main'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci in risus facilisis feugiat. Donec sit amet sagittis leo. Nam tristique augue nisl, nec hendrerit leo vehicula in. Aliquam in massa tincidunt nunc venenatis interdum. Nunc eget nisl id est rhoncus porta hendrerit in magna. In sapien leo, tincidunt nec fringilla nec, cursus quis metus. In eu neque nulla. In faucibus nunc libero, ut tincidunt sapien mattis quis. Donec sit amet est tincidunt justo dignissim tempor sit amet malesuada neque. Nullam blandit nisi eget bibendum commodo. Nam ut gravida ex. Vestibulum convallis tempus velit. Nulla sit amet lorem aliquam, pretium nunc sit amet, consectetur sem. Donec molestie est vitae enim tempus varius. Curabitur ac sapien urna.</p>
        <p>Phasellus non felis erat. In quis posuere neque. Duis in metus ac erat vulputate malesuada. Donec tincidunt maximus ligula sed finibus. Ut sit amet turpis eleifend, tincidunt mi eget, efficitur est. Donec turpis elit, consequat eu massa ut, bibendum efficitur ante. Duis blandit odio fringilla ligula cursus lobortis. Curabitur condimentum lacus ac orci fringilla, vel elementum nibh congue. Nam sit amet risus tellus. Vivamus in velit est. Quisque aliquet felis quis sapien vulputate pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut felis quam.</p>
        <p>Suspendisse eget aliquam dolor, eu pellentesque diam. Donec viverra neque id nisl tempus, at porta nulla pellentesque. Curabitur consequat nulla massa, in fringilla leo laoreet vel. Maecenas id tempor lectus. Nam dictum vehicula metus, non convallis velit gravida id. Praesent mattis mauris eu lacus malesuada, vulputate molestie neque placerat. Duis tincidunt facilisis sapien, eget egestas quam varius in. Cras aliquam mauris vitae dui posuere tincidunt. Cras ac dolor et ligula tempus viverra in at ligula.</p>
        <p>Aliquam scelerisque leo at augue blandit consequat. Nunc luctus dictum lorem non rutrum. Nullam ullamcorper ultricies sollicitudin. Aliquam erat nisi, bibendum et mollis in, volutpat volutpat erat. Nunc quis orci elementum risus blandit cursus molestie in libero. Proin porta, ipsum in rutrum tempus, ex est pellentesque massa, vel semper nunc ligula vel mauris. Curabitur consectetur nibh felis, id cursus risus congue eget. In tincidunt tincidunt porttitor. Aliquam orci tellus, bibendum in metus vel, suscipit dapibus eros. Proin sapien arcu, ornare vitae sapien et, efficitur commodo mauris. Pellentesque ipsum lectus, mollis quis nulla porta, molestie tempor nisi. Integer vel fermentum ligula, a semper ante. Duis sit amet urna a arcu venenatis aliquam eget vel est. Maecenas in orci at odio cursus viverra.</p>
        <p>Morbi ornare neque orci, id ullamcorper augue iaculis sit amet. Sed varius sem vel augue convallis lacinia. Maecenas fringilla nibh in posuere scelerisque. Pellentesque pellentesque turpis vitae lorem consequat, et dictum nulla aliquam. Vivamus facilisis blandit sapien eu tristique. Morbi viverra ante et condimentum efficitur. Mauris vel turpis pellentesque, posuere mi nec, malesuada tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis ultrices odio sed erat hendrerit lobortis. Maecenas ut molestie sem. Morbi tincidunt neque in scelerisque lobortis. In ut elit nibh. Etiam rutrum leo in dui laoreet, in cursus eros porttitor.</p>
      </section>
    );
  }
}
