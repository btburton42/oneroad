import React, {Component} from 'react';
import AppStore from '../store/appStore';
import AppActions from '../actions/appActions';
import ListenerMixin from 'alt/mixins/ListenerMixin';

export default React.createClass({
  displayName: 'NewItemInput',
  mixins: [ListenerMixin],

  //TODO: add validation
  handleForm: function(e) {
    e.preventDefault();
    let item = {
      title: this.refs.title.getDOMNode().value,
      definition: this.refs.description.getDOMNode().value,
      submitted_by: "null",
      voteCount: 0
    };

    this.refs.feedForm.getDOMNode().reset();

    return AppActions.addItem(item);

  },

  render() {
    let display = this.props.displayed ? 'block' : 'none';
    let styles = {
      display: display
    };

    return(
      <form ref="feedForm" style={styles} id="feedForm" className="container-fluid" onSubmit={this.handleForm}>
        <div className="form-group">
          <input ref="title" type="text" className="form-control" placeholder="Title" />
          <input ref="description" type="text" className="form-control" placeholder="Description" />
          <button type="submit" className="btn btn-primary btn-block">Add</button>
        </div>
      </form>
    )
  }
})
