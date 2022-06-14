import YoutubePage from "@pages/Youtube.page"

describe("in Youtube", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(YoutubePage.URL);
    })
    it("try to scroll down", () => {
        cy.scrollTo(0, 500);
        cy.scrollTo(0, 500);
    })
    it("try to put a video", () => {
        cy.get(YoutubePage.inputSearch).type('pokemon');
        cy.get(YoutubePage.btnSearch).click();
        cy.get(YoutubePage.divFirstVideo).click();
    })
})

