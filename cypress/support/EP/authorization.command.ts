import cheerio = require("cheerio");
import { credentials } from "@fixtures/users.json";
import { contains } from "cypress/types/jquery";
import { index } from "cheerio/lib/api/traversing";

export const authorization = function () {
  var cred = getCredentials();
  const url = `https://${Cypress.env("domain")}/auth/v1/tickets`.trim();
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
      return $("form").attr("action");
    })
    .then((url) =>
      cy.request({
        url,
        method: "POST",
        form: true,
        body: {
          service: `https://${Cypress.env("domain")}/adminportal2/`,
        },
      })
    )
    .then((postStRequest) =>
      cy.request({
        url: `https://${Cypress.env("domain")}/adminportal2/?ticket=${postStRequest.body}`,
        method: "GET",
        form: true,
      })
    );
};

export const authorizationAP2 = function () {
  var cred = getCredentials();
  const url = `https://${Cypress.env("domain")}/auth/v1/tickets`;
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
          service: `https://${Cypress.env("domain")}/adminportal2/`,
        },
      })
    )
    .then((postStRequest) => {
      cy.request({
        url: `https://${Cypress.env("domain")}/adminportal2/?ticket=${postStRequest.body} `,
        method: "GET",
        form: true,
      })
    }
    );
};
function getCredentials() {
  if (Cypress.env("domain") == "jbarrantes.motusclouds.com") {
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
