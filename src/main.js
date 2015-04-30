import React from 'react';
import App from 'components/app';
import 'bootstrap_sass';

function run(){
  let element = React.createElement(App);
  React.render(element, document.getElementById('react-root'));
}

run();
