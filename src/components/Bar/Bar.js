import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Bar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Own_Project
                    </Typography>

                    <Link to={'/cart'}>
                        <Button
                            size={"small"}
                            variant="outlined"
                            color="inherit"
                            className={classes.button}
                            endIcon={
                                <Badge badgeContent={props.cartLength} color="secondary">
                                    <ShoppingCartIcon/>
                                </Badge>
                            }
                        >
                            Cart
                        </Button>
                    </Link>


                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cartLength: state.cart.length
    }
};

export default connect(mapStateToProps)(Bar)






