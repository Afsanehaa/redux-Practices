import { 
    counterDecrement,
    counterIncrement,
    counterSetZero
}from "../redux/actions.js";

const decBtn = document.querySelector('.dec');
const resetBtn = document.querySelector('.reset');
const incBtn = document.querySelector('.inc');
const numberElem = document.querySelector('#num');

//declare counter reducer

const counterReducer = (state = 0 , action) => {
    switch (action.type){
        case counterIncrement: {
          return state + 1
        }
        case counterDecrement:{
          return state - 1
          
        }
        case counterSetZero:{
          return state - state
        }
        default:{
            return state
        }
    }
};


const store = Redux.createStore(counterReducer)


//handle events

decBtn.addEventListener('click' , ()=>{
   store.dispatch({ type :counterDecrement});
  let newValue =store.getState();
   numberElem.innerHTML= newValue;
   console.log(store.getState());
});

resetBtn.addEventListener('click' , ()=>{
    store.dispatch({ type :counterSetZero});
  let newValue =store.getState();

    numberElem.innerHTML =newValue;
    console.log(store.getState());
});

incBtn.addEventListener('click' , ()=>{
    store.dispatch({ type :counterIncrement});
    let newValue =store.getState();
    numberElem.innerHTML =newValue;
    console.log(store.getState());
});