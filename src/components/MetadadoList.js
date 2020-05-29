/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadMetadados } from '../api/MetadadoApi';
import NewMetadadoForm from './NewMetadadoForm';
import MetadadoListItem from './MetadadoListItem';

import { getMetadadosLoading, getAllMetadados } from '../selectors/selectors';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const MetadadoList = ({
    metadados,
    onCompletedPressed,
    isLoading,
    startLoadingMetadados,
}) => {
    useEffect(() => {
        startLoadingMetadados();
    }, []);

    const loadingMessage = <div>Loading metadados...</div>;
    const contant = (
        <ListWrapper>
            <NewMetadadoForm />
            <h3>Metadados</h3>
            {metadados.map((metadado) => (
                <MetadadoListItem
                    key={metadado.id}
                    metadado={metadado}
                    onCompletedPressed={onCompletedPressed}
                />
            ))}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : contant;
};

const mapStateToProps = (state) => ({
    isLoading: getMetadadosLoading(state),
    metadados: getAllMetadados(state),
});

const mapDispatchToProps = (dispatch) => ({
    onCompletedPressed: (id) => dispatch(console.log(id)),
    startLoadingMetadados: () => dispatch(loadMetadados()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MetadadoList);
