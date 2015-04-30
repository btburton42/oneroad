import alt from 'utils/alt';
import AppActions from 'actions/appActions';
import data from 'assets/data.json';

class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.items = data.items;
    this.navbar = {
      name: 'Glossary List'
    };
  }

  onToggleShuffle() {
    console.log('toggleshuffle');
  }

}

export default alt.createStore(AppStore, 'AppStore');
