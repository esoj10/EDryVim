<<<<<<< HEAD
=======
export const GET = function (_url: any, _body: any = "", _heardes: any = "") {
    return REQUEST(_url, "GET", _heardes, _body)
}
export const POST = function (_url: any, _body: any = "", _heardes: any = "") {
    return REQUEST(_url, "POST", _heardes, _body)
}
const REQUEST = function (_url: any, _method: any, _heardes: any, _body: any) {
    let basicHeaders = { "content-type": "application/json" };
    console.log(_body);
    console.log(_url);
    return cy.request({
        url: _url,
        method: _method,
        headers: _heardes != "" ? _heardes : basicHeaders,
        body: _body
    })
}

>>>>>>> 98cdbff85bc707f2f8626211a7c40aa8ac6382ed
export const bodyRequest = function (
    methodName: string,
    parameters: any
) {
    return [1, methodName, 1, 1, parameters]
}

export const lst = function (
    typeLst: string,
    parameters: Array<any>
) {
    var temp = [typeLst, parameters.length];
    return { 1: { "lst": temp.concat(parameters) } }
}

export const rec = function (
    parameters: any
) {
    return { 1: { "rec": { parameters } } }
}

declare global {
    namespace Cypress {
        interface Chainable {
            bodyRequestAPI: typeof bodyRequest;
            lstAPI: typeof lst;
            recAPI: typeof rec;
<<<<<<< HEAD
=======
            POST: typeof POST;
            GET: typeof GET;

>>>>>>> 98cdbff85bc707f2f8626211a7c40aa8ac6382ed
        }
    }
}
