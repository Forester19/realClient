
export async function LoginQueryGET(user) {
    let paramsToFetch = {method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user)};
    let createRequest = new Request('http://localhost:8080/log-in', paramsToFetch);
    document.body.classList.add('wait-for-login-response');
    return await fetch(createRequest).then(function (response) {
        document.body.classList.remove('wait-for-login-response');
        return response.json();
    });
}