import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/";
import Typography from "@material-ui/core/Typography";


const Auth = (props) => {

    const [formValid, setFormValid] = useState({
        isValidEmail: false,
        isValidPass: false
    });

    const [isSignIn, setIsSignIn] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(email, password, isSignIn)
    }

    const switchAuthMode = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={4}>
                <Grid container justify="flex-start" item xs={4}>
                    <Typography variant="h5" color="textPrimary" component="h3">
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </Typography>
                </Grid>
                <Grid container item xs={4}>
                    <TextField fullWidth id="email" onChange={emailHandler} label="Email"/>
                </Grid>
                <Grid container item xs={4}>
                    <TextField fullWidth id="password" type="password" onChange={passwordHandler} label="Password"/>
                </Grid>
                <Grid container justify="flex-start" item xs={4}>
                    <Typography  color="textSecondary" component="p">
                        {props.authError}
                    </Typography>
                </Grid>
                <Grid container justify="space-between" item xs={4}>
                    <Button variant="outlined" color="primary" onClick={switchAuthMode}>Switch to {isSignIn ? 'sign up' : 'sign in'}</Button>
                    <Button variant="contained" type="submit" disabled={false} color="primary">
                        Submit
                    </Button>
                </Grid>

                {props.isAuthSuccess !== null && !props.isLoading  ? <Redirect to='/' /> : null}

            </Grid>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        authError: state.user.error,
        isAuthSuccess: state.user.userId,
        isLoading: state.user.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignIn) => dispatch(actions.auth(email, password, isSignIn)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);