import { URL_CLIENTSERVICE } from "../const";

<<<<<<< HEAD
export const getMessageAcceptanceReport = function () {
    return cy.request({
        method: "POST",
        url: URL_CLIENTSERVICE,
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
=======
export const clientRequest = function (body) {
    return cy.POST(URL_CLIENTSERVICE, body);
>>>>>>> 98cdbff85bc707f2f8626211a7c40aa8ac6382ed
};
// cy.bodyRequestAPI("getMessageAcceptanceReport", cy.recAPI(parameters))
declare global {
    namespace Cypress {
        interface Chainable {
<<<<<<< HEAD
            getMessageAcceptanceReportAPI: typeof getMessageAcceptanceReport;
=======
            clientRequestAPI: typeof clientRequest;
>>>>>>> 98cdbff85bc707f2f8626211a7c40aa8ac6382ed
        }
    }
}
