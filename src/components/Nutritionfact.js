import {NutritionLabel} from 'react-fda-nutrition-facts'
import React, { Component } from 'react'
import {connect} from 'react-redux'



class NutritionFact extends Component {
    render() {
        console.log('props', this.props.order)
        const data = this.props.order.map(key => {
            const {name, pic, description, harga} = key
            return {name, pic, description, harga}
        })
        console.log(data[0].name)
        return(
            <div>
              <img src={this.props.order.pic} alt="gambar"/>

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
  