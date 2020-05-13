import React, {useEffect} from 'react';

import * as ROUTES from './router/routes';


import Bar from './components/Bar/Bar'
import ItemsList from "./containers/ItemsList/ItemsList";
import Auth from "./containers/Auth/Auth";

import { connect, useDispatch } from 'react-redux'
import * as actions from "../src/store/actions/";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import Cart from "./containers/Cart/Cart";

const useStyles = makeStyles({
    root: {
        marginTop: '120px',
    },
});

function App() {
    const classes = useStyles();


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.auth_check_state());
            dispatch(actions.cart_check_state());
    }, [])

    return (

            <Router>

                <Bar/>

                <Container maxWidth={'lg'}  className={classes.root}>

                    <Route exact path={ROUTES.HOME} component={ItemsList}/>

                    <Switch>
                        <Route path={ROUTES.AUTH} component={Auth}/>
                        {/*<Route path={ROUTES.SINGLE} component={SingleItem}/>*/}
                        <Route path={ROUTES.CART} component={Cart}/>
                    </Switch>

                </Container>
            </Router>
    );
}



export default connect(null, null)(App);
