import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import{Form, FormGroup, Label, Input, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from 'react-router-dom'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import QRcode from 'qrcode.react'

const JenisDiet = [
  'Autisme',
  'Diabetes',
  'Cancer',
  'Hipertensi',
  'Vegetarian',
  'Low Carbo',
  'High Protein',
  'Pescetarian'
]

class Qrcode extends Component {
    constructor(props){
      super(props)
      this.state = {
        delay: 100,
        result: 'No result',
        link: null,
        modal: false
      }
      this.handleScan = this.handleScan.bind(this)
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    handleScan(data){
      this.setState({
        result: data,
        link: data
      })
    }
    
    handleClick = () => {
      this.setState({
        link: 'lombok-ijo'
      })
    }
    handleError(err){
      console.error(err)
    }

    render(){
      const previewStyle = {
        height: 240,
        width: 320,
      }
      const linkTo = `/restaurant/${this.state.link}`
      if(this.state.link !== null) {
        return <Redirect to={linkTo} />
      } 
        return(
          <div className="qrCode">
            <h4 class="font-weight-bold">Scan menu untuk lihat Nutrition Fact</h4>
            <div className="qrcode">
              <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                />
            </div>
            <p>{this.state.result}</p>
            <button onClick={this.handleClick}>Example</button>
            <br />
            <Button color="danger" onClick={this.toggle}>Klik untuk contoh qrcode</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Contoh QRcode</ModalHeader>
              <ModalBody>
                <QRcode value="lombok-ijo"/>
              </ModalBody>
            </Modal>
          </div>
        )
    }
  }

export default Qrcode;

/*
<div className="Rekomendasi">
<h5 class="font-weight-bold">Rekomendasi Menu Khusus di Sekitar Anda</h5>
<Form>
<FormGroup>
  <Label for="exampleSelect">Pilih Diet untuk</Label>
  <Input type="select" name="select" id="exampleSelect">
      {
        JenisDiet.map((key, i) => {
          return <option key={i}>{key}</option>
        })
      }
  </Input>
  <Label for="exampleSelect">Lokasi</Label>
  <Input type="select" name="select" id="exampleSelect">
      <option>Semarang</option>
  </Input>
</FormGroup>
<Button color="primary">Submit</Button>
</Form>
</div>*/