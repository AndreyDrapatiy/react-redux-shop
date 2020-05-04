import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {

        },
    },

}));

const Auth = (props) => {
    const classes = useStyles();

    const submitHandler = (event) => {
        event.preventDefault();

        props.onAuth('mrmoresun@outlook.com', '1q2w3e')
    }

    return (

        <form onSubmit={submitHandler}>
            <Grid container direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={4}>
                <Grid container item xs={4}>
                    <TextField fullWidth id="standard-basic" label="Standard"/>
                </Grid>
                <Grid container item xs={4}>
                    <TextField fullWidth id="standard-basic" label="Standard"/>
                </Grid>
                <Grid container item xs={4}>
                    <Button variant="contained" type="submit" color="primary">
                        Sign up
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth);