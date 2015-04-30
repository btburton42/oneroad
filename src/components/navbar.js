import React from 'react';

export default React.createClass({
  displayName: 'NavBar',

  onChange(){
    console.log(this);
  },

  render(){
    return (
      <div className="navbar">
      </div>
    )
  }
})
