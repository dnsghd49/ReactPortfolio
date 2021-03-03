import React from 'react';
import me from './me.png'; // Tell webpack this JS file uses this image
import './style.css';

console.log(me); // /logo.84287d09.png

function Me() {
  console.log(me);
  return (
    <div>
      <img className="picc" src={me} alt="me" />
    </div>
  );
}

export default Me;