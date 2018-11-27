import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import ProductList from './ProductList'
import NotFound from './notFound'
import Subscribe from './Subscribe'
import OrderPage from './OrderPage'
import { Provider } from 'react-redux';
import Store from '../js/store/index';
import NutritionFact from './Nutritionfact'
import RedirectPage from './RedirectPage'
import RestaurantPage from './RestaurantPage'

const store = Store();
store.subscribe(() => console.log('store', store.getState()));

const Router = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch> 
                <Route exact path="/" component={ProductList} />
                <Route path="/langganan/:penyakit" component={Subscribe}/>
                <Route path="/restaurant/:name" component={RestaurantPage}/>
                <Route path="/nutrition" component={NutritionFact}/>
                <Route path="/order" component={OrderPage} />
                <Route path="/redirect" component={RedirectPage}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
        )
      

export default Router
