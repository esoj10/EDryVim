import { Page } from "./page";

class HeadersPage extends Page {
    get tabHome() {
        return '.header__nav > :nth-child(1) > .clearfix > :nth-child(1) > a';
    }
    get tabCustomer() {
        return '.header__nav > :nth-child(1) > .clearfix > :nth-child(2) > a';
    }
    get tabReports() {
        return '.header__nav > :nth-child(1) > .clearfix > :nth-child(3) > a';
    }
    get tabHelpCenter() {
        return '.header__nav > :nth-child(1) > .clearfix > :nth-child(4) > a';
    }
}

export default new HeadersPage();