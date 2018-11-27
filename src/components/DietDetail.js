import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {detailProduk} from '../js/actions/index'
import {Button, ButtonArea} from 'react-weui'


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
  const {pic, name, description} = props.desc.details
  console.log('dietDetail', props.desc.details)
  
  if(props.desc === undefined) {
    return (
      <div>
                    <p>Maaf kamu belum order silahkan kembali lagi</p>
                    <ButtonArea>
                        <a href="/">    
                            <Button
                                    //button to display topsssssstips
                                    onClick={this.onSubmit} component={Link} to="/">
                                    Kembali ke halaman awal
                            </Button>
                        </a>
                     </ButtonArea>
                    
        </div>
    )
  }

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
            {description}
          </Typography>
          <hr />
        </CardContent>
      </CardActionArea>
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

export default connect(mapStateToProps, {detailProduk})(withStyles(styles)(ImgMediaCard));
