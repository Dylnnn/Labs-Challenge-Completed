import axios from "axios"
export const SETSEARCH = "SETSEARCH"
export const MINPRICE = "MINPRICE"
export const MAXPRICE = "MAXPRICE"
export const SETSTRING = "SETSTRING"
export const NEWCONDITION = "NEWCONDITION"
export const USEDCONDITION = "USEDCONDITION"
export const MODIFYRESULTS = "MODIFYRESULTS"

export const setSearch = (query) => {
    return function (dispatch) {
        axios.post(`http://localhost:3001/mercadolibre/api/search?q=${query}`)
            .then((response) => dispatch({ type: SETSEARCH, payload: response.data }))
            .catch((error) => console.log(error));
    }
}

export const maxPrice = () => {
    return function (dispatch) {
        dispatch({ type: MAXPRICE })
    }
}
export const minPrice = () => {
    return function (dispatch) {
        dispatch({ type: MINPRICE })
    }
}

export const setString = (string) => {
    return function (dispatch) {
        dispatch({ type: SETSTRING, payload: string })
    }
}

export const newCondition = (results) => {
    return function (dispatch) {
        dispatch({ type: NEWCONDITION, payload: results })
    }
}

export const usedCondition = (results) => {
    return function (dispatch) {
        dispatch({ type: USEDCONDITION, payload: results })
    }
}
export const modificarResults = (results) => {
    return function (dispatch) {
        dispatch({ type: MODIFYRESULTS, payload: results })
    }
}




