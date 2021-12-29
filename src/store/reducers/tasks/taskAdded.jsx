export default function taskAdded(state, action) {
    state.tasksToDo.push(action.payload);
}
