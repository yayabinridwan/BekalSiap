import { combineReducers } from 'redux';
import { itemsHasErrored, itemsIsLoading, data, Order } from './items';

export default combineReducers({
    data,
    itemsHasErrored,
    itemsIsLoading,
    Order
});
