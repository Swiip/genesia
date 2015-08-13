import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { transitionTo } from 'redux-react-router';
import { Dialog, FlatButton, Paper } from 'material-ui';
import marked from 'marked';
import { getAllMessages } from '../../actions/MessagesActions';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();

@connect(state => ({ messages: state.messages }))
export class Messages extends Component {
  static propTypes = {
    messages: PropTypes.instanceOf(List).isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  constructor(props) {
    super(props);

    const actions = { transitionTo, getAllMessages };
    const boundActions = bindActionCreators(actions, props.dispatch)
    _.extend(this, boundActions);
    this.getAllMessages();
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  render() {
    var standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onClick: this.submitClick }
    ];

    return (
      <section className='main'>
        <Dialog title="Add" ref="addDialog" actions={standardActions} />
        <FlatButton onClick={this.addClick}>Add</FlatButton>
        {this.props.messages.map(message => (
          <Paper zDepth={2} key={message.get('_id')}>
            <div dangerouslySetInnerHTML={{ __html: marked(message.get('message')) }}></div>
          </Paper>
        ))}
      </section>
    );
  }
}
