import {getHomeRepo, getSearchRepo, getRandomRepo} from '../repositiries/home'
import {
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
    FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE,
    FETCH_RANDOM_REQUEST,
    FETCH_RANDOM_SUCCESS,
    FETCH_RANDOM_FAILURE
} from '../constants'


export const fetchRandomData = (params)=>{
    return async (dispatch) => {
    dispatch({ type: FETCH_RANDOM_REQUEST });
    await getRandomRepo(params)
        .then((response) => {
        if (response.status === 200) {
            
            dispatch({ type: FETCH_RANDOM_SUCCESS, payload: response.data });
        } else {
            dispatch({ type: FETCH_RANDOM_SUCCESS, payload: response?.data });
        }
        })
        .catch((error) => {
            if (error && error.response) {
                dispatch({ type: FETCH_RANDOM_FAILURE, payload: error.message });
            }
        });
    };
}

export const fetchCartData = (params)=>{
    return async (dispatch) => {
    dispatch({ type: FETCH_CART_REQUEST });
    await getHomeRepo(params)
        .then((response) => {
        if (response.status === 200) {
            
            dispatch({ type: FETCH_CART_SUCCESS, payload: response.data });
        } else {
            dispatch({ type: FETCH_CART_SUCCESS, payload: response?.data });
        }
        })
        .catch((error) => {
            if (error && error.response) {
                dispatch({ type: FETCH_CART_FAILURE, payload: error.message });
            }
        });
    };
}

export const fetchSearchData = (params)=>{
    return async (dispatch) => {
        dispatch({ type: FETCH_SEARCH_REQUEST });
        await getSearchRepo(params)
            .then((response) => {
            if (response.status === 200) {
                
                dispatch({ type: FETCH_SEARCH_SUCCESS, payload: response?.data });
            } else {
                dispatch({ type: FETCH_CART_SUCCESS, payload: response });
            }
            })
            .catch((error) => {
                if (error && error.response) {
                    dispatch({ type: FETCH_SEARCH_FAILURE, payload: error.message });
                }
            });
        };
    }

