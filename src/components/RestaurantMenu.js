import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import {NutritionLabel} from 'react-fda-nutrition-facts'


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#851480',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});




function RestaurantMenu(props) {
  const { classes } = props;
  console.log('propsQ',props)
  const {menu} = props.details
  const {ayam, ikan} = menu
  return (
  <div>
    <Paper className={classes.root}>
     {ayam.map((row, i) => {
         return(
        <div>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <CustomTableCell>Menu</CustomTableCell>
                <CustomTableCell numeric>Harga</CustomTableCell>
                <CustomTableCell>Keterangan Diet</CustomTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow className={classes.row} key={row.id}>
                    <CustomTableCell component="th" scope="row">
                    {row.name}
                    </CustomTableCell>
                    <CustomTableCell numeric>{row.harga}</CustomTableCell>
                    <CustomTableCell>
                    {row.nutrition.recipe.dietLabels}
                    </CustomTableCell>
                </TableRow>
            </TableBody>
        </Table>
        <NutritionLabel
            servingSize={'1 dish (228g)'}
            servingsPerContainer={1}
            calories={row.nutrition.recipe.calories}
            totalFat={row.nutrition.recipe.totalNutrients.FAT.quantity}
            saturatedFat={row.nutrition.recipe.totalNutrients.FASAT.quantity}
            transFat={row.nutrition.recipe.totalNutrients.FAMS.quantity}
            cholesterol={row.nutrition.recipe.totalNutrients.FAPU.quantity}
            sodium={row.nutrition.recipe.totalNutrients.NA.quantity}
            totalCarbs={row.nutrition.recipe.totalNutrients.CHOCDF.quantity}
            dietaryFiber={row.nutrition.recipe.totalNutrients.FIBTG.quantity}
            sugars={row.nutrition.recipe.totalNutrients.SUGAR.quantity}
            protein={row.nutrition.recipe.totalNutrients.PROCNT.quantity}
            vitaminA={0}
            vitaminC={row.nutrition.recipe.totalNutrients.VITC.quantity}
            calcium={row.nutrition.recipe.totalNutrients.CA.quantity}
            iron={row.nutrition.recipe.totalNutrients.FE.quantity}
            />
        </div>      
         )
     })}
    </Paper>
  </div>
  );
}

RestaurantMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantMenu);
