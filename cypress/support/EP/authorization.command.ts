import cheerio = require("cheerio");
import { credentials } from "../../fixtures/users.json";

export const authorization = function () {
  var cred = (Cypress.env("domainSuffix") == "jbarrantes.motusclouds.com") ?
    credentials.jose : credentials.stg;
  const url = `${Cypress.env("domainSuffix")}/auth/v1/tickets`;
  cy.request({
    url,
    method: "POST",
    form: true,
    body: {
      username: cred.id,
      password: cred.pass,
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
          service: `${Cypress.env("domainSuffix")}/adminportal2/`,
        },
      })
    )
    .then((postStRequest) =>
      cy.request({
        url: `${Cypress.env("domainSuffix")}/adminportal2/?ticket=${postStRequest.body}`,
        method: "GET",
        form: true,
      })
    );
};

export const authorizationAP2 = function () {
  var cred = (Cypress.env("domainSuffix") == "jbarrantes.motusclouds.com") ?
    credentials.jose : credentials.stg;
  const url = `${Cypress.env("domainSuffix")}/auth/v1/tickets`;
  cy.request({
    url,
    method: "POST",
    form: true,
    body: {
      username: cred.id,
      password: cred.pass,
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
          service: `${Cypress.env("domainSuffix")}/adminportal2/`,
        },
      })
    )
    .then((postStRequest) =>
      cy.request({
        url: `${Cypress.env("domainSuffix")}/adminportal2/?ticket=${postStRequest.body}`,
        method: "GET",
        form: true,
      })
    );
};
declare global {
  namespace Cypress {
    interface Chainable {
      authorizationAPApi: typeof authorization;
    }
  }
}
