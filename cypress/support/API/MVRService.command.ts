import { URL_MVRSERVICE } from "../const";

export const MVRRequest = function (body) {
    return cy.POST(URL_MVRSERVICE, body);
};
declare global {
    namespace Cypress {
        interface Chainable {
            MVRRequestAPI: typeof MVRRequest;
        }
    }
}
