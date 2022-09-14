import { Page } from "@pageobjects/page";

class CFSPage extends Page {
    baseUrl: string;

    get dropdownProductName() {
        return ':nth-child(1) > .collapsible-head';
    }

    get checkboxCMP() {
        return ':nth-child(1) > .collapsible-body > [style="position: relative;' +
            ' overflow: hidden; width: 100%; height: auto; min-height: 100%; ' +
            'max-height: 200px;"] > [style="position: relative; overflow: scroll;' +
            ' margin-right: 0px; margin-bottom: 0px; min-height: calc(100% + 0px); ' +
            'max-height: 200px;"] > :nth-child(1) > .form-group > :nth-child(1) > ' +
            ':nth - child(1) > .form - group > : nth - child(1) > : nth - child(1) >' +
            '.form - check - label > .undefined'

    }

    get inputSearch() {
        return '.form-input';
    }

    get btnApply() {
        return '.title-wrapper > .apply-text';
    }
    get btnDownloadExcel() {
        return '.download';
    }
    get btnNotCPM() {
        return ':nth-child(3) > .fa';
    }

}
export default new CFSPage();