import {
    LOAD_METADADOS_IN_PROGRESS,
    LOAD_METADADOS_SUCCESS,
    LOAD_METADADOS_FAILURE,
} from '../actions/actions';

const initialState = { isLoading: false, data: [] };
export const metadados = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_METADADOS_SUCCESS: {
            // eslint-disable-next-line no-shadow
            const { metadados } = payload;
            return {
                ...state,
                isLoading: false,
                data: metadados,
            };
        }

        case LOAD_METADADOS_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case LOAD_METADADOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            return state;
    }
};
