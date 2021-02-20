
export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newItems = [...state.people, action.payload]
        return {
            ...state,
            people: newItems,
            isModalOpen: true,
            modalContent: 'item added',
        }
    }
    if (action.type === 'NO_VALUE') {
        return { ...state, isModalOpen: true, modalContent: 'please enter value' };
    }
    if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false }
    }
    if (action.type === 'REMOVE_ITEM') {
        const newPerson = state.people.filter((person) => person.id !== action.payload)
        return { ...state, people: newPerson }
    }
    throw new Error('no matching action type')
};