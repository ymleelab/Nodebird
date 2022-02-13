import axios from 'axios';

export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {}
}

/*export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        setTimeout(() => {
            dispatch(loginRequestAction());
        }, 2000);
        axios.get('api/login')
            .then((res) => {
                dispatch(loginSuccessAction(res));
            })
            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
    }
}*/
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
};
export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
};
export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    }
};
export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FAILURE',
        data,
    }
};
export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
};
export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
};
export const logoutSuccessAction = () => {
    return {
        type: 'LOG_OUT_SUCCESS',
    }
};
export const logoutFailureAction = () => {
    return {
        type: 'LOG_OUT_FAILURE',
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                me: action.data,                
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            };
        default:
            return state;
    }
};

export default reducer;