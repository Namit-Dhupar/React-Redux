/***********************************************REDUX INTRO****************************************************/
//Redux is a standalone package consisting of the following parts
//1.) Centeral Store: Consists of all the states of the application(A giant javascript object)
/*2.) Actions: Component are unable to make changes on the states present in the centeral store, It's just not how it works.
      So we need Actions which are DISPATCHED from the components. Action is basically an information package like 'add ingredient'*/
/*3.) Reducer: The Action reaches Reducer, which can actually make changes in the centeral store, It consists of:
      'Reducer(Action, old state)' which gives out the updated state and can execute synchronous functions only, later
      the updated state from reducer makes changes in the centeral store in an immutable way*/
/*4.) Subscription: It helps make the changes in the Component as well when the states are updated through reducers and they
      are automatically triggered by the Centeral Store whenever the state updates and then passes those updates as props to Component*/
/*******************************************************************************************************************/  

import React from 'react';
import ReactDOM from 'react-dom';
//Redux imported from npm install --save redux
import { createStore } from 'redux';
//Connect the redux store with react application npm install --save react-redux
import { Provider } from 'react-redux'; //Injects redux store in the react app
import Reducer from './Store/Reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
