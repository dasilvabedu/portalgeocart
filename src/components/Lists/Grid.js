/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { hot } from 'react-hot-loader';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import Map from '../Map/Map';
import CustomTable from '../Table/CustomTable';
import Toast from '../Toast/Toast';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '16px',
    },
    paper: {
        padding: theme.spacing(2),
        height: 465,
        overflow: 'auto',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    header: {
        alignItems: 'center',
        background: '#1abc9c',
        color: 'white',
        paddingLeft: '8px',
    },
}));

const SimplePaper = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        mensagem: {
            open: false,
            texto: '',
            tipo: 'success'
        },
    });

    const handleChange = (event) => {
        const { name } = event.target;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const update = (id) => {
        const mensagem = {
            open: true,
            texto: `Consultar/Update ${id}`,
            tipo: 'success'
        }
        setState({mensagem});
    }

    const campos = [
        {titulo: "Campo", dado: 'campo'},
        {titulo: "Descrição", dado: 'descricao'},
        {titulo: "Tipo", dado: 'tipo'},
      ];

    const data = [
        {
            "id": 11,
            "campo": "Xxxx",
            "descricao": "yyyyyyy",
            "tipo": "Inteiro",
        },
        {
            "id": 12,
            "campo": "Yyyy",
            "descricao": "nnnnnnn",
            "tipo": "Decimal",
        },
        {
            "id": 13,
            "campo": "Zzzz",
            "descricao": "mmmmmm",
            "tipo": "Date",
        },
        {
            "id": 14,
            "campo": "Zzzz",
            "descricao": "mmmmmm",
            "tipo": "Date",
        },
        {
            "id": 15,
            "campo": "Zzzz",
            "descricao": "mmmmmm",
            "tipo": "Date",
        },
        {
            "id": 16,
            "campo": "Zzzz",
            "descricao": "mmmmmm",
            "tipo": "Date",
        },
        {
            "id": 17,
            "campo": "Zzzz",
            "descricao": "mmmmmm",
            "tipo": "Date",
        },
        {
            "id": 18,
            "campo": "Zzzz",
            "descricao": "mmmmmm",
            "tipo": "Date",
        },
    ];

    return (
        <>
        <Toast
          open={state.mensagem.open}
          handleClose={() => setState({ mensagem: { open: false }})}
          severity={state.mensagem.tipo}>
            {state.mensagem.texto}
        </Toast>

            <div className={classes.root}>
                <Grid container justify="center" alignItems="center" spacing={1}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div className={classes.header}>
                                <h3>Mapas Temáticos</h3>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs>
                                        <FormControl className={classes.formControl}>
                                        <Typography gutterBottom variant="subtitle1">
                                            Objetos de Interesse
                                        </Typography>
                                            <NativeSelect
                                                value={state.age}
                                                onChange={handleChange}
                                                inputProps={{
                                                    name: 'age',
                                                    id:
                                                        'age-native-label-placeholder',
                                                }}
                                            >
                                                <option value="">Selecione</option>
                                                <option value={10}>Nome1</option>
                                                <option value={20}>Nome2</option>
                                                <option value={30}>Nome3</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>


                            <div className={classes.header}>
                                <h3>Metadados do Objeto</h3>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column"spacing={2}>
                                        <Grid item xs>
                                            <Typography variant="body2" gutterBottom>
                                                <strong>Objeto:</strong> Unidade da Federação
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                <strong>Nome no banco:</strong> UNF_Federacao
                                            </Typography><Typography variant="body2" gutterBottom>
                                                <strong>Descrição:</strong> Limites das unidades federativas do Brasil
                                            </Typography><Typography variant="body2" gutterBottom>
                                                <strong>Tipo:</strong> Tipo Espacial
                                            </Typography><Typography variant="body2" gutterBottom>
                                                <strong>Subtipo:</strong> Polígono
                                            </Typography>

                                            <CustomTable dados= {data} campos={campos} atualizaDados = {update} contentMaxHeight={200}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container >
                                    <Map />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
        </div>
     </>
    );
};

export default hot(module)(SimplePaper);
