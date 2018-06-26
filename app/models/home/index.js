
const GET_HOME_BANNER_SUCCESS = 'GET_HOME_BANNER_SUCCESS'

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOME_BANNER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

const initialState = {

};
