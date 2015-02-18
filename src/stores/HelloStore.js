import alt from '../alt';

import HelloActions from '../actions/HelloActions';

class HelloStore {
  constructor() {
    this.bindActions(HelloActions);
    this.hello = '';
  }

  hello() {
    this.hello = 'Hello';
  }
}


export default alt.createStore(HelloStore);
