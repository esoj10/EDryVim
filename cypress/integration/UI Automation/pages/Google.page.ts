import Page from "./page";

class GooglePage extends Page {
    get URL() {
        return "https://www.google.com/";
    }
    get inputSearch() {
        return 'input[name="q"]';
    }
    get btnSearch() {
        return "div[class='CqAVzb lJ9FBc'] input[name='btnK']";
    }
}

export default new GooglePage();