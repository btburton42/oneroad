import React from 'react';
import Vivus from 'vivus/dist/vivus';
import AppStore from 'store/appStore';
import ListenerMixin from 'alt/mixins/ListenerMixin';

export default React.createClass({
  displayName: 'Item',
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
    this.renderSVG();
  },

  componentWillReceiveProps() {
    React.findDOMNode(this).removeChild(React.findDOMNode(this).childNodes[0]);
    this.renderSVG();
  },

  renderSVG() {
    const {id}: string = this.context.router.getCurrentParams();
    this.item = this.props.items[id];
    this.classString = 'svg-container-' + this.item.id;

    this.SVGcanvas = new Vivus(React.findDOMNode(this), {type: 'delayed', duration: 100, file: this.item.url});
  },

  replaySVG() {
    this.SVGcanvas.reset();
    this.SVGcanvas.play(1);
  },

  render() {
    return (
      <div onClick={this.replaySVG.bind(null, this)} className={this.classString}></div>
    );
  }
});
