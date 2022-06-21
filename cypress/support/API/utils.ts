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
    temp = temp.concat(parameters);
    return { 1: { "lst": temp } }
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
        }
    }
}
