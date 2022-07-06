import cheerio = require("cheerio");
import { credentials } from "@fixtures/users.json";
import { contains } from "cypress/types/jquery";
import { index } from "cheerio/lib/api/traversing";

export const authorization = function () {
  var cred = getCredentials();
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
  supportAPI();
};

export const authorizationAP2 = function () {
  var cred = getCredentials();
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
  supportAPI();
};

function supportAPI() {
  let domainSuff: String = Cypress.env("domainSuffix");
  if (domainSuff.includes("motusclouds")) {
    Cypress.env("apiSupport", domainSuff);
    Cypress.env("apiPrefix", "http://");
  } else {
    let host = domainSuff.substring(
      domainSuff.indexOf('-') + 1, domainSuff.indexOf('.'));
    host = host + ".us-west-2.motushost.com";
    Cypress.env("apiSupport", host);
    Cypress.env("apiPrefix", "https://");
  }
}
function getCredentials() {
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
