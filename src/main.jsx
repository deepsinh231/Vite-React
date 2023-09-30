import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Myapp() {
  return (
    <h1>Hello</h1>
  )
};
const anotherUser = "chai aur react";

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
);
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherElement
);
ReactDOM.createRoot(document.getElementById('Deepsinh231')).render(
  <>
    {reactElement}
    {Myapp()}
  </>

)
// how to React Working
