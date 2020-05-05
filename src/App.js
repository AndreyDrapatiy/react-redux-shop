import React, {Suspense} from 'react';

import * as ROUTES from './router/routes';


import Bar from './components/Bar/Bar'
import ItemsList from "./containers/ItemsList/ItemsList";
import Auth from "./containers/Auth/Auth";

import SingleItem from "./containers/SingleItem/SingleItem";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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

    return (

            <Router>

                <Bar/>

                <Container maxWidth={'lg'}  className={classes.root}>

                    <Route exact path={ROUTES.HOME} component={ItemsList}/>

                    <Switch>
                        <Route path={ROUTES.AUTH} component={Auth}/>
                        <Route path={ROUTES.SINGLE} component={SingleItem}/>
                        <Route path={ROUTES.CART} component={Cart}/>
                        <Route path={ROUTES.AUTH} component={Auth}/>
                    </Switch>

                </Container>
            </Router>
    );
}

export default App;
