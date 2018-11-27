import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class NestedGrid extends Component {
   render() {
    
    return(
      <div className="containerGrid" id="kategori">
        <h3>Penyakit yang diderita</h3>
        <div className="gridItem">
          <Link to={{pathname: '/langganan/diet-gfcf'}}>
            <div className="item" >
              <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1542363178/Diet_gfcf.png" alt="autisme" className="menuItem"/>
              <p>Diet GFCF</p>
            </div>
          </Link>
          <Link to={{pathname: '/langganan/diet-ketosis'}}>
            <div className="item" id="diabetes">
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1542363182/Diet_keto.png" alt="diabetes" className="menuItem"/>
              <p>Diet Keto-Fasting</p>
            </div>
          </Link>
          <Link to={{pathname: '/langganan/stroke'}}>
            <div className="item" id="stroke">
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541165437/g914.png" alt="stroke" className="menuItem"/>
              <p>Stroke</p>
            </div>
          </Link>
          <Link to={{pathname: '/langganan/gagalginjal'}}>
            <div className="item" id="gagalGinjal">
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541165438/kidneys.png" alt="gagalGinjal" className="menuItem"/>
              <p>Gagal Ginjal</p>
            </div>
          </Link>
          <Link to={{pathname: '/langganan/hipertensi'}}>
            <div className="item" id="hipertensi">
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541165438/heartbeat.png" alt="hipertensi" className="menuItem"/>
              <p>Hipertensi</p>
            </div>
          </Link>
          <Link to={{pathname: '/langganan/vegetarian'}}>
            <div className="item" id="vegetarian">
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541165438/vegetables.png" alt="vegetarian" className="menuItem"/>
              <p>Vegetarian</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

curl "https://api.edamam.com/api/nutrition-data?app_id=${b9fb9701}&app_key=${393d00998794fd861dbedc9f38cac2d2 	}&ingr=1%20large%20apple"