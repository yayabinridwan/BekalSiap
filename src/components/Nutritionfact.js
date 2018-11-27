import {NutritionLabel} from 'react-fda-nutrition-facts'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import SimpleApp from './SimpleApp'


class NutritionFact extends Component {
    render() {/*
        console.log('props', this.props.order)
        const data = this.props.order.map(key => {
            const {name, pic, description, harga} = key
            return {name, pic, description, harga}
        })*/
        return(
            <div>
              <SimpleApp />
              <NutritionLabel
                servingSize={'1 cup (228g)'}
                servingsPerContainer={2}
                calories={260}
                totalFat={13}
                saturatedFat={5}
                transFat={2}
                cholesterol={30}
                sodium={660}
                totalCarbs={31}
                dietaryFiber={0}
                sugars={5}
                protein={5}
                vitaminA={4}
                vitaminC={2}
                calcium={15}
                iron={4}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.Order,
    };
  };
  
export default connect(mapStateToProps, null)(NutritionFact);
  