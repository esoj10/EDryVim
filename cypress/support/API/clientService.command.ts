import { URL_CLIENTSERVICE } from "../const";

export const getMessageAcceptanceReport = function () {
    let curl = URL_CLIENTSERVICE.trim()
    console.log(curl)
    return cy.request({
        url: URL_CLIENTSERVICE.trim(),
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: [1, "getMessageAcceptanceReport", 1, 1,
            {
                "1": {
                    "rec": {
                        "1": { "i64": 23643 },
                        "5": { "i32": 1 }, "6": { "i32": 1 }, "7":
                            { "i32": 100 }
                    }
                }
            }]
    });
};
// cy.bodyRequestAPI("getMessageAcceptanceReport", cy.recAPI(parameters))
declare global {
    namespace Cypress {
        interface Chainable {
            getMessageAcceptanceReportAPI: typeof getMessageAcceptanceReport;
        }
    }
}
