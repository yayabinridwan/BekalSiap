import React, { Component } from 'react'

class WhyUs extends Component {
    render() {
        return(
            <div className="whyus">
                <div className="col">
                        <div className="item1">
                            <h2 className="titleText">Cara Kerja</h2>
                        </div>
                </div>
                <div className="content">
                    <div className="col">
                        <div className="item1">
                        <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1543328961/qr-code_1.png" alt="diabetes" width="100px" height="100%"/>
                            <p className="keterangan">Scan QRCode yang ada di Menu</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="item1">
                        <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1543328961/nutrition.png" alt="diabetes" width="100px" height="100%"/>
                            <p className="keterangan">Lihat Informasi Nutrition fact yang ada di Menu</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="item1">
                        <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541549052/nutritionist.png" alt="diabetes" width="100px" height="100%"/>
                            <p className="keterangan">Sesuaikan menu yang ada dengan kebutuhan diet anda</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyUs
