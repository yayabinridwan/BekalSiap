import React from 'react'
import ImgMediaCard from './CardList'


class Fish extends React.Component {
    
    handleClick = () => {
        this.props.addOrder(this.props.index)
    }

    render() {
        return (
            <div key={this.props.key} className="menu">
                <ImgMediaCard 
                    details={this.props.details}
                    addOrder={this.props.addOrder}
                />
            </div>
        )
    }
}

export default Fish