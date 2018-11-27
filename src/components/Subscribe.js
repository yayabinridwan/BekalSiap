import React, { Component } from 'react'
import SimpleAppBar from './SimpleAppBar';
import Slider from './Slider'
import BerbagaiMenu from './BerbagaiMenu'
import SimpleBottomNavigation from './SimpleBottomNavigation'
import Berlangganan from './Berlangganan';
import {connect} from 'react-redux'
import ImgMediaCard from './DietDetail'
import {Button, ButtonArea}from 'react-weui'
import {Link} from 'react-router-dom'



class Subscribe extends Component {
    render() {
        if (this.props.diet.length === 0) {
            return (
                <div>
                <p>Maaf kamu belum memilih jenis diet</p>
                <ButtonArea>
                    <a href="/">    
                        <Button
                                //button to display toptips
                                onClick={this.onSubmit} component={Link} to="/">
                                Kembali ke halaman awal
                        </Button>
                    </a>
                 </ButtonArea>
                
            </div>
            )
        } else {
            return(
            <div>
                <SimpleAppBar penyakit={this.props.match.params.penyakit}/>
                <div className="diet">
                    <ImgMediaCard 
                        desc={this.props.diet}
                        addOrder={this.props.addOrder}
                    />
                </div>
                <BerbagaiMenu penyakit={this.props.match.params.penyakit}/>
                <div className="langganan">
                    <Berlangganan penyakit={this.props.match.params.penyakit}/>
                </div>
                <SimpleBottomNavigation />
            </div>
        )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        diet: state.diet
    };
  };
  
export default connect(mapStateToProps, null)(Subscribe);