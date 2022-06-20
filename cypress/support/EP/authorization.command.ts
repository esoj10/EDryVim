import cheerio = require("cheerio");

export const authorization = function () {
  const url = `${Cypress.env("url")}/auth/v1/tickets`;
  cy.request({
    url,
    method: "POST",
    form: true,
    body: {
      username: "sloe",
      password: "1",
    },
  })
    .then((response) => {
      const $ = cheerio.load(response.body);
      const getTgtLink = $("form").attr("action");
      const getStUrl = getTgtLink; // -> remover
      return getStUrl;
    })
    .then((url) =>
      cy.request({
        url,
        method: "POST",
        form: true,
        body: {
          service: `${Cypress.env("url")}/bankingapi/`,
        },
      })
    )
    .then((postStRequest) =>
      cy.request({
        url: `${Cypress.env("url")}/bankingapi/?ticket=${postStRequest.body}`,
        method: "GET",
        form: true,
      })
    );
};

export const authorizationAP2 = function () {
  const url = `${Cypress.env("url")}/auth/v1/tickets`;
  cy.request({
    url,
    method: "POST",
    form: true,
    body: {
      username: "sloe",
      password: "1",
    },
  })
    .then((response) => {
      const $ = cheerio.load(response.body);
      const getTgtLink = $("form").attr("action");
      const getStUrl = getTgtLink; // -> remover
      return getStUrl;
    })
    .then((url) =>
      cy.request({
        url,
        method: "POST",
        form: true,
        body: {
          service: `${Cypress.env("url")}/bankingapi/`,
        },
      })
    )
    .then((postStRequest) =>
      cy.request({
        url: `${Cypress.env("url")}/bankingapi/?ticket=${postStRequest.body}`,
        method: "GET",
        form: true,
      })
    );
};
declare global {
  namespace Cypress {
    interface Chainable {
      authorizationBankingApi: typeof authorization;
    }
  }
}
