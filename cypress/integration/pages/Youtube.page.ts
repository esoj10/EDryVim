import Page from "./page";

class YoutubePage extends Page {

    get URL() {
        return "https://www.youtube.com/";
    }

    get inputSearch() {
        return "#search-input > #search";
    }
    get btnSearch() {
        return "#search-icon-legacy";
    }
    get divFirstVideo() {
        return ":nth-child(3) > :nth-child(1) > #dismissible";
    }
    get btnPlayVideo() {
        return ".ytp-play-button";
    }
    get btnCineSizeVideo() {
        return ".ytp-size-button";
    }
    get btnFullscreenVideo() {
        return ".ytp-fullscreen-button";
    }
    get btnSettingsVideo() {
        return ".ytp-settings-button";
    }
    get barProgressVideo() {
        return ".ytp-progress-bar"
    }

    playAVideo(word) {
        cy.get(this.inputSearch).type(word);
        cy.get(this.btnSearch).click();
        cy.get(this.divFirstVideo).click();
    }


}

export default new YoutubePage()