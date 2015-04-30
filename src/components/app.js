import _ from 'lodash';
import React, {Component} from 'react';
import AppStore from 'store/appStore';
import Navbar from 'components/navbar';
import Items from 'components/items';

export default React.createClass({
  displayName: 'App',

  getInitialState() {
    return AppStore.getState()
  },

  componentDidMount() {
    // this.loadData()
    AppStore.listen(this.onChange)
  },

  onChange(state) {

  },

  // Load our Firebase data
  loadData() {
    glossaryDb.on('value', snapshot => {
      let items = []

      snapshot.forEach(function(child){
        let item = child.val();
        item.key = child.key();
        items.push(item);
      });

      let sortedItems = _.sortBy(items, function(item){
        return -item.voteCount;
      })

      this.setState({
        glossary: sortedItems
      })
    })
  },

  render() {
    return (
      <div className="app">
        <Items items={this.state.items} />
        <Navbar navbar={this.state.navbar} wordCount={this.state.items.length}/>
      </div>
    )
  }
})
