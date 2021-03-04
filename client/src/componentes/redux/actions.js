import axios from "axios"
export const SETSEARCH = "SETSEARCH"
export const MINPRICE = "MINPRICE"
export const MAXPRICE = "MAXPRICE"
export const SETSTRING = "SETSTRING"
export const NEWCONDITION = "NEWCONDITION"
export const USEDCONDITION = "USEDCONDITION"
export const MODIFYRESULTS = "MODIFYRESULTS"
    let results = {}
export const setSearch = (query) => async (dispatch) => {
    const queryString = query
    
    console.log(results)
    if (!results[`${queryString}`]) {
        const response = await axios.post(`http://localhost:3001/mercadolibre/api/search?q=${query}`)
        results[`${queryString}`] = await response.data
        dispatch({ type: SETSEARCH, payload: response.data })
        console.log(results[`${queryString}`])
        
    }
    else {
        console.log("ultimo cs", results[`${queryString}`])
        dispatch({ type: SETSEARCH, payload: results[`${queryString}`] })
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




