import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import { updateFilter } from './actions/filter_actions'

//this is entry file
//

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState); //setup redux and react
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.updateFilter = updateFilter;
  const root = document.getElementById("root"); //find the div called 'root'
  ReactDOM.render(<Root store={store}/> , root); //render root component inside root div
});