import {
    FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE,
    FETCH_RANDOM_REQUEST,
    FETCH_RANDOM_SUCCESS,
    FETCH_RANDOM_FAILURE,
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
} from '../constants'

const initialState = {
    searchLoading: false,
    searchData: null,
    searchError: null,

    randomLoading: false,
    randomData: null,
    randomError: null,

    homeLoading: false,
    homeData: null,
    homeError: null,
};

const LandingReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_RANDOM_REQUEST: return {
            ...state, randomLoading:true
        };
        case FETCH_RANDOM_SUCCESS: return {
            ...state,
            randomData: action?.payload,
            randomLoading: false
        }
        case FETCH_RANDOM_FAILURE: return {
            ...state,
            randomError: action?.payload,
            randomLoading: false
        }

        case FETCH_CART_REQUEST: return {
            ...state,
            homeLoading:true
        };
        case FETCH_CART_SUCCESS: return {
            ...state,
            homeData: action?.payload,
            homeLoading: false
        }
        case FETCH_CART_FAILURE: return {
            ...state,
            homeError: action?.payload,
            homeLoading: false
        }

        case FETCH_SEARCH_REQUEST: return {
            ...state, searchLoading:true
        };
        case FETCH_SEARCH_SUCCESS: return {
            ...state,
            searchData: action?.payload,
            searchLoading: false
        }
        case FETCH_SEARCH_FAILURE: return {
            ...state,
            searchError: action?.payload,
            searchLoading: false
        }
        default:
            return state
    }
}

export default LandingReducer