import { URL_CLIENTSERVICE, URL_UserDetails } from "../const";

export const userDetails = function () {
    let curl = URL_CLIENTSERVICE.trim()
    console.log(curl)
    return cy.request({
        url: URL_UserDetails.trim(),
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: ""
    });
};

export const companies = function () {
    let curl = URL_CLIENTSERVICE.trim()
    console.log(curl)
    return cy.request({
        url: URL_UserDetails.trim(),
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            "searchTerm": "",
            "orderBy": 0,
            "sortOrder": 0,
            "limit": 30000,
            "offset": 0
        }
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            userDetailsEP: typeof userDetails;
        }
    }
}
