import React from 'react'
import CheckboxListSecondary from './OrderList'


class OrderMenu extends React.Component {
    
    render() {
        return (
            <div key={this.props.key} className="menu">
                <CheckboxListSecondary
                    order={this.props.order}
                />
            </div>
        )
    }
}

export default OrderMenu