/*
     _    ____ ___ 
    / \  |  _ \_ _|
   / _ \ | |_) | | 
  / ___ \|  __/| | 
 /_/   \_\_|  |___|
                   
*/
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

/*
  _____           _ ____       _       _   
 | ____|_ __   __| |  _ \ ___ (_)_ __ | |_ 
 |  _| | '_ \ / _` | |_) / _ \| | '_ \| __|
 | |___| | | | (_| |  __/ (_) | | | | | |_ 
 |_____|_| |_|\__,_|_|   \___/|_|_| |_|\__|
                                           
*/



/*
  _   _ _   _ _     
 | | | | |_(_) |___ 
 | | | | __| | / __|
 | |_| | |_| | \__ \
  \___/ \__|_|_|___/
                    
*/
export const URL_UserDetails = `
${Cypress.env("domainPrefixS")}
${Cypress.env("domainSuffix")}/
adminportal2/userDetails`.trim()