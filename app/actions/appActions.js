import alt from '../utils/alt';

class AppActions {
  constructor() {
    this.generateActions(
      'showPrevious',
      'showNext',
      'toggleShuffle'
    );
  }
}

export default alt.createActions(AppActions);
