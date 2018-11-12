import React from 'react'
import OrderMenu from './OrderMenu';


class Order extends React.Component {
    render() {
        const total = this.props.order.reduce((prevTotal, currentTotal) =>
          prevTotal + currentTotal.harga,
        0)
        return (
          <div >
            <h2>Order</h2>  
            {this.props.order.map((key, index) => {
              return <OrderMenu order={key} index={index} total={total}/>
            })}
            <p>{total}</p>
          </div>
        )
    }
}

export default Order