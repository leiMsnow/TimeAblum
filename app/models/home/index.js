
import * as API from '../../services/home'

const API_SUCCESS = 'API_SUCCESS'

const initialState = {
    ablumList: []
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

function defaultCallback() {
    log.l('defaultCallback')
}

export function getAblumList(callback = defaultCallback) {
    return function (dispatch) {
        return API.getAblumList()
            .then(res => {
                if (res) {
                    callback()
                    dispatch({
                        type: API_SUCCESS,
                        payload: {
                            banner: res.data,
                        }
                    });
                }
            });
    }
}
