import { URL_BASE } from "@/support/const";
require('cypress-xpath');
export class Page {
  baseUrl: string;


  constructor() {
    require('cypress-xpath');
    this.baseUrl = URL_BASE;
  }
  get URL() {
    return this.baseUrl;
  }

}
