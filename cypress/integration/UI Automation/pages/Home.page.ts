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
        return "section.collapsible-section:nth-child(4) > div:nth-child(1)";
    }
    get checkboxProdFAVR() {
        return "section.collapsible-section:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > span:nth-child(2)";
    }
    get checkboxProdCPM() {
        return "section.collapsible-section:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)";
    }
    get checkboxProdTECH() {
        return "section.collapsible-section:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > span:nth-child(3)";
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