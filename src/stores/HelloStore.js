import alt from '../alt';
import { HelloActions } from '../actions/HelloActions';

class HelloStore {
  constructor() {
    this.bindActions(HelloActions);
    this.hello = '';
  }

  hello(hello) {
    this.hello = hello;
  }
}


export default alt.createStore(HelloStore);
