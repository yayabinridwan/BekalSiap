export const FETCH_DATA = "FETCH_DATA"
export const ADD_ORDER = "ADD_ORDER"
export const DETAIL_PRODUK = "DETAIL_PRODUK"
export const DETAIL_DIET = "DETAIL_DIET"
export const FETCH_MENU = "FETCH_MENU"

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}


export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function JSONData(data) {
    return {
        type: FETCH_DATA,
        data
    };
}


export function addOrder(order) {
    return {
        type: ADD_ORDER,
        order
    };
}

export function detailProduk(detail) {
    return {
        type: DETAIL_PRODUK,
        detail
    };
}

export function detailDiet(detail) {
    return {
        type: DETAIL_DIET,
        detail
    };
}