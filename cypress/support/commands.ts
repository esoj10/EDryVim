import * as clientServiceAPI from "./API/clientService.command"
import * as safetyServiceAPI from "./API/safetyService.command"
import * as MVRServiceAPI from "./API/MVRService.command"

import * as utilsAPI from "./API/utils.command"

import * as authorizationAPI from "./EP/authorization.command";
import * as generalEndPointEP from "./EP/generalEndPoint.command";


import cypress = require("cypress");

//to add an command, add a line Cypress.Commands.add("asCommandName",class.function);
/*
     _    ____ ___ 
    / \  |  _ \_ _|
   / _ \ | |_) | | 
  / ___ \|  __/| | 
 /_/   \_\_|  |___|
                   
*/

/*
    Autorization
*/
Cypress.Commands.add("authorizationApi", authorizationAPI.authorization);
Cypress.Commands.add("authorizationAPApi", authorizationAPI.authorizationAP2);

/*
    Client Service
*/
Cypress.Commands.add("clientRequestAPI",
  clientServiceAPI.clientRequest);

/*
    Safety Service
*/
Cypress.Commands.add("safetyRequestAPI",
  safetyServiceAPI.safetyRequest);


/*
    MVR Service
*/
Cypress.Commands.add("MVRRequestAPI", MVRServiceAPI.MVRRequest);

/*
  _____           _ ____       _       _   
 | ____|_ __   __| |  _ \ ___ (_)_ __ | |_ 
 |  _| | '_ \ / _` | |_) / _ \| | '_ \| __|
 | |___| | | | (_| |  __/ (_) | | | | | |_ 
 |_____|_| |_|\__,_|_|   \___/|_|_| |_|\__|
                                           
*/

/*
    generalEndPoint
*/
Cypress.Commands.add("userDetailsEP", generalEndPointEP.userDetails);
Cypress.Commands.add("permissionsByRoleEP", generalEndPointEP.permissionsByRole);
Cypress.Commands.add("companiesEP", generalEndPointEP.companies);

/*
  _   _ _   _ _     
 | | | | |_(_) |___ 
 | | | | __| | / __|
 | |_| | |_| | \__ \
  \___/ \__|_|_|___/
                                        
*/
Cypress.Commands.add("bodyRequestAPI", utilsAPI.bodyRequest);
Cypress.Commands.add("lstAPI", utilsAPI.lst);
Cypress.Commands.add("recAPI", utilsAPI.rec);
Cypress.Commands.add("GET", utilsAPI.GET);
Cypress.Commands.add("POST", utilsAPI.POST);