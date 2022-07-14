import { URL_AP } from "@/support/const";
import { Page } from "./page";

class HomePage extends Page {

    get URL() {
        return URL_AP;
    }
    get inputSearch() {
        return '.form-input';
    }
    get dropDownProduct() {
        return ":nth-child(4) > .collapsible-head";
    }
    get checkboxProdFAVR() {
        return ":nth-child(4) > .collapsible-body > :nth-child(1) > .form-group > :nth-child(1) > :nth-child(1) > .form-check-label";
    }
    get checkboxProdCPM() {
        return ":nth-child(4) > .collapsible-body > :nth-child(1) > .form-group > :nth-child(1) > :nth-child(2) > .form-check-label";
    }
    get checkboxProdTECH() {
        return ":nth-child(4) > .collapsible-body > :nth-child(1) > .form-group > :nth-child(1) > :nth-child(3) > .form-check-label";
    }
    get btnSearch() {
        return "div[class='CqAVzb lJ9FBc'] input[name='btnK']";
    }
    get fistElement() {
        return 'tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) span:nth-child(1)';
        //return '#viewContainer > div > div.table-container > div > div.common-data-table.null > div > div > div.react-bs-table.react-bs-table-bordered > div.react-bs-container-body > table > tbody > tr:nth-child(1) > td.customer-cell > div > span.field-name.customer-name-link'.trim();
    }

}

export default new HomePage();