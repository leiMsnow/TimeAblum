import * as API from '../../services/home'

const API_SUCCESS = 'API_SUCCESS'

const initialState = {
    coverList: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case API_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export function getCoverList() {
    return function (dispatch) {
        return API.getCoverList()
            .then(res => {
                if (res) {
                    dispatch({
                        type: API_SUCCESS,
                        payload: {
                            coverList: res.data
                        }
                    })
                }
            })
    }
}
