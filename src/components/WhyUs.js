import React, { Component } from 'react'

class WhyUs extends Component {
    render() {
        return(
            <div className="whyus">
                <div className="col">
                        <div className="item1">
                            <h2 className="titleText">Kenapa Harus Berlangganan</h2>
                        </div>
                </div>
                <div className="col">
                    <div className="item1">
                    <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541549052/wallet.png" alt="diabetes" width="48px" height="100%"/>
                        <p className="keterangan">Harga Terjangkau</p>
                    </div>
                </div>
                <div className="col">
                    <div className="item1">
                    <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541549052/protection.png" alt="diabetes" width="48px" height="100%"/>
                        <p className="keterangan">Memiliki Quality Sistem Jaminan Mutu Terpadu dan Keamanan Pangan</p>
                    </div>
                </div>
                <div className="col">
                    <div className="item1">
                    <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541549052/nutritionist.png" alt="diabetes" width="48px" height="100%"/>
                        <p className="keterangan">Direkomendasikan oleh ahli gizi</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyUs
