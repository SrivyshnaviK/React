import { createStore } from "redux";
const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  } 
  
  const store = createStore(counter);
  
function Render() {
    document.body.innerText = store.getState();
  };
  
  store.subscribe(Render);
  Render();
  
  document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
  });

  export default Render;