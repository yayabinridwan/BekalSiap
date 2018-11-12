import React from 'react'

class EditFishForm extends React.Component{

    handleChange = event => {
        console.log(event.currentTarget.value)

        const updatedFish = {
            ...this.props.details, 
            [event.currentTarget.name]: event.currentTarget.value
        }
        
        this.props.updateFish(this.props.index, updatedFish)
    }

    render() {
        const {image, name, desc, price, status} = this.props.details
        return (
            <div className="fish-edit">
                <input name="name"   type="text" placeholder="name" onChange={this.handleChange} value={name}/>
                <input name="price"  type="text" placeholder="name" onChange={this.handleChange} value={price} />
                <select name="status" value={status}>
                    <option onChange={this.handleChange} value="avaliable"> fresh </option>
                    <option onChange={this.handleChange} value="unavaliable"> soldout</option>
                </select>
                <textarea name="desc"  cols="30" placeholder="desc" rows="10" onChange={this.handleChange} value={desc}></textarea>
                <input name="image"  type="text" placeholder="name" onChange={this.handleChange} value={image}/>
                <button onClick={() => this.props.deleteFish(this.props.index) }>Remove fish</button>
            </div>
        )
    }
}

export default EditFishForm