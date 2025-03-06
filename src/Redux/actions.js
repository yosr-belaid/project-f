import { ADD_TASK } from "./actionTypes";
import { FILTER } from "./actionTypes";
import { EDIT_TASK } from "./actionTypes";
import { REMOVE_TASK, GET_COACH } from "./actionTypes";
import { SIGNUP, LOGOUT } from "./actionTypes";
import { SIGNIN, GET_AUTH } from "./actionTypes";
import axios from "axios";


export const signup = (newUser) => async (dispatch) => {
    await axios
      .post("/users/addUser", newUser)
      .then((res) => dispatch({ type: SIGNUP, payload: res.data }))
      .catch((err) => console.error(err));
  }; 
  export const signIn = (userCredentials) => async (dispatch) => {
    await axios
      .post("/users/login", userCredentials)
      .then((res) => dispatch({ type: SIGNIN, payload: res.data }))
      .catch((err) => console.error(err));
  };

  export const getCoach = () => async (dispatch) => {
    await axios
    .get("/users/coach")
    .then((res)=> dispatch({type: GET_COACH, payload: res.data}))
    .catch((err) => console.error(err));
  }
  
export const removeTask = (id) => {
    return { type: REMOVE_TASK, payload: id };
  };
  
export const addTask = (newtask) => { 
      return {type: ADD_TASK, payload: newtask }
  };
export const filtertask =(filter) =>{
      return {type: FILTER,payload: filter }
  };
  
export const editTask = (task) => {
    return { type: EDIT_TASK, payload: task }; 
  };


  export const logout = () => {
    return {type: LOGOUT}
}

export const getAuth = () => async (dispatch) => {
    const config = {
        headers : {
            Authorization: localStorage.getItem("token")
        }
    }
    await axios.get("/users/isAuth", config)
    .then((res) => dispatch({type: GET_AUTH, payload: res.data}))
    .catch((err)=> console.error(err))
}