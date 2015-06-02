import React from 'react';

export default React.createClass({
  displayName: 'randomItem',
  contextTypes: {
    router: React.PropTypes.func
  },

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  componentDidMount() {
    const ruleCount = this.props.items.length;
    let id = Math.floor(Math.random() * ruleCount);
    this.context.router.transitionTo('item', {id});
  },

  render() {
    return (
      <div></div>
    );
  }
});
