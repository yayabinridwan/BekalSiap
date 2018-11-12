import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class NestedGrid extends Component {
   render() {
    
    return(
      <div className="containerGrid" id="kategori">
        <div className="gridItem">
          <Link to={{pathname: '/langganan/autisme'}}>
            <div className="item" >
              <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541165438/autism.png" alt="autisme" className="menuItem"/>
              <p>Autisme</p>
            </div>
          </Link>
          <Link to={{pathname: '/langganan/diabetes'}}>
            <div className="item" id="diabetes">
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541165438/sugar-blood-level.png" alt="diabetes" className="menuItem"/>
              <p>Diabetes</p>
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

