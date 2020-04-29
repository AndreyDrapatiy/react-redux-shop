import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Item from '../../components/Item/Item'
import {connect} from 'react-redux'
import * as actionCreator from "../../store/actions/actions";
import Grid from '@material-ui/core/Grid';

class ItemsList extends Component {

    componentDidMount() {
        this.props.loadItems()
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
                    this.props.itms.map(item =>
                        <Grid item xs={4}>
                        <Item
                            title={item.title}
                            date={item.date}
                            available={item.available}
                            price={item.price}
                            key={item.id}
                            index={item.id}
                            description={item.description}
                            img={item.img}
                        /></Grid>) :
                    <CircularProgress/>
                }

                <h1>{this.props.loadFailed}</h1>
            </Grid>
        );
    }
}




const mapStateToProps = state => {
    return {
        itms: state.items,
        isLoaded: state.isLoaded,
        loadFailed: state.failedLoad
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadItems: () => dispatch(actionCreator.load_items()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)

