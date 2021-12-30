export default function taskRemoved(state, action) {
    const taskToRemove = state.tasksToDo.find(t => t.taskId === action.payload.taskId);

    if(taskToRemove){
        state.tasksToDo = state.tasksToDo.filter(t => t.taskId !== action.payload.taskId);
        return state;
    }
};