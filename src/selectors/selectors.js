/* eslint-disable prettier/prettier */
import { createSelector } from 'reselect';

export const getMetadados = (state) => state.metadados.data;
export const getMetadadosLoading = (state) => state.metadados.isLoading;

export const getIncompleteMetadados = createSelector(
    getMetadados,
    (metadados) => metadados.filter((metadado) => !metadado.isCompleted)
);

export const getCompleteMetadados = createSelector(
    getMetadados,
    (metadados) => metadados.filter((metadado) => metadado.isCompleted),
);

export const getAllMetadados = createSelector(
    getMetadados,
    (metadados) => metadados,
);
