describe("in client service", function () {
    beforeEach(function () {
        cy.authorizationAPApi();
    });

    it("Get the details of the user", function () {
        cy.userDetailsEP().then((response) => {
            expect(JSON.stringify(response.body.id)).include('255130');
            expect(JSON.stringify(response.body.userFullName)).include('Inez Nelson');
            expect(JSON.stringify(response.body)).include('akore');
        })
    });

    it("Get the companies", function () {
        cy.companiesEP().then((response) => {
            expect(JSON.stringify(response.body.companies)).include('566');
            expect(JSON.stringify(response.body.companies)).include('Affinitiv');
            expect(JSON.stringify(response.body.companies)).include('567');
        })
    });
    it("Get a permision details by user role", function () {
        cy.permissionsByRoleEP().then((response) => {
            expect(JSON.stringify(response.body)).include('24');
            expect(JSON.stringify(response.body)).include('M3 Super Admin');
            expect(JSON.stringify(response.body))
                .include('M3 Super Admin');
        })
    });
});
