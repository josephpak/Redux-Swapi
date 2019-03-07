import axios from 'axios';

export const FETCHING = "FETCHING"
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE"

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING })

    axios
        .get('https://swapi.co/api/people/')
        .then(res => {
            console.log(res)
            dispatch({ type: SUCCESS, payload: res.data.results });
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FAILURE, payload: "this is an error!!" })
        })
}

