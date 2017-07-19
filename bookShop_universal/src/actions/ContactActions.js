import axios from 'axios';

//FETCH MESSAGE
export function fetchMessage(){
    return function(dispatch){
        axios.get("/api/contact")
            .then(function(response){
                dispatch({type: "FETCH_MESSAGE", payload: response.data})
            })
            .catch(function(err){
                dispatch({type: "FETCH_MESSAGE_REJECTED", payload: err})
            })
    }
}

// POST MESSAGE
export function postContactMessage(contact){
 return function(dispatch){
 axios.post("/api/contact", contact)
        .then(function(response){
            dispatch({type:"POST_MESSAGE", payload:response.data})
        })
        .catch(function(err){
            dispatch({type:"POST_MESSAGE_REJECTED", payload:"Book cannot be added"})
        })
    }
}

//RESET
export function resetButton(){
    return{
        type: "RESET_BUTTON"
    }
}

