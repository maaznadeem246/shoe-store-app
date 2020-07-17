export default (state, action) => {
    switch (action.type) {
        case 'UPDATE_CART':
            return action.payload
        // case 'DELETE_TRANSACTION':
        //     return {
        //         ...state,
        //         transactions: state.transactions.filter(t => t.id != action.payload)
        //     }
        // case 'ADD_TRANSACTION':
        //     return {
        //         ...state,
        //         transactions: [action.payload, ...state.transactions]
        //     }
        default:
            return state
    }
}