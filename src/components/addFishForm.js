import React from 'react'

class AddFishForm extends React.Component {
    inputName = React.createRef()
    inputPrice = React.createRef()
    inputStatus = React.createRef()
    inputDesc = React.createRef()
    inputImg = React.createRef()

    
    createFish = event => {
        event.preventDefault();
        const fish = {
            Name: this.inputName.value.value,
            Price: parseFloat(this.inputPrice.value.value),
            Status: this.inputStatus.value.value,
            Desc: this.inputDesc.value.value,
            Img : this.inputImg.value.value
        }

        console.log(fish)
        this.props.addFish(fish)
        event.currentTarget.reset();
    }


    render() {
        return (
           <form className="fish-edit" onSubmit={this.createFish}> 
                <input name="name" ref={this.inputName}  type="text" placeholder="name" />
                <input name="price" ref={this.inputPrice} type="text" placeholder="name" />
                <select name="stat" ref={this.inputStatus}>
                    <option value="avaliable"> fresh </option>
                    <option value="unavaliable"> soldout</option>
                </select>
                <textarea name="desc"  ref={this.inputDesc} id="" cols="30" placeholder="desc" rows="10"></textarea>
                <input name="img"  ref={this.inputImg} type="text" placeholder="name" />
                <button type="submit">+ Add fish</button>
           </form>
        )
    }
}

export default AddFishForm