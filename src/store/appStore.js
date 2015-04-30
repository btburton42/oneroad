import alt from 'utils/alt';
import AppActions from 'actions/appActions';
import data from 'json!assets/data.json'

// our Firebase URL
// let glossaryDb = new Firebase('https://glossophilia.firebaseio.com/glossary');

class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.items = data.items;
    this.navbar = {
      name: 'Glossary List',
    }
    this.isFormDisplayed = true
  }

  onVoteCountUpdate(item){
    let glossaryItem = glossaryDb.child(item.key)
    glossaryItem.update(item)
  }

  onAddItem(item){
    glossaryDb.push(item)
  }

  onUpdateItem(item){

  }

  onRemoveItem(item){
    let glossaryItem = glossaryDb.child(item.key)
    glossaryItem.remove();
  }


}

export default alt.createStore(AppStore, 'AppStore');
