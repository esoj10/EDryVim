import YoutubePage from "@/cypress/UI Automation/integration/pages/Youtube.page"

describe("in Youtube", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(YoutubePage.URL);
        YoutubePage.playAVideo('pokemon')
        cy.wait(2000);
    })
    it("try to pause video", () => {
        cy.get(YoutubePage.btnPlayVideo).click();
    })
    it("try put video in cine size", () => {
        cy.get(YoutubePage.btnCineSizeVideo).click();
    })
    it.only("try put video in fullscreen", () => {
        cy.get('.video-stream').dblclick();
    })
    it("try put video in some time", () => {
        cy.get(YoutubePage.barProgressVideo)
            .invoke('attr', 'aria-valuenow', '150').
            trigger("change").click({ force: true });
    })
    it("try open video settings", () => {
        cy.get(YoutubePage.btnSettingsVideo).click();
        cy.wait(2000);
        cy.get(YoutubePage.btnSettingsVideo).click();
    })
})

