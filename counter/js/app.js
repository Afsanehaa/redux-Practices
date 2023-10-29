const decBtn = document.querySelector('.dec')
const resetBtn = document.querySelector('.reset')
const incBtn = document.querySelector('.inc')
const numberElem = document.querySelector('#num')

//declare counter reducer

const counterReducer = (state=0 , action) => {
    switch (action){
        case "INCREMENT":{
          return state + 1
        }
        case "DECREMENT":{
          return state - 1
        }
        case "SET_ZERO":{
          return store - store
        }
        default:{
            return state
        }
    }
}


const store = Redux.createStore(counterReducer)
console.log(store);

//handle events

decBtn.addEventListener('click' , ()=>{
   store.dispatch({ type :'DECREMENT'})
   console.log(store.getState);
})
resetBtn.addEventListener('click' , ()=>{

})
incBtn.addEventListener('click' , ()=>{

})