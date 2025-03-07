
import { 
    SIGNUP, 
    ADD_TASK, 
    REMOVE_TASK, 
    EDIT_TASK, 
    FILTER, 
    SIGNIN, 
    GET_AUTH, 
    GET_COACH,
    SAVE_WORKOUT_LIST, 
    LOGOUT
} from './actionTypes';

const initialState = {
    user: null,
    tasks: [],
    filter: false,
    token: null,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        case SIGNIN:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };

        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };

        case REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };

        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, ...action.payload } : task
                ),
            };

        case FILTER:
            return { ...state, filter: action.payload };
        case GET_AUTH:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };

        case GET_COACH:
            console.log(action.payload)
                return {
                    ...state,
                    user: action.payload
                }
        case SAVE_WORKOUT_LIST:
          return {
            ...state,
            savedWorkouts: [...(state.savedWorkouts || []), action.payload]
          };
          case LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                user: null,
                token: null
            }
        default:
            return state;
    };
};

export default reducer;