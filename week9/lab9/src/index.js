import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from './App'; 
import FacebookEmojiCounter from './Facebookemoji'; 
import ToggleMode from './ToggleModeComponent'; 
import * as serviceWorker from './serviceWorker'; 
serviceWorker.unregister();

 
ReactDOM.render( 
  <React.Fragment> 
    <FacebookEmojiCounter type="Like" /> 
    <FacebookEmojiCounter type="Love" /> 
    <ToggleMode /> 
  </React.Fragment>, 
  document.getElementById('root')
); 

serviceWorker.unregister();
