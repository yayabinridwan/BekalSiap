import React from 'react'
import CardList from './ListCard'


class Fish extends React.Component {
    
    handleClick = () => {
        this.props.addOrder(this.props.index)
    }

    render() {
        return (
            <div key={this.props.key} className="paket">
                <CardList
                    paket={this.props.paket}
                    addOrder={this.props.addOrder}
                />
            </div>
        )
    }
}

export default Fish