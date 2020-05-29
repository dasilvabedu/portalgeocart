/* eslint-disable no-use-before-define */
import {
    loadMetadadosInProgress,
    loadMetadadosSuccess,
    loadMetadadosFailure,
} from '../actions/actions';

export const loadMetadados = () => async (dispatch) => {
    try {
        dispatch(loadMetadadosInProgress());
        const response = await fetch(
            'http://localhost:8080/seguranca_barragem/metadado/simple'
        ); // 'http://localhost:8080/seguranca_barragem/metadado/total'
        const metadados = await response.json();

        dispatch(loadMetadadosSuccess(metadados));
    } catch (e) {
        dispatch(loadMetadadosFailure());
        dispatch(displayAlert(e));
    }
};

export const displayAlert = (text) => () => {
    // eslint-disable-next-line no-alert
    alert(`Error ${text}`);
};
