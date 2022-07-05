import { map } from "cypress/types/bluebird";

describe("in client service", function () {
    beforeEach(function () {
        cy.authorizationAPApi();
    });

    it("get Message Acceptance Report", function () {
        //var parameters = { "1": { "i64": 23643 }, "5": { "i32": 1 }, "6": { "i32": 1 }, "7": { "i32": 100 } }
        cy.getMessageAcceptanceReportAPI();
    });
    it.only("Get the details of the user", function () {
        cy.userDetailsEP().then((response) => {
            expect(JSON.stringify(response.body.id)).include('255130');
            expect(JSON.stringify(response.body.userFullName)).include('Inez Nelson');
            expect(JSON.stringify(response.body)).include('akore');
        })
    });
});
