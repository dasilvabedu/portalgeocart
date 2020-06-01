import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import Edit from '@material-ui/icons/Edit';

import './CustomScrollbar.css';

const CellAction = ({ atualizaDados, id }) => {
    if (!atualizaDados) return null;

    return (
        <TableCell align="center">
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => {
                    atualizaDados(id);
                }}
            >
                <Search />
            </IconButton>
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => {
                    atualizaDados(id);
                }}
            >
                <Edit />
            </IconButton>
        </TableCell>
    );
};

const TitleAction = ({ atualizaDados }) => {
    if (!atualizaDados) return null;

    return <TableCell align="center">AÇÕES</TableCell>;
};

const CustomTable = (props) => {
    const { campos, dados, atualizaDados, contentMaxHeight } = props;

    return (
        <TableContainer style={{ maxHeight: contentMaxHeight }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {campos.map((campo) => (
                            <TableCell align="center">{campo.titulo}</TableCell>
                        ))}
                        <TitleAction atualizaDados={atualizaDados} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dados.map((dado) => (
                        <TableRow key={dado.id}>
                            {campos.map((campo) => (
                                <TableCell align="center">
                                    {dado[campo.dado]}
                                </TableCell>
                            ))}
                            <CellAction
                                id={dado.id}
                                atualizaDados={atualizaDados}
                            />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
