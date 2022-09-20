import { URL_SAFETYSERVICE } from "../const";

export const safetyRequest = function (
    typeLst: string,
    parameters: any
) {
    return cy.request({
        method: "POST",
        url: URL_SAFETYSERVICE,
        headers: {
            "content-type": "application/json",
        },
        body: cy.bodyRequestAPI("sendNotificationsForNewModuleAvailable",
            cy.lstAPI(typeLst, parameters))
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            safetyRequestAPI: typeof safetyRequest;

        }
    }
}
