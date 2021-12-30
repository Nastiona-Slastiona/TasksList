export default function statusFilterChanged(state, action) {
    return {
        ...state,
        filter: {
            ...state.filter,
            status: action.payload
        }
    };
}
