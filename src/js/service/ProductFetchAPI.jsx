
export async function ProductQueryGET() {
    let paramsToFetch = {method:'GET',
        headers:{'Content-Type':'application/json'}};
    let createRequest = new Request('http://localhost:8080/products', paramsToFetch);
    let products = await fetch(createRequest).then(response => response.json());
    console.log('ProductQueryGET ' + JSON.stringify(products));
    return products;
}

export const ProductQueryPOST = async (product) => {
    let paramsToFetch = {method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(product)};
    let createRequest = new Request('http://localhost:8080/products', paramsToFetch);
    return await fetch(createRequest).then(response => response.json());

};
export const ProductQueryPUT = () => async () => {
    /*
    *var json = fetch('/products/3',
    * {method:'PUT',headers:{'Content-Type':'application/json'},
    * body:JSON.stringify({"id":0,"title":"updated","description":"wefwf","price":100})}).
    * then(result => result.json()).
    * then(data => console.log(data));
    * */

    let paramsToFetch = {method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({"id":0,"title":"new1","description":"wefwf","price":100})};
    let createRequest = new Request('http://localhost:8080/products', paramsToFetch);
    await fetch(createRequest).then(response => response.json()).then(console.log);

};
export const ProductQueryDELETE = () => async () => {
    /*
    *var json = fetch('/products/3',
    * {method:'DELETE',headers:{'Content-Type':'application/json'},
     * body:JSON.stringify({"id":3,"title":"updated","description":"wefwf","price":100})}).
     * then(result => result.json()).
     * then(data => console.log(data));
    * */

    let paramsToFetch = {method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({"id":0,"title":"new1","description":"wefwf","price":100})};
    let createRequest = new Request('http://localhost:8080/products', paramsToFetch);
    await fetch(createRequest).then(response => response.json()).then(console.log);

};