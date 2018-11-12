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

class orderPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            showToptips: false,
            jenis: 'autisme',
            payments: 'cod'
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
        console.log(this.state)
    }

    render() {

        if(this.props.order.length === 0) {
            return (
                <div>
                    <p>Maaf kamu belum order silahkan kembali lagi</p>
                    <ButtonArea>
                        <a href="/">    
                            <Button
                                    //button to display toptips
                                    onClick={this.onSubmit} component={Link} to="/">
                                    Kembali ke halaman awals
                            </Button>
                        </a>
                     </ButtonArea>
                    
                </div>
            )
        }

        const date = this.state.tanggal
        const invoice = `INV/${this.state.jenis}/${date}/`
        const urlWa = `https://api.whatsapp.com/send?phone=6281519874700&text=Halo%20saya%20mau%20berlangganan%20dengan%20invoice%20ini%20${invoice}`
        return(
            <div>
            <CellsTitle><h2>Konfirmasi Berlangganan</h2></CellsTitle>
            <CellsTitle>Jenis Langganan</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                        Langganan
                        </CellBody>
                        <CellFooter>
                        {this.props.order.map(key => {
                            return key.name
                        })}
                        </CellFooter>
                    </Cell>
                </Cells>
                <CellsTitle>JenisPenyakit</CellsTitle>
                <Form>
                    <FormCell select>
                        <CellBody>
                            <Select name="jenis" ref={this.inputPenyakit} onChange={this.onChange}>
                                <option value="autisme">Autisme</option>
                                <option value="diabetes">Diabetes</option>
                                <option value="hipertensi">Hipertensi</option>
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
                        {this.props.order.map(key => {
                            return key.harga
                        })}
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
                            <Checkbox name="checkbox2" value="2"/>
                        </CellHeader>
                        <CellBody>Kacang</CellBody>
                    </FormCell>
                    <FormCell checkbox>
                        <CellHeader>
                            <Checkbox name="checkbox2" value="2"/>
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
                                    onClick={this.onSubmit}>
                                    Berlangganan
                            </Button>
                    </a>
            </ButtonArea>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.Order,
    };
  };
  
export default connect(mapStateToProps, null)(orderPage);
  