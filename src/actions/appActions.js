import alt from '../utils/alt';

class AppActions {
  constructor() {
    this.generateActions(
      'updateItem',
      'voteCountUpdate',
      'addItem',
      'removeItem'
    );
  }
}

export default alt.createActions(AppActions);
