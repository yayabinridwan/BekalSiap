import React, { Component } from 'react'

class TentangKami extends Component {
    render() {
        return(
            <div className="tentangkami">
                <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541399651/logo-Bekal.png" alt="logo" width="200px" height="100%"/>
                <p>BekalSiap adalah Platform Informasi Makanan khusus untuk anak berkebutuhan khusus dan pasien dengan penyakit yang membutuhkan diet khusus</p>
                <div>
                    <h5>Temukan kami di</h5>
                    <a href="http://s.id/BekalSiap"><img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541549331/LINE__typeA.png" alt="line@" width="100px" height="100%"/></a>
                </div>
            </div>
        )
    }
}

export default TentangKami