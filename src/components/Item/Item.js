import React from 'react';
import {Link} from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ToCartModal from "../../containers/Modal/ToCartModal";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '48%',
        marginBottom: 30
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },

}));

const Item = (props) => {
    const classes = useStyles();

    return (

        <Card className={classes.root}>

            <Link to={'/single/' + props.index}>
                <CardHeader
                    title={props.title}
                    subheader={props.date}
                />
            </Link>

            <CardMedia
                className={classes.media}
                image={props.img}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                <Box p={1}/>
                <Typography variant="h5" color="textPrimary" component="h3">
                    $ {props.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                {
                    props.available ?
                        <ToCartModal item={props}/> :
                        <Typography variant="body1" color="textPrimary" component="p">
                            Unavailable Now
                        </Typography>
                }
            </CardActions>
        </Card>
    );
};

export default Item