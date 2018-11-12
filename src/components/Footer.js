import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return(
            <div className="Footer">
                <div className="logo">
                      <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541400100/g1069.png" alt="logo" width="150px" height="100%"/>
                      <h5>Didukung oleh:</h5>
                      <img src="https://web.kominfo.go.id/sites/default/files/besok-kominfo-luncurkan-gerakan-nasional-1000-technopreneur-aPWogP7hJG.jpg" alt="1000s" width="100px" height="100%"/>
                </div>
                <div className="CaraBayar">
                    <h4>Cara Bayar</h4>
                    <img src="http://cdn2.tstatic.net/sumsel/foto/bank/images/lowongan-bni-syariah_20180711_095816.jpg" alt="carabayar" width="200px" height="100%"/>
                </div>
                <div className="Kategori">
                   <h4>Kategori</h4>
                    <ul className="kategori">
                        <div className="left">
                            <li>Home</li>
                            <li>Tentang kami</li>
                            <li>Berlangganan</li>
                            <li>Autisme</li>
                            <li>Diabetes</li>
                        </div>
                        <div className="right">
                            <li>Stroke</li>
                            <li>Gagal Ginjal</li>
                            <li>Hipertensi</li>
                            <li>Vegetarian</li>
                        </div>
                    </ul>
                </div>
                <div className="Hubungi">
                    <h4>Hubungi kami</h4>
                    <p>081519874700 (yaya)</p>
                </div>
                <hr/>
                <div className="copyright">
                     <h5>Copyright 2018 | BekalSiap! </h5>
                </div>
            </div>
        )
    }
}

export default Footer