import{addTodo,
    removeTodo,
    doTodo,
    filterAllTodos,
    filterCompletedTodos,
    filterIncomletedTodos} from"../redux/action.js";

//create todolist reducer
function todolistReducer(state =[], action){
    switch(action.type){
       case addTodo: {
        return state
       }
       case removeTodo: {
        return state
       }
       case doTodo: {
        return state
       }
       case filterAllTodos: {
        return state
       }
       case filterCompletedTodos: {
        return state
       }
       case filterIncomletedTodos: {
        return state
       }
        default:{
            return state
        }
    }
}
