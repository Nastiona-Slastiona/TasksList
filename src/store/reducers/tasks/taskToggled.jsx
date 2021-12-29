export default function taskToggled(state, action) {
    return {
        ...state,
        tasksToDo: state.tasksToDo.map(toDoAct => {
            if (toDoAct.id !== action.payload.id) {
                return toDoAct;
            }

            return {
                ...toDoAct,
                completed: !toDoAct.completed
            };
        })
    };
}
