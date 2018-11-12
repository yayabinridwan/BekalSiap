import React from 'react'
import AddFishForm from './addFishForm';
import EditFishForm from './editFishForm';
import Login from './login';
import firebase from 'firebase'
import base, { firebaseApp } from '../js/firebase'

class Inventory extends React.Component {

    authHandler = async (authData) => {
        const store = await base.fetch(this.props.storeId, {context: this})
        console.log(this.props.storeId)
        if(!store.owner) {
            await base.post(`${this.props.storId}/owner`, {
                data: authData.user.uid
            })
        }
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user
        })
        console.log(store)
        console.log(authData)
    }

    auth = provider => {
        const authProvider = new firebase.auth.FacebookAuthProvider();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
    }

    render() {
       
        return (
            <div>
                <h2>inventory</h2>
                {Object.keys(this.props.fishes).map(key => 
                    <EditFishForm 
                        key={key} 
                        index={key}
                        details={this.props.fishes[key]}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                        />)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.load}> Load Sample</button>
            </div>
        )
    }
}

export default Inventory