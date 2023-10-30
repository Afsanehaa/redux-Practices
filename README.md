# redux-Practices

In this repository , i’m learning redux and share my exercises and examples .

# 1.counter mini project
The first mini-project in Redux learning is a counter project that consists of three increase, decrease and reset buttons.
So there are three actions in this project. So, there are three states to write Reducer.

## Usage/Examples
First, in a separate javascript file for actions, we define all available actions-type as follows:
```javascript
export const counterDecrement = "DECREMENT";
export const counterIncrement = "INCREMENT";
export const counterSetZero = "SET-ZERO";

```
Then we write an action-creator in a separate file:
```javascript
const incrementAction = ()=>{
    return{
        type: counterIncrement
    }
}
const decrementAction = ()=>{
    return{
        type: counterDecrement
    }
}
const setZeroAction = ()=>{
    return{
        type: counterSetZero
    }
}


```
And finally, we place them in the reducer and events:
```javascript
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
   store.dispatch(decrementAction());
  let newValue =store.getState();
   numberElem.innerHTML= newValue;
   console.log(store.getState());
});

resetBtn.addEventListener('click' , ()=>{
    store.dispatch(setZeroAction());
  let newValue =store.getState();

    numberElem.innerHTML =newValue;
    console.log(store.getState());
});

incBtn.addEventListener('click' , ()=>{
    store.dispatch(incrementAction());
    let newValue =store.getState();
    numberElem.innerHTML =newValue;
    console.log(store.getState());
});
```

## Authors

- [@Afsanehaa](https://www.github.com/Afsanehaa)
## Tech Stack

**Client:** html, css, javascript

**Server:** -

## Feedback

If you have any feedback, please reach out to us at afsanehabdid@gmail.com
