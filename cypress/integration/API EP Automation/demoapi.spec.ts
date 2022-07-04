describe("in client service", function () {
    beforeEach(function () {
        cy.authorizationAPApi();
    });

    it("get Message Acceptance Report", function () {
        //var parameters = { "1": { "i64": 23643 }, "5": { "i32": 1 }, "6": { "i32": 1 }, "7": { "i32": 100 } }
        cy.getMessageAcceptanceReportAPI();
    });
});
