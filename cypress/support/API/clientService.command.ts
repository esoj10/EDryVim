import { URL_CLIENTSERVICE } from "../const";

export const getMessageAcceptanceReport = function () {
    let body: [1, "getMessageAcceptanceReport", 1, 1,
        {
            "1": {
                "rec": {
                    "1": { "i64": 23643 },
                    "5": { "i32": 1 }, "6": { "i32": 1 }, "7":
                    { "i32": 100 }
                }
            }
        }]
    return cy.POST(URL_CLIENTSERVICE.trim(), body, "");
};
// cy.bodyRequestAPI("getMessageAcceptanceReport", cy.recAPI(parameters))
declare global {
    namespace Cypress {
        interface Chainable {
            getMessageAcceptanceReportAPI: typeof getMessageAcceptanceReport;
        }
    }
}
