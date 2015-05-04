'use strict';

import React from 'react';
import {RouteHandler} from 'react-router';
import objectAssign from 'object-assign';
import ListenerMixin from 'alt/mixins/ListenerMixin';

import AppStore from 'store/appStore';

import Header from 'components/header';

export default React.createClass({
  displayName: 'App',
  mixins: [ListenerMixin],

  getInitialState() {
    return AppStore.getState();
  },

  componentDidMount() {
    AppStore.listen(this.onChange);
  },

  onChange(state) {
    console.log(state);
  },

  render() {
    const props: Object = objectAssign(this.state, this.props);
    return (
      <div className="app">
        <RouteHandler {...props} />
        <Header {...props}/>
      </div>
    );
  }
});
