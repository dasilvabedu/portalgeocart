export const LOAD_METADADOS_IN_PROGRESS = 'LOAD_METADADOS_IN_PROGRESS';
export const loadMetadadosInProgress = () => ({
    type: LOAD_METADADOS_IN_PROGRESS,
});

export const LOAD_METADADOS_SUCCESS = 'LOAD_METADADOS_SUCCESS';
export const loadMetadadosSuccess = (metadados) => ({
    type: LOAD_METADADOS_SUCCESS,
    payload: { metadados },
});

export const LOAD_METADADOS_FAILURE = 'LOAD_METADADOS_FAILURE';
export const loadMetadadosFailure = () => ({
    type: LOAD_METADADOS_FAILURE,
});
