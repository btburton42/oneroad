import _ from 'lodash';
import React from 'react';
import AppStore from 'store/appStore';
import AppActions from 'actions/appActions';
import ListenerMixin from 'alt/mixins/ListenerMixin';

import Item from 'components/item';

import '../styles/items.scss'

export default React.createClass({
  displayName: 'List',
  mixins: [ListenerMixin],

  getInitialState() {
    return AppStore.getState()
  },

  componentDidMount() {
    AppStore.listen(this.onChange)
  },

  onChange(state) {
    this.setState(state);
  },

  voteUp(item){
    item.voteCount++
    return AppActions.voteCountUpdate(item);
  },

  voteDown(item){
    item.voteCount--
    return AppActions.voteCountUpdate(item);
  },

  removeItem(item){
    return AppActions.removeItem(item);
  },

  updateItem(item){
    return AppActions.updateItem(item);
  },

  flagItem(item){
    return AppActions.updateItem(item);
  },

  renderItems() {
    return this.props.items.map((item, index) => {
      return (
        <Item item={item}/>
      );
    });
  },

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <ul className="glossary">
          {this.renderItems()}
        </ul>
      </div>
    )
  }
})
