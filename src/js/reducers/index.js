import { combineReducers } from 'redux';
import { itemsHasErrored, itemsIsLoading, data, Order, detail, diet, menu } from './items';

export default combineReducers({
    data,
    itemsHasErrored,
    itemsIsLoading,
    Order,
    detail,
    diet
});
