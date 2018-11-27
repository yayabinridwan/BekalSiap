import { FETCH_DATA, ADD_ORDER, DETAIL_PRODUK, DETAIL_DIET, FETCH_MENU } from "../actions/index";
import dataJSON from '../../data/menu.json'
import menuJSON from '../../data/burjo.json'
export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

export function data(state = dataJSON, action){
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, dataJSON, menuJSON)
    default:
      return state;
  }
};

export function Order(state = [], action){
    switch (action.type) {
      case ADD_ORDER:
         return Object.assign({}, {...action.order})
      default:
        return state;
    }
  };

export function detail(state = [], action){
    switch (action.type) {
      case DETAIL_PRODUK:
        return Object.assign({}, {...action.detail})
      default:
        return state;
    }
  };

export function diet(state = [], action){
    switch (action.type) {
      case DETAIL_DIET:
        return Object.assign({}, {...action.detail})
      default:
        return state;
    }
  };
