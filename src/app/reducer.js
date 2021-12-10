import tasksToDoReducer from "../features/tasksToDo/tasksToDoSlice"
import filtersReducer from "../features/filters/filtersSlice"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    tasksToDo: tasksToDoReducer,
    filters: filtersReducer
})

export default rootReducer;