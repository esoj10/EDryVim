import { URL_Companies, URL_UserDetails, URL_PermissionsByRole } from "../const";

export const userDetails = function () {
    return cy.GET(URL_UserDetails.trim(), "", "");
};

export const companies = function () {
    let body = {
        "searchTerm": "",
        "orderBy": 0,
        "sortOrder": 0,
        "limit": 30000,
        "offset": 0
    }
    return cy.GET(URL_Companies.trim(), body, "");
};

export const permissionsByRole = function () {
    return cy.GET(URL_PermissionsByRole.trim(), "", "");
};

declare global {
    namespace Cypress {
        interface Chainable {
            userDetailsEP: typeof userDetails;
            companiesEP: typeof companies;
            permissionsByRoleEP: typeof permissionsByRole;
        }
    }
}
