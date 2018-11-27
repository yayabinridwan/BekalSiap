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
                <div className="Hubungi">
                    <h4>Hubungi kami</h4>
                    <p>6289520851061 (Rizky)</p>
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