import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {detailProduk} from '../js/actions/index'


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  const {pic, name, description, harga} = props.details
  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={pic}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {description.slice(0, 50) + `-`}
          </Typography>
          <hr />
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={{pathname: '/nutrition'}}>
        <Button className="buttonAction" size="small" color="primary" onClick={() => props.detailProduk(props.details)}>
          Lihat Detail
        </Button>
      </Link>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(null, {detailProduk})(withStyles(styles)(ImgMediaCard));
