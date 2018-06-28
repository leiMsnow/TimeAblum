
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

export function getAblumList(callback = () => { }) {
    return function (dispatch) {
        return API.getAblumList()
            .then(res => {
                if (res) {
                    callback()
                    dispatch({
                        type: API_SUCCESS,
                        payload: {
                            ablumList: res.data
                        }
                    })
                }
            });
    }
}
