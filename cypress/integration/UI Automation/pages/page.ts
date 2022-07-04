export class Page {
  baseUrl: string;

  constructor() {
    this.baseUrl = Cypress.env("url");
  }
}
