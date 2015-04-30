import _ from 'lodash';
import React from 'react';
import Vivus from 'vivus/dist/vivus';
import AppStore from 'store/appStore';
import ListenerMixin from 'alt/mixins/ListenerMixin';

export default React.createClass({
  displayName: 'Item',

  getInitialState() {
    return AppStore.getState()
  },

  componentDidMount() {
    AppStore.listen(this.onChange)
    this.item = this.props.item;
    this.classString = 'svg-container-' + this.item.id;
    this.renderSVG(this.item.url);
  },

  renderSVG(url){
    new Vivus(React.findDOMNode(this), {type: 'delayed', duration: 100, file: url} );
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    return (
      <div className={this.classString}></div>
    )
  }
})
