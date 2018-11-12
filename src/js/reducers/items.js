import { FETCH_DATA, ADD_ORDER } from "../actions/index";
import dataJSON from '../../data/menu.json'
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
      return [...state, state]
    default:
      return state;
  }
};

export function Order(state = [], action){
    switch (action.type) {
      case ADD_ORDER:
        const order = [...state, {...action.order}]
        return order
      default:
        return state;
    }
  };