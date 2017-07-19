"use strict";

import axios from 'axios';

//FETCH BOOKS
export function fetchBooks(){
    return function(dispatch){
        axios.get("/api/books")
            .then(function(response){
                dispatch({type: "FETCH_BOOKS", payload: response.data})
            })
            .catch(function(err){
                dispatch({type: "FETCH_BOOKS_REJECTED", payload: err})
            })
    }
}

// POST A BOOK
export function postBooks(book){
 return function(dispatch){
 axios.post("/api/books", book)
        .then(function(response){
            dispatch({type:"POST_BOOK", payload:response.data})
        })
        .catch(function(err){
            dispatch({type:"POST_BOOK_REJECTED", payload:"Book cannot be added"})
        })
    }
}

//DELETE BOOKS
export function deleteBooks(id){
 return function(dispatch){
    axios.delete("/api/books/" + id)
        .then(function(response){
         dispatch({type:"DELETE_BOOK", payload:id})
    })
        .catch(function(err){
        dispatch({type:"DELETE_BOOK_REJECTED", payload:err})
    })
 }
}

//UPDATE BOOKS
export function updateBooks(book){
    return{
        type: "UPDATE_BOOKS",
        payload: book
    }
}

//RESET BUTTON
export function resetButton(){
    return{
        type: "RESET_BUTTON"
    }
}


