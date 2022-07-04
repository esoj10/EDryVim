import cheerio = require("cheerio");
import { credentials } from "@fixtures/users.json";

export const authorization = function () {
  var cred = validateCredentials();
  const url = `${Cypress.env("domainPrefixS")}${Cypress.env("domainSuffix")}/auth/v1/tickets`;
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
      console.log(getStUrl);
      return getStUrl;
    })
    .then((url) =>
      cy.request({
        url,
        method: "POST",
        form: true,
        body: {
          service: `${Cypress.env("domainPrefixS")}${Cypress.env("domainSuffix")}/adminportal2/`,
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
  var cred = validateCredentials();
  const url = `https://${Cypress.env("domainSuffix")}/auth/v1/tickets`;
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
      console.log(getStUrl)
      return getStUrl;
    })
    .then((url) =>
      cy.request({
        url,
        method: "POST",
        form: true,
        body: {
          service: `https://${Cypress.env("domainSuffix")}/adminportal2/`,
        },
      })
    )
    .then((postStRequest) =>
      cy.request({
        url: `https://${Cypress.env("domainSuffix")}/adminportal2/?ticket=${postStRequest.body} `,
        method: "GET",
        form: true,
      })
    );
};

function validateCredentials() {
  if (Cypress.env("domainSuffix") == "jbarrantes.motusclouds.com") {
    return credentials.jose;
  } else {
    return credentials.stg;
  }

}
declare global {
  namespace Cypress {
    interface Chainable {
      authorizationApi: typeof authorization;
      authorizationAPApi: typeof authorizationAP2;
    }
  }
}
