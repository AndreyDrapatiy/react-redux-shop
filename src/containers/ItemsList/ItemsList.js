import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Item from '../../components/Item/Item'
import {connect} from 'react-redux'
import * as actions from "../../store/actions/";
import Grid from '@material-ui/core/Grid';

class ItemsList extends Component {

    componentWillMount() {
        this.props.loadItems();
    }

    render() {

        return (
            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                {
                    this.props.isLoaded ?
                    this.props.loadedItems.map((item, index) =>
                        <Grid key={index} item xs={4}>
                        <Item
                            title={item.title}
                            date={item.date}
                            available={item.available}
                            price={item.price}
                            key={index}
                            index={item.id}
                            description={item.description}
                            img={item.img}

                        /></Grid>) :
                    <CircularProgress/>
                }

            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        loadedItems: state.items,
        isLoaded: state.isLoaded,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadItems: () => dispatch(actions.load_items()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)

