export const URL_SAFETYSERVICE = `
${Cypress.env("domainPrefix")}
${Cypress.env("safetyservice")}.
${Cypress.env("domainSuffix")}/
${Cypress.env("safetyservice")}
/thrift/json`

export const URL_PERSONSERVICE = `
${Cypress.env("domainPrefix")}
${Cypress.env("personservice")}.
${Cypress.env("domainSuffix")}/
${Cypress.env("personservice")}
/thrift/json`

export const URL_CLIENTSERVICE = `
${Cypress.env("domainPrefix")}
${Cypress.env("clientservice")}.
${Cypress.env("domainSuffix")} /
${Cypress.env("clientservice")}
/thrift/json`