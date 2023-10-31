# redux-Practices

In this repository, you will see examples of mini-projects about learning Redux step by step.
And I will put relevant explanations at each stage.

# 1.Counter

The counter mini project is the first part of this section.

You can see the coding step by step below:

## Usage/Examples

First, we write the actions in the project in a separate JavaScript file:
```javascript
export const counterDecrement = "DECREMENT";
export const counterIncrement = "INCREMENT";
export const counterSetZero = "SET-ZERO";
```

Then we create an action-creator as follows:
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
Now it's time to create a reducer:
```javascript
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
```
And finally, we use them in events such as the following events:
```javascript
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

