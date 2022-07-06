import { URL_CLIENTSERVICE } from "../const";

export const clientRequest = function (body) {
    return cy.POST(URL_CLIENTSERVICE, body);
};
// cy.bodyRequestAPI("getMessageAcceptanceReport", cy.recAPI(parameters))
declare global {
    namespace Cypress {
        interface Chainable {
            clientRequestAPI: typeof clientRequest;
        }
    }
}
