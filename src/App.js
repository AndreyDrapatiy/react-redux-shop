import React, {Suspense} from 'react';

import * as ROUTES from './routes';


import Bar from './components/Bar/Bar'
import ItemsList from "./containers/ItemsList/ItemsList";

import SingleItem from "./containers/SingleItem/SingleItem";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        marginTop: '60px',
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
                        <Route path={ROUTES.SINGLE} component={SingleItem}/>
                    </Switch>

                </Container>
            </Router>

    );
}

export default App;
