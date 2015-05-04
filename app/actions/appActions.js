import alt from '../utils/alt';

class AppActions {
  constructor() {
    this.generateActions(
      'toggleShuffle'
    );
  }
}

export default alt.createActions(AppActions);
