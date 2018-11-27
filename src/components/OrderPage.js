import React, {Component} from 'react';
import {connect } from 'react-redux'
import { Button, Cells,
    CellsTitle,
    Cell,
    CellHeader,
    CellBody,
    CellFooter, 
    FormCell, 
    Label, 
    Input, 
    Form, 
    Checkbox, 
    TextArea,
    Select,
    ButtonArea
} from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import {Link} from 'react-router-dom'
import {addOrder} from '../js/actions/index'

class orderPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            showToptips: false,
            jenis: 'autisme',
            payments: 'cod',
            harga: this.props.order.harga,
            noOrder: 0
        }
    }

    inputPenyakit = React.createRef()

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleInputChange = (event) => {
        console.log(event.target.name)
        let target = event.target
        let name = target.name
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
                [name]: value
          })
       /* const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });*/
      }

    onSubmit = (e) => {
        this.props.addOrder(this.state)
    }

    render() {
        console.log(this.props.order.length)
        if(this.props.order.length === 0) {
            return (
                <div>
                    <p>Maaf kamu belum order silahkan kembali lagi</p>
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
            const date = this.state.tanggal
            const noOrder = this.state.noOrder + 1
            const invoice = `INV/${this.state.jenis}/${date}/${noOrder}`
            const urlWa = `https://api.whatsapp.com/send?phone=6289520851061&text=Halo%20saya%20mau%20berlangganan%20dengan%20invoice%20ini%20${invoice}`
            return(
                <div>
                <CellsTitle><h2>Konfirmasi Berlangganan</h2></CellsTitle>
                <CellsTitle>Jenis Langganan</CellsTitle>
                 <Cell>
                            <CellBody>
                                Jenis Langganan
                            </CellBody>
                            <CellFooter>
                            {this.props.order.name}
                            </CellFooter>
                    </Cell>
                    <CellsTitle>Jenis Penyakit</CellsTitle>
                    <Form>
                        <FormCell select>
                            <CellBody>
                                <Select name="jenis" ref={this.inputPenyakit} defaultValue={this.props.details.id} onChange={this.onChange}>
                                    <option value="diet-gfcf">Diet Gluten Free Casein Free</option>
                                    <option value="diet-keto">Diet Ketosis</option>
                                    <option value="diet-low-fat">Diet Rendah Lemak</option>
                                    <option value="diet-carbo">Diet Carbo</option>
                                    <option value="diet-mayo">Diet Mayo</option>
                                    <option value="diet-paleo">Diet Paleo</option>
                                    <option value="diet-vegan">Diet Vegan</option>
                                    <option value="diet-pescetarian">Diet Pescetarian</option>
                                </Select>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <CellsTitle>Harga Berlangganan</CellsTitle>
                    <Cells>
                        <Cell>
                            <CellBody>
                                Harga Berlangganan
                            </CellBody>
                            <CellFooter>
                            {this.state.harga}
                            </CellFooter>
                        </Cell>
                    </Cells>
                    <Cells>
                        <Cell>
                            <CellBody>
                                <Label>Pilih tanggal berlangganan</Label>
                            </CellBody>
                            <CellFooter>
                                <p>Pilih</p>
                                <Input type="date" name="tanggal" defaultValue="" onChange={this.onChange}/>
                            </CellFooter>
                        </Cell>
                    </Cells>
                    <CellsTitle>Alergi Makanan</CellsTitle>
                    <Form checkbox onChange={this.handleInputChange}>
                        <FormCell checkbox>
                            <CellHeader>
                                <Checkbox name="checkbox1" value="1"/>
                            </CellHeader>
                            <CellBody>Seafood</CellBody>
                        </FormCell>
                        <FormCell checkbox>
                            <CellHeader>
                                <Checkbox name="checkbox2" value="2"/>
                            </CellHeader>
                            <CellBody>Ayam</CellBody>
                        </FormCell>
                        <FormCell checkbox>
                            <CellHeader>
                                <Checkbox name="checkbox3" value="3"/>
                            </CellHeader>
                            <CellBody>Kacang</CellBody>
                        </FormCell>
                        <FormCell checkbox>
                            <CellHeader>
                                <Checkbox name="checkbox4" value="4"/>
                            </CellHeader>
                            <CellBody>Telur</CellBody>
                        </FormCell>
                    </Form>
                    <CellsTitle>Metode Pembayaran</CellsTitle>
                    <Form>
                        <FormCell select>
                            <CellBody>
                                <Select name="payments" defaultValue="cod" onChange={this.onChange}>
                                    <option value="bank">Transfer Bank</option>
                                    <option value="cod">COD</option>
                                    <option value="boost">Boost</option>
                                </Select>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <CellsTitle>Keterangan Tambahan</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <TextArea placeholder="Enter your comments" name='keterangan' rows="3" maxlength="200" onChange={this.onChange}></TextArea>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <ButtonArea>
                        <a href={urlWa}>
                                 <Button
                                        //button to display toptips
                                        onClick={this.onSubmit} onSubmit={this.onSubmit}>
                                        Berlangganan
                                </Button>
                        </a>
                </ButtonArea>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.Order,
        details: state.detail
    };
  };
  
export default connect(mapStateToProps, {addOrder})(orderPage);
  