import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import AddIcon from '@material-ui/icons/AddCircleRounded';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import * as actions from "../../store/actions/";
import {connect} from "react-redux";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

const ToCartModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const inc = () => {
        setQuantity(quantity + 1)
    };

    const dec = () => {
        if (quantity !== 1) {
            setQuantity(quantity - 1)
        } else return null
    };

    const computedData = () => {
        let data = [quantity, props.item.id]
        return data;
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addBtnHandler = () => {
        props.addToCart(props.userToken, props.userId, props.userCart, computedData());
        handleClose();
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography variant="h5" color="textPrimary" component="h3">
                    {props.item.title}
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <CardMedia
                    className={classes.media}
                    image={props.item.img}
                />
                </Grid>
                <Grid item xs={12}>
                <Typography variant="h5" color="textPrimary" component="h3">
                    $ {props.item.price * quantity} (x{quantity})
                </Typography>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item container xs={4} direction="row" justify="flex-start">
                        <IconButton aria-label="add to favorites" onClick={dec}><RemoveIcon/></IconButton>
                        <IconButton aria-label="add to favorites" onClick={inc}><AddIcon/></IconButton>
                    </Grid>
                    <Grid item container xs={4} direction="row" justify="flex-end">
                        <Button size="large" color="secondary" onClick={() => addBtnHandler()}>add <ShoppingCartIcon/></Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );

    return (
        <div>
            <Button size="medium" color="secondary" onClick={handleOpen}>Add To Cart</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userId: state.user.userId,
        userToken: state.user.token,
        userCart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (token, userId, cart, currentItem) => dispatch(actions.add_to_cart(token, userId, cart, currentItem))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToCartModal)