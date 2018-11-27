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
import {connect} from 'react-redux'
import {addOrder} from '../js/actions/index'
import {Link} from 'react-router-dom'

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
  const {pic, name, harga} = props.paket
  
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
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {name}
          </Typography>
          <hr />
          <Typography component="p">
            Rp. {harga.toLocaleString()}
          </Typography>
          <Typography component="p">
            Fasilitas
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <h5>Hello</h5>
      <Link to={{pathname: '/order'}}>
         <button classNmae="buttonACtion" onClick={() =>  props.addOrder(props.paket)}>Berlangganan Sekarang</button>
      </Link>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  return {
      data: state.data,
  };
};

export default connect(mapStateToProps, {addOrder})(withStyles(styles)(ImgMediaCard));
