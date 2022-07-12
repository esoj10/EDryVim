

/*
  _   _ ___ 
 | | | |_ _|
 | | | || | 
 | |_| || | 
  \___/|___|
            
*/
export const URL_BASE = `
${Cypress.env("prefix")}
${Cypress.env("domain")}/
adminportal2/`.trim();

/*
     _    ____ ___
    / \  |  _ \_ _|
   / _ \ | |_) | |
  / ___ \|  __/| |
 /_/   \_\_|  |___|

*/
export const URL_SAFETYSERVICE = (Cypress.env("apiDomain") === "") ? `
${Cypress.env("apiPrefix")}
${Cypress.env("safetyService")}.
${Cypress.env("domain")}/
${Cypress.env("safetyService")}
/thrift/json/`.trim() : `
${Cypress.env("prefix")}
${Cypress.env("safetyService")}.
${Cypress.env("apiDomain")}/
${Cypress.env("safetyService")}
/thrift/json/`.trim()

export const URL_PERSONSERVICE = (Cypress.env("apiDomain") === "") ? `
${Cypress.env("apiPrefix")}
${Cypress.env("personService")}.
${Cypress.env("domain")}/
${Cypress.env("personService")}
/thrift/json/`.trim() : `
${Cypress.env("prefix")}
${Cypress.env("personService")}.
${Cypress.env("apiDomain")}/
${Cypress.env("personService")}
/thrift/json/`.trim()

export const URL_CLIENTSERVICE = (Cypress.env("apiDomain") === "") ? `
${Cypress.env("apiPrefix")}
${Cypress.env("clientService")}.
${Cypress.env("domain")}/
${Cypress.env("clientService")}
/thrift/json/`.trim() : `
${Cypress.env("prefix")}
${Cypress.env("clientService")}.
${Cypress.env("apiDomain")}/
${Cypress.env("clientService")}
/thrift/json/`.trim()

export const URL_MVRSERVICE = (Cypress.env("apiDomain") === "") ? `
${Cypress.env("apiPrefix")}
${Cypress.env("mvrService")}.
${Cypress.env("domain")}/
${Cypress.env("mvrService")}
/thrift/json/`.trim() : `
${Cypress.env("prefix")}
${Cypress.env("mvrService")}.
${Cypress.env("apiDomain")}/
${Cypress.env("mvrService")}
/thrift/json/`.trim()

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
export const URL_UserDetails = URL_BASE + `userDetails`.trim()

export const URL_Companies = URL_BASE + `companies`.trim()

export const URL_PermissionsByRole = URL_BASE + `permissions-by-role`.trim()