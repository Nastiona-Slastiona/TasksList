const initialState = [
        {id:1, title: 'JavaScript', body: 'JavaScript - programming language', completed: true },
        {id:2, title: 'JavaScript2', body: 'JavaScript - programming language', completed: false, color: 'blue' },
        {id:3, title: 'JavaScript3', body: 'JavaScript - programming language', completed: false, color: 'orange' },
];

export default function tasksToDoReducer(state = initialState, action) {
    switch (action.type) {
        case 'tasksToDo/taskAdded':
            return {
                id: action.id,
                title: action.title,
                body: action.body,
                completed: false
            };
        case 'tasksToDo/taskToggled':
            return  state.tasksToDo.map(toDoAct => {
                    if(toDoAct.id !== action.payload.id) {
                        return toDoAct;
                    }

                    return {
                        ...toDoAct,
                        completed: !toDoAct.completed
                    }
            });
        case 'tasksToDo/taskRemoved':
            return state.filter(t => t.id !== action.payload.id);
        default:
            return state;
    }
    
};
