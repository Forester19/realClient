export const GetProductsAction  = (listOfProducts) => {
    return  {
        type: 'ADD_PRODUCTS',
        payload: {
            productsInfo: listOfProducts
        }
    };
};