export const URL_SAFETYSERVICE = `
${Cypress.env("domainPrefix")}
${Cypress.env("safetyService")}.
${Cypress.env("domainSuffix")}/
${Cypress.env("safetyService")}
/thrift/json/`.trim()

export const URL_PERSONSERVICE = `
${Cypress.env("domainPrefix")}
${Cypress.env("personService")}.
${Cypress.env("domainSuffix")}/
${Cypress.env("personService")}
/thrift/json/`.trim()

export const URL_CLIENTSERVICE = `${Cypress.env("domainPrefix")}${Cypress.env("clientService")}.${Cypress.env("domainSuffix")}/${Cypress.env("clientService")}/thrift/json/`.trim()