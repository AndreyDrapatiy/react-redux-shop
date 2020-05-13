import React from 'react';
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import Item from "../../components/Item/Item";

const Cart = (props) => {



    return (
        <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="center"
        >
            {/*{*/}

            {/*        props.cartItems.map((item, index) =>*/}
            {/*            <Grid key={index} item xs={4}>*/}
            {/*                <Item*/}
            {/*                    title={item.title}*/}
            {/*                    date={item.date}*/}
            {/*                    available={item.available}*/}
            {/*                    price={item.price}*/}
            {/*                    key={index}*/}
            {/*                    index={item.id}*/}
            {/*                    description={item.description}*/}
            {/*                    img={item.img}*/}

            {/*                /></Grid>)*/}
            {/*}*/}

        </Grid>
    )
};

const mapStateToProps = state => ({
        cartItems: state.cart
});

export default connect(mapStateToProps)(Cart);