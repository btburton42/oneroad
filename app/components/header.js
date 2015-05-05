import React from 'react';
import ListenerMixin from 'alt/mixins/ListenerMixin';
import AppStore from 'store/appStore';
import AppActions from 'actions/appActions';

export default React.createClass({
  displayName: 'NavBar',
  mixins: [ListenerMixin],
  contextTypes: {
    router: React.PropTypes.func
  },

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return AppStore.getState();
  },

  componentDidMount() {
    AppStore.listen(this.onChange);
  },

  onChange(state) {
    this.setState(this.getInitialState());
  },

  showPrevious(id) {
    id = parseInt(id) - 1;

    if (this.props.items[id] !== undefined) {
      return this.context.router.transitionTo('item', {id});
    }
    else {
      console.log('you are at the end of the list');
    }
  },

  showNext(id) {
    id = parseInt(id) + 1;

    if (this.props.items[id] !== undefined) {
      return this.context.router.transitionTo('item', {id});
    }
    else {
      console.log('you are at the end of the list');
    }
  },

  toggleShuffle() {
    return AppActions.toggleShuffle();
  },

  render() {
    let {id} = this.context.router.getCurrentParams();

    let item = this.props.items[id];
    let styles = (item !== undefined) ? {color: item.textColor} : {display: 'none'};

    return (
      <div className="navbar">
        <ul className="navbar-list">
        <li className="icon-previous" style={styles} onClick={this.showPrevious.bind(this, id)}></li>
        <li className="icon-shuffle" style={styles} onClick={this.toggleShuffle.bind(null, this)}></li>
        <li className="icon-next" style={styles} onClick={this.showNext.bind(this, id)}></li>
        </ul>
      </div>
    );
  }
});
