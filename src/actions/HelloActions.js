import alt from '../alt';

class HelloActions {
  constructor() {
    this.generateActions(
      'hello'
    );
  }
}

export default alt.createActions(HelloActions);
