import React from 'react'
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    inputStore = React.createRef()

    goToStore = event => {
        event.preventDefault()
        console.log('Going to store');
        const storeName = this.inputStore.value.value
        console.log(this.inputStore.value.value)
        this.props.history.push(`/store/${storeName}`)
        
    }
        

    render() {
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Welcome</h2>
                <input type="text" ref={this.inputStore} required placeholder="store name"defaultValue={getFunName()} name="storeName" id="storeName"/>
                <button type="submit"> Go to Store</button>
            </form>
        )
    }
}

export default StorePicker