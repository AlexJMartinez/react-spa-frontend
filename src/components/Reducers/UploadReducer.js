export default function UploadReducer(
    state = {
        uploads: []
    },
    action
) {
    switch (action.type) {
        case 'ADD_IMAGE': 
                return {
                    ...state, 
                    uploads: [...state.uploads, action.payload]
                }
        default: 
                return state;
    }
}