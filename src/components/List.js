import React, { Component } from 'react'
import {connect} from 'react-redux'
import {detailDiet} from '../js/actions/index'
import {Link} from 'react-router-dom'

class ListDiet extends Component {
    render() {
        const {pic, name, description} = this.props.details
        const id = this.props.id
        const detail = {
            details: this.props.details,
            id: id
        }
        console.log('ini detail', detail)
        return (
            <div className="listCard">
                <div className="logo">
                    <img src={pic} className="avatar"/>
                </div>
                <div className="row1">
                    <h5>{name}</h5>
                    <p className="description">{description.slice(0, 120)}....</p>
                    <Link to={{pathname: `/langganan/${this.props.id}`}}> 
                        <button onClick={() => this.props.detailDiet(detail)}>Read More</button>
                    </Link>
                </div>
            </div>
        )
    }
}


class List extends Component {
    render() {
        const {diet} = this.props.data.data.penyakit
        return(
            <div className="dietOption">
            <h2>Informasi Pilihan Diet</h2>
            <div className="col8">
                {
                    Object.keys(diet).map((key, index) => {
                    return <ListDiet key={key} id={key} detailDiet={this.props.detailDiet} details={diet[key]}/>
                    })
                }
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

export default connect(mapStateToProps, {detailDiet})(List);

